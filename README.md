# Map-Graal-Quest / Carta Arthuriana

Carte interactive des lieux majeurs des légendes arthuriennes médiévales.

## Structure

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── base-data.js
│   ├── data.js
│   ├── merge-data.js
│   └── app.js
└── assets/
    └── svg/
        ├── compass-rose.svg
        ├── frame-corner.svg
        ├── inset-rome.svg
        └── inset-sarras.svg
```

## Données

- `js/base-data.js` contient les lieux historiques du zip `carta-arthuriana` — ids 1 à 44.
- `js/data.js` reste le fichier déjà présent sur `main` — notamment les ajouts récents ids 45 à 76.
- `js/merge-data.js` fusionne les deux jeux de données au chargement, par `id`, pour éviter les doublons et préserver les catégories déjà validées dans `main`.

## Lancer localement

Le projet est statique. Il peut être ouvert directement dans le navigateur, ou servi avec un petit serveur local :

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Déploiement GitHub Pages

Activer **Settings → Pages → Deploy from branch** et choisir la branche / racine voulue.
