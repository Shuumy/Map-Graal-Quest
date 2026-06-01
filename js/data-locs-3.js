// Données lieux — partie 3
LOCS.push(...[
  { id:25, name:"Benwick / Pays de Lancelot", lat:47.081, lng:2.398, cat:"lancelot",
    region:"Berry, France (hypothétique)",
    desc:"Benwick (Bénoïc), royaume du Roi Ban, père de Lancelot. Identifié avec le Berry (Bourges), la Bretagne armoricaine, ou la Bénouic bretonne. Claudas de la Terre Déserte envahit et brûle le château, causant la mort du Roi Ban. La Dame du Lac emporte l'enfant Lancelot dans son lac enchanté.",
    chars:["Lancelot","Roi Ban (père)","Reine Hélène (mère)","Viviane / Dame du Lac","Claudas de la Terre Déserte (ennemi)"],
    events:["Naissance de Lancelot","Invasion de Claudas","Mort du Roi Ban (chagrin et blessure)","Enlèvement de Lancelot par la Dame du Lac","Éducation de Lancelot au fond du lac enchanté"],
    sources:["Cycle Vulgate, Lancelot-Graal (Tome Lancelot, début)","Malory, Le Morte d'Arthur (Livre VI)"] },

  { id:26, name:"Gaunes / Pays de Bohort", lat:47.200, lng:1.000, cat:"lancelot",
    region:"Gaule / France centrale",
    desc:"Gaunes, royaume du Roi Bohort l'Ancien, frère du Roi Ban. Patrie des cousins de Lancelot : Bohort de Gaunes et Lionel. Claudas envahit Gaunes après Benwick. Bohort et Lionel sont élevés par la Dame du Lac aux côtés de Lancelot.",
    chars:["Bohort de Gaunes","Lionel","Roi Bohort l'Ancien","Claudas (envahisseur)"],
    events:["Cour du Roi Bohort l'Ancien","Invasion de Claudas","Enlèvement de Bohort et Lionel par la Dame du Lac","Origines des cousins de Lancelot"],
    sources:["Cycle Vulgate, Lancelot-Graal","Malory, Le Morte d'Arthur"] },

  // ── GUINEVERE ──────────────────────────────────────────────
  { id:27, name:"Amesbury — Couvent de Guinevere", lat:51.176, lng:-1.778, cat:"guinevere",
    region:"Wiltshire, Angleterre",
    desc:"Guinevere se retire au couvent d'Amesbury après la trahison de Mordred, la destruction de la Table Ronde et la mort d'Arthur. Elle prend le voile et finit ses jours comme abbesse. Lancelot la retrouve ici pour un adieu déchirant — elle refuse de l'embrasser. Elle meurt à Amesbury et est inhumée à Glastonbury auprès d'Arthur.",
    chars:["Guinevere","Lancelot (visite d'adieu)","Bedivere (moine, témoignage)"],
    events:["Fuite de Guinevere à Amesbury","Prise du voile","Dernière rencontre avec Lancelot","Refus du baiser d'adieu","Mort de Guinevere","Translation à Glastonbury"],
    sources:["Malory, Le Morte d'Arthur (Livre XXI)","Cycle Vulgate, La Mort le Roi Artu"] },

  // ── TRISTAN & ISEULT ──────────────────────────────────────
  { id:28, name:"Tintagel — Cour du Roi Marc", lat:50.672, lng:-4.744, cat:"tristan",
    region:"Cornouailles, Angleterre",
    desc:"Château du Roi Marc de Cornouailles. Tristan amène Iseult pour qu'elle épouse son oncle Marc. Les amants y vivent leurs amours clandestines. Marc les surprend endormis (épée entre eux dans la forêt de Morois). Tristan est finalement banni de Cornouailles.",
    chars:["Roi Marc","Tristan","Iseult la Blonde","Brangien (suivante, boit le philtre à la place)","Dinas de Lidan (ami fidèle de Tristan)","Andret (traître)","Gouvernal (tuteur de Tristan)"],
    events:["Arrivée d'Iseult en Cornouailles","Mariage de Marc et Iseult","Révélation de l'amour (philtre bu sur le bateau)","Amours secrètes à la cour","Dénonciation par les félons","Exil de Tristan"],
    sources:["Béroul, Tristan (c.1150–1200)","Thomas de Bretagne, Tristan (c.1155–1185)","Gottfried von Strassburg, Tristan (c.1210)","Malory, Le Morte d'Arthur (Tristan intégré, Livres VIII–X)","Prose Tristan (XIIIe s.)"] },

  { id:29, name:"Castle Dore — Lancien", lat:50.343, lng:-4.648, cat:"tristan",
    region:"Cornouailles (Fowey), Angleterre",
    desc:"Forteresse de l'âge du fer près de Fowey. La Pierre de Tristan (Drustanus / Drustagni) découverte à proximité porte l'inscription : 'Drustans hic iacit Cunomori filius' (Tristan, fils de Cunomorus). Cunomorus serait le Roi Marc historique. Candidate majeure pour la cour de Marc.",
    chars:["Tristan (Drust / Drustanus historique)","Roi Marc / Cunomorus","Iseult"],
    events:["Site archéologique tristanien majeur","Pierre inscrite (Ve–VIe s.)","Cour historique du Roi Marc (candidat)"],
    sources:["Pierre de Tristan (inscription latine, Ve–VIe s.)","John Leland, Itinerary (XVIe s.)","C.A. Ralegh Radford (fouilles, 1955)","O.J. Padel, Tristan in Medieval Welsh (1981)"] },

  { id:30, name:"Forêt de Morois", lat:50.450, lng:-4.500, cat:"tristan",
    region:"Cornouailles / Dartmoor (hypothétique)",
    desc:"Forêt sauvage où Tristan et Iseult se réfugient après leur bannissement. Ils y vivent trois ans, libres, chassant et s'aimant. Marc les découvre endormis, l'épée nue entre eux (symbole de chasteté respectée). L'ermite Ogrin les convainc de se réconcilier avec Marc.",
    chars:["Tristan","Iseult la Blonde","Roi Marc","Ogrin l'Ermite","Le Nain Frocin (traître)","Gouvernal"],
    events:["Exil de Tristan et Iseult dans la forêt","Vie sauvage (3 ans)","Découverte par Marc — l'épée entre eux","Rencontre avec Ogrin l'Ermite","Réconciliation et retour à la cour de Marc"],
    sources:["Béroul, Tristan (c.1150–1200)","Gottfried von Strassburg, Tristan (c.1210)"] },

  { id:31, name:"Irlande — Pays d'Iseult", lat:53.349, lng:-6.260, cat:"tristan",
    region:"Irlande",
    desc:"Patrie d'Iseult la Blonde, fille du Roi Gormond et de la Reine d'Irlande. Tristan y est soigné de la blessure empoisonnée du Morholt (qu'il a lui-même tué). Reconnu, il plaide pour Marc et emporte Iseult. La Reine prépare le philtre destiné aux époux — bu par erreur sur le bateau.",
    chars:["Iseult la Blonde","Roi d'Irlande (Gormond)","Reine d'Irlande (préparatrice du philtre)","Morholt (champion irlandais, oncle d'Iseult, tué par Tristan)","Brangien (suivante)"],
    events:["Guérison de Tristan par Iseult (blessure empoisonnée)","Combat victorieux de Tristan contre le Morholt","Révélation de l'identité de Tristan","Demande en mariage d'Iseult pour le Roi Marc","Préparation du philtre d'amour"],
    sources:["Béroul, Tristan","Thomas de Bretagne, Tristan","Gottfried von Strassburg, Tristan","Prose Tristan (XIIIe s.)"] },

  { id:32, name:"Bretagne — Mort de Tristan", lat:47.903, lng:-1.677, cat:"tristan",
    region:"Bretagne, France",
    desc:"Tristan, exilé, épouse Iseult aux Blanches Mains, fille du Roi Hoël, par ressemblance du nom. Mortellement blessé par une lance empoisonnée, il fait appeler Iseult la Blonde (voile blanche si elle vient, noire si non). Jalouse, Iseult aux Blanches Mains dit 'voile noire'. Tristan meurt. Iseult la Blonde arrive trop tard, se couche sur lui et meurt à son tour.",
    chars:["Tristan","Iseult aux Blanches Mains","Roi Hoël (Bretagne)","Kaherdin / Cariado (frère)","Iseult la Blonde (arrive trop tard)","Gouvernal"],
    events:["Mariage de Tristan avec Iseult aux Blanches Mains","Blessure mortelle de Tristan","La convention de la voile blanche ou noire","Mensonge d'Iseult aux Blanches Mains (voile noire)","Mort de Tristan","Mort d'Iseult la Blonde (de douleur)","Enterrement côte à côte — les deux plantes s'enlacent"],
    sources:["Thomas de Bretagne, Tristan (c.1155–1185)","Gottfried von Strassburg, Tristan (c.1210)","Saga norroise Tristrams saga ok Ísondar (XIIIe s.)"] },

  { id:33, name:"Lyonesse (Îles Scilly)", lat:49.920, lng:-6.300, cat:"tristan",
    region:"Mer de Cornouailles (terre mythique)",
    desc:"Lyonesse : terre légendaire engloutie entre les Cornouailles et les Îles Scilly. Patrie de Tristan et de son père Méliodas selon certaines versions. La tradition cornouaillaise médiévale (Lethowsow) évoque une vraie submersion. Tristan serait le dernier survivant de cette terre perdue.",
    chars:["Tristan","Méliodas (père de Tristan)","Roi de Lyonesse"],
    events:["Origine légendaire de Tristan","Submersion de Lyonesse","Mythe de la terre engloutie"],
    sources:["Romances tristaniennes médiévales","Tradition cornouaillaise (Lethowsow / Lyonesse)","Malory, Le Morte d'Arthur"] },

  // ── GAUVAIN / GAWAIN ──────────────────────────────────────
  { id:34, name:"Orkney (Orcanie)", lat:58.987, lng:-2.960, cat:"gawain",
    region:"Îles Orcades, Écosse",
    desc:"Royaume du Roi Lot (Loth) et de la Reine Morgause (demi-sœur d'Arthur). Patrie de : Gauvain / Gawain, Agravain, Gaheris, Gareth et Mordred (fils incestueux d'Arthur avec Morgause). C'est d'ici que sont issus les membres les plus tragiques de la Table Ronde.",
    chars:["Roi Lot / Loth","Morgause (demi-sœur d'Arthur)","Gawain / Gauvain","Agravain","Gaheris","Gareth (Beau-Mains)","Mordred"],
    events:["Naissance des fils de Lot","Cour du Roi Lot","Naissance de Mordred (fils incestueux d'Arthur et Morgause)","Tentative de noyade des enfants ordonnée par Arthur"],
    sources:["Geoffrey de Monmouth, Historia Regum Britanniae","Cycle Vulgate, La Mort le Roi Artu","Malory, Le Morte d'Arthur","Triades galloises"] },

  { id:35, name:"Lothian — Château des Pucelles", lat:55.953, lng:-3.188, cat:"gawain",
    region:"Lothian, Écosse (Édimbourg)",
    desc:"Lothian (Lothien), royaume du Roi Lot situé autour d'Édimbourg. Le 'Château des Pucelles' (Castel of Maidens) — probablement la citadelle d'Édimbourg — est un lieu de quête récurrent dans les romances arthuriennes. Gauvain y accomplit des aventures.",
    chars:["Gauvain / Gawain","Lancelot","Roi Lot","Morgause"],
    events:["Quêtes au Château des Pucelles","Campagnes d'Arthur en Écosse","Royaume de Lothian"],
    sources:["Cycle Vulgate, Lancelot-Graal","Malory, Le Morte d'Arthur","Geoffrey de Monmouth"] },

  { id:36, name:"Chapelle Verte (Lud's Church)", lat:53.187, lng:-2.002, cat:"gawain",
    region:"Staffordshire / Peak District, Angleterre",
    desc:"La Chapelle Verte où Gauvain doit se présenter à Nouvel An pour recevoir le coup de hache du Chevalier Vert. Identifiée avec Lud's Church, une gorge profonde verdoyante dans les collines du Staffordshire. Le château de Bertilak (Hautdesert) se trouve à proximité.",
    chars:["Gauvain / Gawain","Chevalier Vert (Bertilak de Hautdesert)","Dame Bertilak","Morgan le Fay (orchestre le tout en coulisses)"],
    events:["Jeu de la décapitation à la cour d'Arthur","Voyage de Gauvain vers la Chapelle Verte","Épreuve de chasteté chez Bertilak (ceinture verte)","Coup de hache — cicatrice symbolique","Révélation : Bertilak = Chevalier Vert","Révélation du rôle de Morgan le Fay"],
    sources:["Sir Gawain and the Green Knight (c.1375–1400, auteur du Cotton Nero manuscrit)"] },

  // ── QUÊTE DU GRAAL ─────────────────────────────────────────
]);
