(() => {
  'use strict';

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  const locations = Array.isArray(LOCS) ? [...LOCS] : [];
  const categories = CATS || {};
  const activeCats = new Set(Object.keys(categories));
  const markers = new Map();
  const bounds = [];
  let selectedLocationId = null;
  let searchTerm = '';

  const navButtons = $$('.nav-btn');
  const views = {
    home: $('#home-view'),
    map: $('#map-view')
  };
  const legendDetail = $('#legend-detail');
  const mapInfoPanel = $('#map-info-panel');
  const filterGrid = $('#filter-grid');
  const legendContent = $('#legend-content');
  const searchInput = $('#search-input');
  const statLocations = $('#stat-locations');
  const statCategories = $('#stat-categories');

  statLocations.textContent = String(locations.length);
  statCategories.textContent = String(Object.keys(categories).length);

  const map = L.map('map', { zoomControl: true, worldCopyJump: true }).setView([51.5, -3.5], 5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const markerIcon = (cat) => {
    const color = categories[cat]?.color || '#8B1E1E';
    return L.divIcon({
      className: 'carta-marker',
      html: `<span style="background:${color};border:2px solid #f0d789;width:17px;height:17px;border-radius:50%;display:block;box-shadow:0 0 0 4px rgba(0,0,0,.38),0 0 18px ${color}"></span>`,
      iconSize: [17, 17],
      iconAnchor: [8, 8]
    });
  };

  const compactText = (text, limit = 145) => {
    const value = String(text || '');
    return value.length > limit ? `${value.slice(0, limit).trim()}…` : value;
  };

  const renderTags = (items) => (items || []).slice(0, 10)
    .map((item) => `<span class="tag">${escapeHTML(item)}</span>`)
    .join('');

  const renderEventLinks = (loc) => (loc.events || []).slice(0, 8)
    .map((eventName) => `<button class="event-link" type="button" data-open-legend="${loc.id}" title="Ouvrir la fiche de légende associée">${escapeHTML(eventName)}</button>`)
    .join('');

  const renderSources = (items) => (items || []).slice(0, 7)
    .map((item) => `<li>${escapeHTML(item)}</li>`)
    .join('');

  const locationMatches = (loc) => {
    if (!activeCats.has(loc.cat)) return false;
    if (!searchTerm) return true;
    const haystack = [
      loc.name,
      loc.region,
      loc.desc,
      categories[loc.cat]?.label,
      ...(loc.chars || []),
      ...(loc.events || []),
      ...(loc.sources || [])
    ].join(' ').toLowerCase();
    return haystack.includes(searchTerm);
  };

  const switchView = (viewName) => {
    Object.entries(views).forEach(([name, view]) => {
      view.classList.toggle('active', name === viewName);
    });

    navButtons.forEach((button) => {
      const active = button.dataset.view === viewName;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    if (viewName === 'map') {
      window.setTimeout(() => {
        map.invalidateSize();
        if (selectedLocationId && markers.has(selectedLocationId)) {
          focusMapLocation(markers.get(selectedLocationId).loc, false);
        } else if (bounds.length) {
          map.fitBounds(bounds, { padding: [36, 36] });
        }
      }, 80);
    }
  };

  const renderLegendDetail = (loc) => {
    legendDetail.innerHTML = `
      <p class="eyebrow">${escapeHTML(categories[loc.cat]?.label || loc.cat)}</p>
      <h2 class="detail-title">${escapeHTML(loc.name)}</h2>
      <div class="detail-region">${escapeHTML(loc.region || 'Localisation légendaire')}</div>
      <div class="detail-desc">${escapeHTML(loc.desc || '')}</div>
      ${loc.chars?.length ? `<div class="section-label">Personnages</div><div class="tag-list">${renderTags(loc.chars)}</div>` : ''}
      ${loc.events?.length ? `<div class="section-label">Événements liés</div><div class="tag-list">${renderEventLinks(loc)}</div>` : ''}
      ${loc.sources?.length ? `<div class="section-label">Sources</div><ul class="sources">${renderSources(loc.sources)}</ul>` : ''}
      <button class="map-action" type="button" data-open-map="${loc.id}">Voir sur la carte →</button>
    `;
  };

  const highlightLegendCard = (locId) => {
    $$('.legend-item').forEach((item) => {
      item.classList.toggle('active', Number(item.dataset.id) === locId);
    });
  };

  const openLegend = (locId, { navigate = true, scroll = true } = {}) => {
    const entry = markers.get(Number(locId));
    if (!entry) return;
    selectedLocationId = entry.loc.id;
    renderLegendDetail(entry.loc);
    renderLegend();
    highlightLegendCard(entry.loc.id);

    if (navigate) switchView('home');

    if (scroll) {
      window.setTimeout(() => {
        const card = legendContent.querySelector(`[data-id="${entry.loc.id}"]`);
        card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 80);
    }
  };

  const showMapInfo = (loc) => {
    selectedLocationId = loc.id;
    renderLegendDetail(loc);
    renderLegend();
    highlightLegendCard(loc.id);
    mapInfoPanel.innerHTML = `
      <p class="eyebrow">${escapeHTML(categories[loc.cat]?.label || loc.cat)}</p>
      <h2 class="detail-title">${escapeHTML(loc.name)}</h2>
      <div class="detail-region">${escapeHTML(loc.region || 'Localisation légendaire')}</div>
      <div class="detail-desc">${escapeHTML(compactText(loc.desc, 280))}</div>
      ${loc.chars?.length ? `<div class="section-label">Personnages clés</div><div class="tag-list">${renderTags(loc.chars)}</div>` : ''}
      ${loc.events?.length ? `<div class="section-label">Événements liés — clique pour ouvrir la légende</div><div class="tag-list">${renderEventLinks(loc)}</div>` : ''}
      ${loc.sources?.length ? `<div class="section-label">Sources</div><ul class="sources">${renderSources(loc.sources)}</ul>` : ''}
    `;
  };

  const focusMapLocation = (loc, openPopup = true) => {
    const entry = markers.get(loc.id);
    if (!entry) return;
    switchView('map');
    window.setTimeout(() => {
      map.setView([loc.lat, loc.lng], Math.max(map.getZoom(), 7), { animate: true });
      showMapInfo(loc);
      if (openPopup) entry.marker.openPopup();
    }, 120);
  };

  const addMarker = (loc) => {
    const marker = L.marker([loc.lat, loc.lng], { icon: markerIcon(loc.cat), title: loc.name })
      .bindPopup(`
        <div class="popup-title">${escapeHTML(loc.name)}</div>
        <div class="popup-region">${escapeHTML(loc.region || '')}</div>
        <div class="popup-hint">Détails affichés dans le panneau de carte.</div>
      `)
      .on('click', () => showMapInfo(loc));
    markers.set(loc.id, { marker, loc });
    bounds.push([loc.lat, loc.lng]);
  };

  const refreshMarkers = () => {
    markers.forEach(({ marker, loc }) => {
      if (activeCats.has(loc.cat)) {
        if (!map.hasLayer(marker)) marker.addTo(map);
      } else if (map.hasLayer(marker)) {
        marker.remove();
      }
    });
  };

  const renderFilters = () => {
    filterGrid.innerHTML = Object.entries(categories).map(([key, cat]) => `
      <button class="filter-btn${activeCats.has(key) ? '' : ' off'}" type="button" data-cat="${escapeHTML(key)}">
        <span class="filter-dot" style="background:${cat.color || '#d5b35a'}"></span>${escapeHTML(cat.label || key)}
      </button>
    `).join('');
  };

  const renderLegend = () => {
    const filtered = locations.filter(locationMatches);
    if (!filtered.length) {
      legendContent.innerHTML = '<p class="placeholder">Aucun lieu ne correspond à cette recherche.</p>';
      return;
    }

    legendContent.innerHTML = filtered.map((loc) => `
      <button class="legend-item${selectedLocationId === loc.id ? ' active' : ''}" type="button" data-id="${loc.id}" style="--cat-color:${categories[loc.cat]?.color || '#d5b35a'}">
        <div class="legend-item-title">${escapeHTML(loc.name)}</div>
        <div class="legend-item-meta">${escapeHTML(categories[loc.cat]?.label || loc.cat)} · ${escapeHTML(loc.region || '')}</div>
        <div class="legend-item-desc">${escapeHTML(compactText(loc.desc, 110))}</div>
      </button>
    `).join('');
  };

  navButtons.forEach((button) => {
    button.addEventListener('click', () => switchView(button.dataset.view));
  });

  filterGrid.addEventListener('click', (event) => {
    const button = event.target.closest('[data-cat]');
    if (!button) return;
    const cat = button.dataset.cat;
    activeCats.has(cat) ? activeCats.delete(cat) : activeCats.add(cat);
    renderFilters();
    renderLegend();
    refreshMarkers();
  });

  searchInput.addEventListener('input', (event) => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderLegend();
  });

  legendContent.addEventListener('click', (event) => {
    const item = event.target.closest('[data-id]');
    if (!item) return;
    openLegend(Number(item.dataset.id), { navigate: false, scroll: false });
  });

  document.addEventListener('click', (event) => {
    const eventLink = event.target.closest('[data-open-legend]');
    if (eventLink) {
      openLegend(Number(eventLink.dataset.openLegend), { navigate: true, scroll: true });
      return;
    }

    const mapLink = event.target.closest('[data-open-map]');
    if (mapLink) {
      const entry = markers.get(Number(mapLink.dataset.openMap));
      if (entry) focusMapLocation(entry.loc, true);
    }
  });

  locations.forEach(addMarker);
  renderFilters();
  renderLegend();
  refreshMarkers();

  if (locations[0]) openLegend(locations[0].id, { navigate: false, scroll: false });
})();
