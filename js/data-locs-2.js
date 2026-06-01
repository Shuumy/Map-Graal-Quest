// Données lieux — partie 2
LOCS.push(...[
  { id:13, name:"Cardigan / Aberteifi", lat:52.084, lng:-4.656, cat:"arthur",
    region:"Ceredigion, Galles",
    desc:"Cour d'Arthur selon Chrétien de Troyes au début d'Érec et Énide. C'est ici que se tient la chasse au cerf blanc, déclenchant l'aventure d'Érec. Chrétien situe également ici des assemblées dans Perceval.",
    chars:["Arthur","Guinevere","Erec","Enide","Kay (sénéchal)","Yder (adversaire d'Erec)"],
    events:["Chasse au cerf blanc","Début de la quête d'Erec","Affront fait à la suivante de Guinevere","Plénières de cour"],
    sources:["Chrétien de Troyes, Erec et Enide (c.1170)","Chrétien de Troyes, Perceval (c.1182)","Perlesvaus / Haut Livre du Graal (début XIIIe s.)"] },

  { id:14, name:"Kelliwic (Cornouailles galloises)", lat:50.510, lng:-4.370, cat:"arthur",
    region:"Cornouailles, Angleterre",
    desc:"L'une des trois cours principales d'Arthur selon les Triades galloises ('Trois Cités impériales d'Arthur'). Identifiée avec Callington, Kelly Rounds (Egloshayle) ou Killibury. Cai (Kay) en est le sénéchal et Bedwyr (Bedivere) le portier dans Culhwch et Olwen.",
    chars:["Arthur","Cai / Kay","Bedwyr / Bedivere","Gwenhwyfar / Guinevere","Culhwch (neveu d'Arthur)"],
    events:["Siège principal de la cour galloise d'Arthur","Rassemblement des guerriers (Culhwch et Olwen)","La liste des guerriers d'Arthur récités"],
    sources:["Culhwch ac Olwen, Mabinogion gallois (c. XIe s.)","Triades galloises (Trioedd Ynys Prydein)","Pa gur yv y porthaur? (poème gallois)"] },

  { id:15, name:"Rome", lat:41.902, lng:12.496, cat:"arthur",
    region:"Italie",
    desc:"Arthur mène une grande expédition contre l'Empire Romain (Lucius Tiberius / Lucius Hiberius). Il défait l'armée romaine en Gaule (bataille de Saussy). Dans le Cycle Vulgate, il est même couronné Empereur de Rome. La campagne est interrompue par la trahison de Mordred.",
    chars:["Arthur","Lucius Tiberius / Hiberius (Procurateur de Rome)","Gawain (ambassadeur)","Lancelot","Lot de Lothian","Kay"],
    events:["Ultimatum romain à Arthur","Ambassade de Gawain à Rome","Bataille de Saussy / Soissons (Gaule)","Mort de Lucius Tiberius","Marche vers Rome — interrompue par la traîtrise de Mordred"],
    sources:["Geoffrey de Monmouth, Historia Regum Britanniae (Livre IX–X)","Wace, Roman de Brut","Layamon, Brut","Alliterative Morte Arthure (XIVe s.)","Malory, Le Morte d'Arthur (Livre V)"] },

  // ── MERLIN ─────────────────────────────────────────────────
  { id:16, name:"Stonehenge", lat:51.178, lng:-1.826, cat:"merlin",
    region:"Wiltshire, Angleterre",
    desc:"Geoffrey de Monmouth : Merlin transporte les pierres géantes du mont Killaraus en Irlande pour créer la 'Ronde des Géants' (Stonehenge), dotée de vertus médicinales. Le monument sert ensuite de mausolée pour Aurelius Ambrosius, puis pour Uther Pendragon.",
    chars:["Merlin","Aurelius Ambrosius","Uther Pendragon","Ygerne"],
    events:["Transposition magique des pierres depuis l'Irlande","Construction de Stonehenge","Sépulture d'Aurelius Ambrosius","Sépulture d'Uther Pendragon"],
    sources:["Geoffrey de Monmouth, Historia Regum Britanniae (Livre VIII)"] },

  { id:17, name:"Dinas Emrys", lat:53.019, lng:-4.059, cat:"merlin",
    region:"Snowdonia, Gwynedd, Galles du Nord",
    desc:"Forteresse où Vortigern tente de bâtir une tour qui s'effondre chaque nuit. Les augures prescrivent le sang d'un enfant sans père. Le jeune Merlin (Ambrosius Emrys) révèle la vraie cause : deux dragons souterrains (blanc et rouge) se battent — allégorie du conflit Bretons / Saxons. Première grande prophétie de Merlin.",
    chars:["Merlin / Ambrosius Emrys","Vortigern","Dragon rouge (Bretons / Arthur)","Dragon blanc (Saxons / Angles)"],
    events:["Tentative de construction de la tour de Vortigern","Révélation des deux dragons","Prophétie du dragon rouge sur le dragon blanc","Chute programmée du règne de Vortigern"],
    sources:["Historia Brittonum, Nennius (c.830)","Geoffrey de Monmouth, Historia Regum Britanniae (Livre VI)","Les Prophéties de Merlin (Geoffrey)","Vita Merlini (c.1150)"] },

  { id:18, name:"Carmarthen / Caerfyrddin", lat:51.859, lng:-4.311, cat:"merlin",
    region:"Carmarthenshire, Galles",
    desc:"Lieu de naissance supposé de Merlin. 'Caerfyrddin' est étymologiquement lié à Myrddin (Merlin). La tradition galloise en fait un barde visionnaire qui sombre dans la folie après la bataille d'Arfderydd (c.573). Merlin / Myrddin est fils d'un esprit incube et d'une vierge.",
    chars:["Merlin / Myrddin Wyllt","Mère de Merlin (vierge noble)"],
    events:["Naissance de Merlin","Enfance à Carmarthen","Origines du devin-prophète","Lien à la tradition galloise de Myrddin Wyllt"],
    sources:["Tradition galloise, Myrddin Wyllt (poèmes gallois, XIIe s.)","Geoffrey de Monmouth, Historia Regum Britanniae","Vita Merlini (Geoffrey, c.1150)","Robert de Boron, Merlin (c.1200)"] },

  { id:19, name:"Forêt de Brocéliande / Paimpont", lat:48.020, lng:-2.180, cat:"merlin",
    region:"Ille-et-Vilaine, Bretagne, France",
    desc:"Forêt enchantée par excellence des légendes arthuriennes françaises. Viviane y emprisonne Merlin dans une tour d'air ou dans un rocher. Le Val sans Retour de Morgan le Fay y piège les chevaliers infidèles. La fontaine de Barenton y déclenche les tempêtes. Yvain y combat le Chevalier de la Fontaine.",
    chars:["Merlin","Viviane / Nimue (Dame du Lac)","Yvain / Owain","Morgan le Fay","Laudine (dame de la fontaine)","Lancelot (éduqué au lac de Viviane)"],
    events:["Emprisonnement de Merlin par Viviane","Val sans Retour de Morgan le Fay","Combat d'Yvain à la Fontaine de Barenton","Rencontre de Lancelot et Viviane","Éducation de Lancelot par la Dame du Lac"],
    sources:["Wace, Roman de Brut (1155)","Chrétien de Troyes, Yvain ou le Chevalier au Lion (c.1177–1181)","Cycle Vulgate, Lancelot-Graal","Robert de Boron, Merlin","Prose Merlin"] },

  { id:20, name:"Fontaine de Barenton", lat:48.061, lng:-2.155, cat:"merlin",
    region:"Forêt de Paimpont, Bretagne",
    desc:"Fontaine magique dans Brocéliande : verser l'eau sur le perron déclenche une tempête et l'apparition d'un chevalier noir. Yvain tue Esclados le Roux (chevalier gardien) et épouse sa veuve Laudine. Wace (1155) écrit y être allé chercher des merveilles sans en trouver.",
    chars:["Yvain / Owain","Laudine (Dame de la Fontaine)","Lunete (suivante et messagère)","Calogrenant (cousin d'Yvain, première aventure)","Esclados le Roux (gardien tué)"],
    events:["Aventure de Calogrenant à la fontaine","Combat d'Yvain contre Esclados le Roux","Mariage d'Yvain avec Laudine","Abandon de Laudine par Yvain","Folie d'Yvain dans la forêt"],
    sources:["Wace, Roman de Brut (1155)","Chrétien de Troyes, Yvain ou le Chevalier au Lion (c.1177–1181)","Owain a Luned (Mabinogion gallois — version gallloise)"] },

  { id:21, name:"Tombeau de Merlin (Brocéliande)", lat:48.050, lng:-2.140, cat:"merlin",
    region:"Forêt de Paimpont, Bretagne",
    desc:"Viviane, à qui Merlin a enseigné tous ses secrets par amour, l'emprisonne dans un rocher invisible ou une tour d'air. Il attend endormi — non mort — le retour du roi Arthur. Lieu de pèlerinage actuel en forêt de Paimpont.",
    chars:["Merlin","Viviane / Nimue"],
    events:["Enseignement des secrets de Merlin à Viviane","Emprisonnement / ensommeillement de Merlin","Disparition définitive de Merlin de la scène arthurienne"],
    sources:["Cycle Vulgate, L'Estoire de Merlin","Post-Vulgate, Suite du Merlin","Malory, Le Morte d'Arthur (Livre IV)"] },

  // ── LANCELOT ───────────────────────────────────────────────
  { id:22, name:"Bamburgh Castle (Joyeuse Garde)", lat:55.608, lng:-1.709, cat:"lancelot",
    region:"Northumberland, Angleterre",
    desc:"Principale candidate pour Joyeuse Garde (Joyous Gard), château de Lancelot. D'abord Douloureuse Garde (Dolorous Guard), Lancelot la libère de son enchantement et la renomme. Il y emmène Guinevere après l'avoir sauvée du bûcher. Arthur en fait le siège. Lancelot y est inhumé à sa mort.",
    chars:["Lancelot","Guinevere","Arthur (siège)","Bohort","Lionel"],
    events:["Conquête de la Douloureuse Garde par Lancelot","Renommée Joyeuse Garde","Refuge de Lancelot et Guinevere (après le bûcher)","Siège de la Joyeuse Garde par Arthur","Reddition négociée de Guinevere","Inhumation de Lancelot"],
    sources:["Cycle Vulgate, Lancelot-Graal (Tome Lancelot)","Malory, Le Morte d'Arthur (Livre XI et XX)"] },

  { id:23, name:"Alnwick Castle (Joyeuse Garde alt.)", lat:55.415, lng:-1.706, cat:"lancelot",
    region:"Northumberland, Angleterre",
    desc:"Candidate alternative pour Joyeuse Garde selon certains manuscrits de Malory. Grand château médiéval des Percy, ducs de Northumberland, encore habité aujourd'hui.",
    chars:["Lancelot"],
    events:["Joyeuse Garde (candidate alternative selon certains mss. de Malory)"],
    sources:["Malory, Le Morte d'Arthur (variantes manuscrites)"] },

  { id:24, name:"Astolat — Guildford", lat:51.236, lng:-0.570, cat:"lancelot",
    region:"Surrey, Angleterre",
    desc:"Astolat (Escalot), identifié par Malory avec Guildford. Elaine d'Astolat (la Belle de Shalott) tombe éperdument amoureuse de Lancelot qui reste fidèle à Guinevere. Elle meurt de désespoir, lettre en main, et son corps est envoyé en barque sur la Tamise jusqu'à Camelot.",
    chars:["Lancelot","Elaine d'Astolat (la Belle)","Lavaine (frère)","Bernard d'Astolat (père)"],
    events:["Tournoi de Winchester","Lancelot porte le gage d'Elaine incognito","Blessure de Lancelot soignée par Elaine","Refus de Lancelot (fidèle à Guinevere)","Mort d'Elaine par amour","Voyage funèbre sur la Tamise"],
    sources:["Malory, Le Morte d'Arthur (Livre XVIII)","Alfred Lord Tennyson, The Lady of Shalott (1832/1842)","Cycle Vulgate, La Mort le Roi Artu"] },

]);
