(() => {
  'use strict';

  const SVG_NS = 'http://www.w3.org/2000/svg';
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));

  const locations = Array.isArray(LOCS) ? [...LOCS] : [];
  const categories = CATS || {};
  const activeCats = new Set(Object.keys(categories));
  const markers = new Map();
  const atlasPositions = new Map();

  let selectedLocationId = null;
  let searchTerm = '';

  const navButtons = $$('.nav-btn');
  const brand = $('#brand');
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
  const atlasStage = $('#atlas-stage');

  if (!views.home || !views.map || !legendDetail || !mapInfoPanel || !filterGrid || !legendContent || !atlasStage) {
    console.error('Carta Arthuriana: structure HTML incomplète.');
    return;
  }

  statLocations.textContent = String(locations.length);
  statCategories.textContent = String(Object.keys(categories).length);

  const compactText = (text, limit = 145) => {
    const value = String(text || '');
    return value.length > limit ? `${value.slice(0, limit).trim()}…` : value;
  };

  const categoryGlyph = (cat) => ({
    arthur: '♛', merlin: '✦', lancelot: 'L', guinevere: 'G', tristan: 'T', gawain: 'W', grail: '☩', mordred: 'M', morgan: '☾', creature: '◆', encounter: '⚔', wonder: '✧', artifact: '†'
  }[cat] || '•');

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
    if (!views[viewName]) return;

    Object.entries(views).forEach(([name, view]) => {
      view.classList.toggle('active', name === viewName);
    });

    navButtons.forEach((button) => {
      const active = button.dataset.view === viewName;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  };

  const mainProjection = (loc) => {
    const minLng = -11.5;
    const maxLng = 9.2;
    const minLat = 43.0;
    const maxLat = 59.7;
    const x = 96 + ((loc.lng - minLng) / (maxLng - minLng)) * 930;
    const y = 78 + ((maxLat - loc.lat) / (maxLat - minLat)) * 610;
    return { x, y };
  };

  const baseAtlasPosition = (loc) => {
    if (loc.id === 15 || /rome/i.test(loc.name)) {
      return { x: 956, y: 602, zone: 'rome' };
    }

    if (loc.id === 39 || /sarras/i.test(loc.name)) {
      return { x: 1074, y: 602, zone: 'sarras' };
    }

    if (loc.lat < 42.8 || loc.lng > 9.4) {
      return { x: 1074, y: 602, zone: 'sarras' };
    }

    return { ...mainProjection(loc), zone: 'main' };
  };

  const computeAtlasPositions = () => {
    const groups = new Map();

    locations.forEach((loc) => {
      const base = baseAtlasPosition(loc);
      const key = `${base.zone}:${Math.round(base.x / 18)}:${Math.round(base.y / 18)}`;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push({ loc, base });
    });

    groups.forEach((items) => {
      items.forEach(({ loc, base }, index) => {
        if (items.length === 1) {
          atlasPositions.set(loc.id, base);
          return;
        }

        const angle = (Math.PI * 2 * index) / items.length;
        const radius = Math.min(28, 12 + items.length * 2.5);
        atlasPositions.set(loc.id, {
          ...base,
          x: base.x + Math.cos(angle) * radius,
          y: base.y + Math.sin(angle) * radius
        });
      });
    });
  };

  const atlasTemplate = () => `
    <svg id="atlas-svg" viewBox="0 0 1200 760" role="img" aria-label="Carte manuscrite du monde arthurien">
      <defs>
        <filter id="inkWobble">
          <feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="8" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.7" />
        </filter>
        <radialGradient id="seaGlow" cx="52%" cy="43%" r="70%">
          <stop offset="0" stop-color="#9fc5bc" />
          <stop offset="1" stop-color="#6d928b" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width="1200" height="760" fill="url(#seaGlow)" />
      <path class="atlas-waterline" d="M120 210 C250 155 375 160 470 205 S700 252 875 178 S1095 120 1155 190" />
      <path class="atlas-waterline" d="M95 520 C240 465 390 500 510 545 S765 605 936 515 S1084 440 1164 492" />
      <path class="atlas-waterline" d="M205 360 C315 325 405 348 508 375 S710 395 805 345" />

      <path class="atlas-land alt" d="M202 239 C169 249 146 282 153 322 C158 358 145 391 168 426 C194 465 241 449 260 417 C277 389 306 367 296 329 C286 292 285 258 249 244 C235 238 219 233 202 239 Z" />
      <path class="atlas-land" d="M403 132 C358 162 357 212 386 247 C356 283 369 331 405 353 C393 390 418 433 460 429 C503 424 522 384 501 352 C541 328 537 279 504 256 C529 218 507 159 461 139 C444 132 423 123 403 132 Z" />
      <path class="atlas-land" d="M484 97 C441 114 430 161 461 192 C493 219 525 213 546 178 C577 167 574 125 544 103 C526 90 505 89 484 97 Z" />
      <path class="atlas-land alt" d="M362 361 C333 386 339 433 377 452 C413 471 447 454 461 417 C473 386 444 353 412 351 C392 350 375 352 362 361 Z" />
      <path class="atlas-land" d="M454 397 C535 342 645 338 748 318 C830 301 926 250 1032 283 C1100 304 1131 368 1098 434 C1063 505 1117 576 1056 648 C1006 706 858 684 771 666 C681 648 573 678 493 633 C423 593 401 505 454 397 Z" />
      <path class="atlas-land alt" d="M388 448 C336 451 308 497 318 536 C332 590 403 596 442 558 C477 525 463 468 421 452 C410 448 399 447 388 448 Z" />
      <path class="atlas-land" d="M834 356 C894 336 958 338 1007 373 C1035 394 1027 428 989 439 C932 456 852 421 834 356 Z" />
      <path class="atlas-land mystic" d="M1077 320 C1107 306 1140 317 1150 348 C1158 375 1137 404 1105 407 C1072 410 1047 386 1051 356 C1053 341 1061 328 1077 320 Z" />

      <path class="atlas-border" d="M520 445 C605 408 667 422 729 386" />
      <path class="atlas-border" d="M685 556 C748 522 810 524 872 558" />
      <path class="atlas-border" d="M789 344 C816 410 811 474 781 534" />

      <path class="atlas-route" d="M463 268 C558 302 676 342 768 418 C861 494 918 552 956 602" />
      <path class="atlas-route" d="M562 530 C716 578 894 590 1074 602" />
      <path class="atlas-route" d="M418 383 C462 492 414 579 356 647" />

      <g aria-hidden="true">
        <path class="atlas-mountain" d="M810 480 l18 -38 l20 38 Z" /><path class="atlas-mountain" d="M842 493 l22 -46 l24 46 Z" /><path class="atlas-mountain" d="M878 506 l24 -52 l27 52 Z" />
        <path class="atlas-mountain" d="M946 410 l18 -38 l20 38 Z" /><path class="atlas-mountain" d="M976 424 l22 -46 l24 46 Z" />
        <path class="atlas-mountain" d="M620 574 l17 -36 l19 36 Z" /><path class="atlas-mountain" d="M650 584 l22 -44 l24 44 Z" />
        <path class="atlas-tree" d="M385 405 l14 -28 l14 28 h-8 l12 22 h-36 l12 -22 Z" /><path class="atlas-tree" d="M414 418 l14 -28 l14 28 h-8 l12 22 h-36 l12 -22 Z" /><path class="atlas-tree" d="M444 410 l14 -28 l14 28 h-8 l12 22 h-36 l12 -22 Z" />
        <path class="atlas-tree" d="M512 542 l13 -26 l13 26 h-7 l11 21 h-34 l11 -21 Z" /><path class="atlas-tree" d="M540 556 l13 -26 l13 26 h-7 l11 21 h-34 l11 -21 Z" />
      </g>

      <text x="558" y="90" class="atlas-title" font-size="31">CARTA ARTHURIANA</text>
      <text x="618" y="118" class="atlas-subtitle" font-size="19">Atlas manuscrit des royaumes, merveilles et quêtes</text>
      <text x="154" y="225" class="atlas-region">HIBERNIA</text>
      <text x="385" y="250" class="atlas-region">LOGRES</text>
      <text x="372" y="405" class="atlas-small-label">Cornouailles</text>
      <text x="440" y="365" class="atlas-small-label">Galles</text>
      <text x="334" y="510" class="atlas-region">ARMORIQUE</text>
      <text x="598" y="475" class="atlas-region">GAULE</text>
      <text x="812" y="544" class="atlas-region">ALPES</text>
      <text x="112" y="112" class="atlas-coast-note">MER DU NORD</text>
      <text x="112" y="642" class="atlas-coast-note">OCÉAN ATLANTIQUE</text>

      <g id="atlas-insets">
        <rect class="atlas-inset" x="884" y="548" width="150" height="132" rx="12" />
        <text x="912" y="575" class="atlas-inset-title">ROME</text>
        <path class="atlas-land alt" d="M936 626 C922 604 934 584 956 590 C982 598 990 625 971 647 C954 666 946 643 936 626 Z" />
        <path class="atlas-route" d="M920 662 C943 653 973 655 1004 666" />

        <rect class="atlas-inset" x="1044" y="548" width="124" height="132" rx="12" />
        <text x="1060" y="575" class="atlas-inset-title">SARRAS</text>
        <path class="atlas-land mystic" d="M1092 607 C1117 585 1149 607 1141 637 C1133 666 1084 665 1074 636 C1070 623 1077 616 1092 607 Z" />
        <path class="atlas-route" d="M1065 665 C1090 650 1122 651 1154 665" />
      </g>

      <g aria-hidden="true">
        <line class="atlas-scale" x1="520" y1="706" x2="660" y2="706" />
        <line class="atlas-scale-light" x1="560" y1="706" x2="610" y2="706" />
        <text x="514" y="692" class="atlas-small-label">250 km</text>
        <path d="M93 680 l0 -42 l18 22 l18 -22 l0 42" fill="none" stroke="#2a1708" stroke-width="4" />
        <text x="82" y="707" class="atlas-small-label">N</text>
      </g>

      <g id="atlas-markers"></g>
    </svg>
    <div id="atlas-tooltip" class="atlas-tooltip" role="tooltip"></div>
  `;

  const renderAtlasBase = () => {
    atlasStage.innerHTML = atlasTemplate();
  };

  const markerGroup = () => atlasStage.querySelector('#atlas-markers');

  const createSvgElement = (name, attributes = {}) => {
    const element = document.createElementNS(SVG_NS, name);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, String(value)));
    return element;
  };

  const renderAtlasMarkers = () => {
    const group = markerGroup();
    if (!group) return;
    group.innerHTML = '';
    markers.clear();

    locations.forEach((loc) => {
      const position = atlasPositions.get(loc.id);
      if (!position) return;

      const color = categories[loc.cat]?.color || '#8B1E1E';
      const marker = createSvgElement('g', {
        class: `atlas-marker${activeCats.has(loc.cat) ? '' : ' hidden'}`,
        tabindex: '0',
        role: 'button',
        'aria-label': loc.name,
        'data-id': loc.id,
        transform: `translate(${position.x.toFixed(2)} ${position.y.toFixed(2)})`
      });
      marker.style.setProperty('--marker-color', color);

      marker.appendChild(createSvgElement('circle', { class: 'marker-ring', r: 13 }));
      marker.appendChild(createSvgElement('circle', { class: 'marker-core', r: 8 }));

      const glyph = createSvgElement('text', { class: 'marker-glyph', y: '0' });
      glyph.textContent = categoryGlyph(loc.cat);
      marker.appendChild(glyph);

      const label = createSvgElement('text', { class: 'atlas-marker-label', x: '18', y: '-15' });
      label.textContent = loc.name;
      marker.appendChild(label);

      group.appendChild(marker);
      markers.set(loc.id, { element: marker, loc, position });
    });
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
      <button class="map-action" type="button" data-open-map="${loc.id}">Voir sur l’atlas →</button>
    `;
  };

  const renderMapInfo = (loc) => {
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

  const highlightSelected = (locId) => {
    $$('.legend-item').forEach((item) => {
      item.classList.toggle('active', Number(item.dataset.id) === locId);
    });

    markers.forEach(({ element }, id) => {
      element.classList.toggle('selected', id === locId);
      element.classList.toggle('dimmed', Boolean(locId) && id !== locId);
    });
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

  const openLegend = (locId, { navigate = true, scroll = true, clearSearch = false } = {}) => {
    const entry = markers.get(Number(locId));
    if (!entry) return;

    selectedLocationId = entry.loc.id;

    if (clearSearch && searchInput) {
      searchInput.value = '';
      searchTerm = '';
    }

    renderLegendDetail(entry.loc);
    renderLegend();
    highlightSelected(entry.loc.id);

    if (navigate) switchView('home');

    if (scroll) {
      window.setTimeout(() => {
        const card = legendContent.querySelector(`[data-id="${entry.loc.id}"]`);
        card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 60);
    }
  };

  const showMapInfo = (loc) => {
    selectedLocationId = loc.id;
    renderLegendDetail(loc);
    renderMapInfo(loc);
    highlightSelected(loc.id);
  };

  const focusAtlasLocation = (loc, { openPanel = true } = {}) => {
    const entry = markers.get(Number(loc.id));
    if (!entry) return;

    switchView('map');
    if (openPanel) showMapInfo(entry.loc);

    entry.element.classList.remove('selected');
    window.setTimeout(() => entry.element.classList.add('selected'), 40);
  };

  const refreshMarkers = () => {
    markers.forEach(({ element, loc }, id) => {
      const visible = activeCats.has(loc.cat);
      element.classList.toggle('hidden', !visible);
      element.classList.toggle('dimmed', visible && Boolean(selectedLocationId) && id !== selectedLocationId);
    });
  };

  const renderFilters = () => {
    filterGrid.innerHTML = Object.entries(categories).map(([key, cat]) => `
      <button class="filter-btn${activeCats.has(key) ? '' : ' off'}" type="button" data-cat="${escapeHTML(key)}">
        <span class="filter-dot" style="background:${cat.color || '#d5b35a'}"></span>${escapeHTML(cat.label || key)}
      </button>
    `).join('');
  };

  const showTooltip = (marker, loc) => {
    const tooltip = $('#atlas-tooltip');
    if (!tooltip) return;
    const stageRect = atlasStage.getBoundingClientRect();
    const markerRect = marker.getBoundingClientRect();
    tooltip.textContent = loc.name;
    tooltip.style.left = `${markerRect.left - stageRect.left + markerRect.width / 2}px`;
    tooltip.style.top = `${markerRect.top - stageRect.top}px`;
    tooltip.style.display = 'block';
  };

  const hideTooltip = () => {
    const tooltip = $('#atlas-tooltip');
    if (tooltip) tooltip.style.display = 'none';
  };

  navButtons.forEach((button) => {
    button.addEventListener('click', () => switchView(button.dataset.view));
  });

  brand?.addEventListener('click', (event) => {
    event.preventDefault();
    switchView('home');
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

  searchInput?.addEventListener('input', (event) => {
    searchTerm = event.target.value.trim().toLowerCase();
    renderLegend();
  });

  legendContent.addEventListener('click', (event) => {
    const item = event.target.closest('[data-id]');
    if (!item) return;
    openLegend(Number(item.dataset.id), { navigate: false, scroll: false });
  });

  atlasStage.addEventListener('click', (event) => {
    const marker = event.target.closest('.atlas-marker');
    if (!marker) return;
    const entry = markers.get(Number(marker.dataset.id));
    if (entry) showMapInfo(entry.loc);
  });

  atlasStage.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const marker = event.target.closest('.atlas-marker');
    if (!marker) return;
    event.preventDefault();
    const entry = markers.get(Number(marker.dataset.id));
    if (entry) showMapInfo(entry.loc);
  });

  atlasStage.addEventListener('mouseover', (event) => {
    const marker = event.target.closest('.atlas-marker');
    if (!marker) return;
    const entry = markers.get(Number(marker.dataset.id));
    if (entry) showTooltip(marker, entry.loc);
  });

  atlasStage.addEventListener('mouseout', (event) => {
    if (event.target.closest('.atlas-marker')) hideTooltip();
  });

  document.addEventListener('click', (event) => {
    const eventLink = event.target.closest('[data-open-legend]');
    if (eventLink) {
      event.preventDefault();
      openLegend(Number(eventLink.dataset.openLegend), { navigate: true, scroll: true, clearSearch: true });
      return;
    }

    const mapLink = event.target.closest('[data-open-map]');
    if (mapLink) {
      event.preventDefault();
      const entry = markers.get(Number(mapLink.dataset.openMap));
      if (entry) focusAtlasLocation(entry.loc, { openPanel: true });
    }
  });

  renderAtlasBase();
  computeAtlasPositions();
  renderAtlasMarkers();
  renderFilters();
  renderLegend();
  refreshMarkers();

  if (locations[0]) openLegend(locations[0].id, { navigate: false, scroll: false });
})();
