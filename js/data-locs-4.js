// Données lieux — partie 4
LOCS.push(...[
  { id:37, name:"Corbenic / Château du Graal", lat:51.800, lng:-2.600, cat:"grail",
    region:"Bretagne insulaire (localisation symbolique)",
    desc:"Corbenic, château du Roi Pêcheur (Roi Méhaigné / Amfortas), gardien du Saint Graal. La question non posée par Perceval — 'Qui sert-on du Graal ?' / 'Quel est ton mal ?' — aurait guéri le roi blessé. Galahad y accomplit la Quête. Elaine de Corbenic y séduit Lancelot (nuit magique) — d'où naît Galahad.",
    chars:["Perceval / Parzival","Galahad","Bohort","Roi Pêcheur (Amfortas / Anfortas)","Elaine de Corbenic (mère de Galahad)","Lancelot","Joseph d'Arimathie"],
    events:["Perceval rate la question (1ère visite)","Nuit de Lancelot et Elaine (conception de Galahad)","Accomplissement de la Quête par Galahad","Guérison du Roi Pêcheur","Vision des mystères du Graal","Disparition du Graal de Bretagne"],
    sources:["Chrétien de Troyes, Perceval ou le Conte du Graal (c.1182, inachevé)","Wolfram von Eschenbach, Parzival (c.1200–1210)","Cycle Vulgate, La Queste del Saint Graal (c.1215–1220)","Robert de Boron, Joseph d'Arimathie (c.1200)","Perlesvaus / Le Haut Livre du Graal (c.1200–1210)","Malory, Le Morte d'Arthur (Livre XIII–XVII)"] },

  { id:38, name:"Galles — Enfance de Perceval", lat:52.130, lng:-3.783, cat:"grail",
    region:"Galles centrale",
    desc:"Perceval est élevé isolément en forêt galloise par sa mère veuve, à l'abri du monde guerrier qui lui a pris son père et ses frères. Sa naïveté légendaire ('Pur Fol' — le Parfait Idiot) est le ressort de son conte. La vue de chevaliers déclenche son départ vers la cour d'Arthur.",
    chars:["Perceval","La Mère veuve de Perceval","Blanchefleur (aimée de Perceval)"],
    events:["Enfance sauvage de Perceval","Première vue des chevaliers","Départ pour la cour d'Arthur"],
    sources:["Chrétien de Troyes, Perceval (c.1182)","Wolfram von Eschenbach, Parzival (c.1200)","Perlesvaus","Didot-Perceval"] },

  { id:39, name:"Sarras — Cité mystique", lat:38.110, lng:13.350, cat:"grail",
    region:"Orient mystique — positionné symboliquement en Méditerranée (réf. Jérusalem)",
    desc:"Sarras : cité céleste et mystique, situé dans les textes 'aux portes de l'Orient'. Galahad, Perceval et Bohort y conduisent le Saint Graal à son ultime destination. Galahad y est couronné roi et meurt en extase divine. Perceval y meurt ermite. Bohort seul revient témoigner en Bretagne. Placé symboliquement en Méditerranée sur cette carte — sa localisation réelle est mystique, assimilée à Jérusalem ou à une cité céleste hors du monde.",
    chars:["Galahad","Perceval","Bohort","Joseph d'Arimathie (fils, Josephé)","Ange porteur du Graal"],
    events:["Voyage maritime du Graal vers l'Orient","Couronnement de Galahad roi de Sarras","Mort mystique de Galahad (extase divine)","Mort de Perceval (ermite)","Retour solitaire de Bohort en Bretagne"],
    sources:["Cycle Vulgate, La Queste del Saint Graal (c.1215–1220)","Malory, Le Morte d'Arthur (Livre XVII)"] },

  { id:40, name:"Dinas Bran — Château du Graal gallois", lat:52.978, lng:-3.153, cat:"grail",
    region:"Denbighshire, Galles du Nord",
    desc:"Ruines spectaculaires de Dinas Bran, colline surplombant Llangollen. Proposé comme site du Graal (Corbenic) par Norma Lorre Goodrich. Dans le Mabinogion, le Roi Bran (Bendigeidfran) possède un chaudron magique de résurrection — ancêtre mythique du Graal.",
    chars:["Bran le Béni / Bendigeidfran (Roi mythique)","Perceval (association)"],
    events:["Légende du Chaudron de Bran (résurrection)","Connexion mythique galloise au Graal","Site candidat pour Corbenic"],
    sources:["Mabinogion, Branwen ferch Llŷr","Perlesvaus (connexion à Bran)","Norma Lorre Goodrich, King Arthur (1986)"] },

  // ── MORDRED ────────────────────────────────────────────────
  { id:41, name:"Dover — Retour d'Arthur", lat:51.127, lng:1.313, cat:"mordred",
    region:"Kent, Angleterre",
    desc:"Mordred attend Arthur à Dover lors de son retour de France (guerre contre Lancelot). Première bataille de la guerre civile finale. Gauvain est mortellement blessé lors du débarquement et meurt ici, dictant à Arthur une lettre de réconciliation avec Lancelot — non reçue à temps.",
    chars:["Arthur","Mordred (chef rebelle)","Gauvain (mortellement blessé ici)","Lancelot (absent, en France)"],
    events:["Bataille de Dover — premier affrontement de la guerre civile","Mort de Gauvain (blessure rouverte)","Lettre de Gauvain à Lancelot pour la paix","Mordred contraint de battre en retraite"],
    sources:["Malory, Le Morte d'Arthur (Livre XXI)","Cycle Vulgate, La Mort le Roi Artu"] },

  // ── MORGAN LE FAY ──────────────────────────────────────────
  { id:42, name:"Val sans Retour (Brocéliande)", lat:47.990, lng:-2.100, cat:"morgan",
    region:"Forêt de Paimpont, Bretagne",
    desc:"Vallée enchantée créée par Morgan le Fay dans Brocéliande pour emprisonner les chevaliers infidèles en amour. Seul Lancelot — dont l'amour absolu pour Guinevere est sans faille — peut en briser l'enchantement. Site touristique actuel en forêt de Paimpont.",
    chars:["Morgan le Fay","Lancelot (libérateur)","Chevaliers infidèles (prisonniers indéfinis)"],
    events:["Création du Val sans Retour par Morgan","Emprisonnement de chevaliers infidèles","Libération par Lancelot (amour absolu)","Colère de Morgan contre Lancelot"],
    sources:["Cycle Vulgate, Lancelot en prose","Prose Lancelot"] },

  { id:43, name:"Glastonbury Tor — Avalon de Morgan", lat:51.144, lng:-2.699, cat:"morgan",
    region:"Somerset, Angleterre",
    desc:"Le Tor de Glastonbury : pyramide mystique qui émergeait des marécages au Moyen Âge, formant une île. Dans la Vita Merlini de Geoffrey, Morgan le Fay règne ici sur neuf sœurs et soigne Arthur blessé. Lieu de pouvoir celtique préhistorique, associé à la Déesse.",
    chars:["Morgan le Fay","Ses neuf sœurs","Arthur (soigné ici)","Barinthus (pilote du bateau)","Dame du Lac"],
    events:["Règne de Morgan sur l'île d'Avalon","Soins prodigués à Arthur mourant","Attente du retour d'Arthur — Rex Quondam, Rexque Futurus"],
    sources:["Geoffrey de Monmouth, Vita Merlini (c.1150)","Giraldus Cambrensis","Tradition populaire arthurienne"] },

  { id:44, name:"Morgause — Lothian / Orkney", lat:55.940, lng:-3.200, cat:"morgan",
    region:"Lothian / Orkney, Écosse",
    desc:"Morgause (Morgause d'Orkney), demi-sœur d'Arthur et épouse du Roi Lot, est l'autre figure maternelle et tragique de la geste arthurienne. Sa nuit avec Arthur (par ignorance du lien de parenté) engendre Mordred. Elle sera tuée par son fils Gaheris qui la surprend au lit avec Lamorak.",
    chars:["Morgause","Roi Lot (époux)","Arthur (inceste involontaire)","Mordred (fils)","Gaheris (fils meurtrier)","Lamorak (amant, tué par Gaheris)"],
    events:["Nuit de Morgause et Arthur (conception de Mordred)","Règne de Lothian et Orkney","Liaison avec Lamorak","Mort de Morgause tuée par Gaheris"],
    sources:["Cycle Vulgate, La Mort le Roi Artu","Malory, Le Morte d'Arthur","Post-Vulgate, Suite du Merlin"] }
]);

const INSET_IDS = new Set([15, 39]); // Rome & Sarras → encarts SVG
