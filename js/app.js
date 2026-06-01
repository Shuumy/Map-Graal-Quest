(() => {
  'use strict';

  const $ = (selector) => document.querySelector(selector);
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  const map = L.map('map', { zoomControl: true, worldCopyJump: true }).setView([51.5, -3.5], 5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const sidebar = $('#sidebar');
  const infoPanel = $('#info-panel');
  const filterGrid = $('#filter-grid');
  const legendContent = $('#legend-content');
  const toggleButton = $('#legend-toggle-btn');
  const closeButton = $('#close-btn');

  const locations = Array.isArray(LOCS) ? LOCS : [];
  const categories = CATS || {};
  const activeCats = new Set(Object.keys(categories));
  const markers = new Map();
  const bounds = [];

  const markerIcon = (cat) => {
    const color = categories[cat]?.color || '#8B1E1E';
    return L.divIcon({
      className: 'carta-marker',
      html: `<span style="background:${color};border:2px solid #f0d789;width:16px;height:16px;border-radius:50%;display:block;box-shadow:0 0 0 3px rgba(0,0,0,.35)"></span>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8]
    });
  };

  const renderTags = (items) => (items || []).slice(0, 8).map((item) => `<span class="tag">${escapeHTML(item)}</span>`).join('');
  const renderSources = (items) => (items || []).slice(0, 6).map((item) => `<li>${escapeHTML(item)}</li>`).join('');

  const showDetails = (loc) => {
    sidebar.classList.add('open');
    toggleButton.setAttribute('aria-expanded', 'true');
    infoPanel.innerHTML = `
      <h2 class="detail-title">${escapeHTML(loc.name)}</h2>
      <div class="detail-region">${escapeHTML(loc.region || 'Localisation légendaire')}</div>
      <div class="detail-desc">${escapeHTML(loc.desc || '')}</div>
      ${loc.chars?.length ? `<div class="tag-list">${renderTags(loc.chars)}</div>` : ''}
      ${loc.events?.length ? `<div class="tag-list">${renderTags(loc.events)}</div>` : ''}
      ${loc.sources?.length ? `<div class="sidebar-section-title">Sources</div><ul class="sources">${renderSources(loc.sources)}</ul>` : ''}
    `;
  };

  const addMarker = (loc) => {
    const marker = L.marker([loc.lat, loc.lng], { icon: markerIcon(loc.cat), title: loc.name })
      .bindPopup(`<div class="popup-title">${escapeHTML(loc.name)}</div><div class="popup-region">${escapeHTML(loc.region || '')}</div>`)
      .on('click', () => showDetails(loc));
    markers.set(loc.id, { marker, loc });
    bounds.push([loc.lat, loc.lng]);
  };

  locations.forEach(addMarker);
  if (bounds.length) map.fitBounds(bounds, { padding: [28, 28] });

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
      <button class="filter-btn" type="button" data-cat="${escapeHTML(key)}">
        <span class="filter-dot" style="background:${cat.color || '#d5b35a'}"></span>${escapeHTML(cat.label || key)}
      </button>
    `).join('');
    filterGrid.addEventListener('click', (event) => {
      const button = event.target.closest('[data-cat]');
      if (!button) return;
      const cat = button.dataset.cat;
      activeCats.has(cat) ? activeCats.delete(cat) : activeCats.add(cat);
      button.classList.toggle('off', !activeCats.has(cat));
      refreshMarkers();
    });
  };

  const renderLegend = () => {
    legendContent.innerHTML = locations.map((loc) => `
      <div class="legend-item" data-id="${loc.id}">
        <div class="legend-item-title">${escapeHTML(loc.name)}</div>
        <div class="legend-item-meta">${escapeHTML(categories[loc.cat]?.label || loc.cat)} · ${escapeHTML(loc.region || '')}</div>
      </div>
    `).join('');
    legendContent.addEventListener('click', (event) => {
      const item = event.target.closest('[data-id]');
      if (!item) return;
      const entry = markers.get(Number(item.dataset.id));
      if (!entry) return;
      map.setView([entry.loc.lat, entry.loc.lng], Math.max(map.getZoom(), 7), { animate: true });
      entry.marker.openPopup();
      showDetails(entry.loc);
    });
  };

  toggleButton.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    toggleButton.setAttribute('aria-expanded', String(open));
  });
  closeButton.addEventListener('click', () => {
    sidebar.classList.remove('open');
    toggleButton.setAttribute('aria-expanded', 'false');
  });

  renderFilters();
  renderLegend();
  refreshMarkers();
})();
