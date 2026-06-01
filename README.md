# Carta Arthuriana

Carte interactive des lieux majeurs des légendes arthuriennes médiévales, intégrée au dépôt `Map-Graal-Quest`.

## Structure

```text
Map-Graal-Quest/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── data.js
│   ├── data-locs-1.js
│   ├── data-locs-2.js
│   ├── data-locs-3.js
│   ├── data-locs-4.js
│   └── app.js
└── assets/
    └── svg/
        ├── compass-rose.svg
        ├── frame-corner.svg
        ├── inset-rome.svg
        └── inset-sarras.svg
```

## Lancer localement

Le projet est statique. Il peut être ouvert directement dans le navigateur, ou servi avec un petit serveur local :

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Déploiement GitHub Pages

Déposer ces fichiers à la racine du dépôt, puis activer **Settings → Pages → Deploy from branch** avec la branche souhaitée.

## Notes techniques

- `data.js` contient les catégories.
- `data-locs-*.js` contient les lieux, découpés pour garder des fichiers faciles à relire.
- `app.js` contient la logique Leaflet, les marqueurs, les filtres et la sidebar.
- `styles.css` contient tout le thème visuel.
- Les SVG décoratifs ont été sortis du HTML pour garder `index.html` lisible.
