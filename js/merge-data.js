// ============================================================
// MERGE DATA — combine le jeu de données historique du zip
// avec les ajouts déjà présents sur main.
// ============================================================

(() => {
  'use strict';

  if (typeof BASE_CATS === 'undefined' || typeof BASE_LOCS === 'undefined') {
    console.warn('Carta Arthuriana: BASE_CATS / BASE_LOCS introuvables.');
    return;
  }

  if (typeof CATS === 'undefined' || typeof LOCS === 'undefined') {
    console.warn('Carta Arthuriana: CATS / LOCS introuvables.');
    return;
  }

  // Conserve les catégories déjà présentes dans main quand les clés existent,
  // et ajoute uniquement les catégories absentes depuis le zip.
  Object.entries(BASE_CATS).forEach(([key, value]) => {
    if (!Object.prototype.hasOwnProperty.call(CATS, key)) {
      CATS[key] = value;
    }
  });

  // Fusion par id pour éviter les doublons si main contient déjà certains lieux.
  const existingIds = new Set(LOCS.map((loc) => loc.id));
  BASE_LOCS.forEach((loc) => {
    if (!existingIds.has(loc.id)) {
      LOCS.push(loc);
      existingIds.add(loc.id);
    }
  });

  LOCS.sort((a, b) => a.id - b.id);
})();
