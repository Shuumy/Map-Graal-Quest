# Map-Graal-Quest / Carta Arthuriana

Carte interactive des lieux majeurs des légendes arthuriennes médiévales.

## Structure

```text
.
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── base-data-00.js
    ├── base-data-01.js
    ├── base-data-rest.js
    ├── data.js
    ├── merge-data.js
    └── app.js
```

## Données

- `js/base-data-00.js` définit les catégories issues du zip et initialise `BASE_LOCS`.
- `js/base-data-01.js` contient les lieux du zip ids 1 à 11 en version détaillée.
- `js/base-data-rest.js` contient les lieux du zip ids 12 à 44 en version compacte pour limiter le poids du dépôt.
- `js/data.js` reste le fichier déjà présent sur `main`, notamment les ajouts récents ids 45 à 76.
- `js/merge-data.js` fusionne les deux jeux de données au chargement, par `id`, pour éviter les doublons et préserver les catégories déjà validées dans `main`.

## Notes d'intégration

Le zip contenait aussi un `js/data.js`. Il n'a pas été écrasé, car `main` possède déjà un fichier `js/data.js` plus récent avec les POI ids 45 à 76. L'intégration ajoute donc les lieux du zip dans des fichiers `base-data-*`, puis laisse `merge-data.js` combiner les données au runtime.

## Lancer localement

Le projet est statique. Il peut être servi avec un petit serveur local :

```bash
python3 -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Déploiement GitHub Pages

Activer **Settings → Pages → Deploy from branch** et choisir la branche / racine voulue.
