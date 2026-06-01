const CATS = {
  arthur: {
    label: "Arthur",
    color: "#8B1E1E",
    text: "#F07070"
  },
  merlin: {
    label: "Merlin",
    color: "#4B2E83",
    text: "#B99CFF"
  },
  lancelot: {
    label: "Lancelot",
    color: "#1E4E8B",
    text: "#7DB7FF"
  },
  guinevere: {
    label: "Guenièvre",
    color: "#8B5A83",
    text: "#F0A6E8"
  },
  tristan: {
    label: "Tristan",
    color: "#7A4A0F",
    text: "#E8B067"
  },
  gawain: {
    label: "Gauvain",
    color: "#6A7A0F",
    text: "#D6E867"
  },
  grail: {
    label: "Graal",
    color: "#B8860B",
    text: "#FFD56B"
  },
  mordred: {
    label: "Mordred",
    color: "#2F2F2F",
    text: "#BDBDBD"
  },
  morgan: {
    label: "Morgane",
    color: "#0F5A4A",
    text: "#67E8C8"
  },
  creature: {
    label: "Créatures & Monstres",
    color: "#2E7D32",
    text: "#8BE08B"
  },
  encounter: {
    label: "Combats & Rencontres",
    color: "#8B1E1E",
    text: "#F07070"
  },
  wonder: {
    label: "Sites merveilleux",
    color: "#0F6A7A",
    text: "#67D6E8"
  },
  artifact: {
    label: "Artefacts & Armes",
    color: "#B8860B",
    text: "#FFD56B"
  }
};

const LOCS = [
  { id:45, name:"Mont-Saint-Michel — Géant Dinabuc", lat:48.6361, lng:-1.5115, cat:"encounter",
    region:"Normandie, France",
    desc:"Lieu du grand combat d'Arthur contre le géant du Mont-Saint-Michel. Dans Geoffrey de Monmouth, Arthur apprend qu'un géant d'une taille prodigieuse a enlevé Hélène, nièce du duc Hoël, et ravage la région. Arthur monte de nuit avec Keu et Bedivere, puis affronte seul le monstre. Wace nomme le géant Dinabuc et développe l'épisode en véritable exploit de tueur de géant.",
    chars:["Arthur","Géant Dinabuc","Keu / Kay","Bedivere","Hélène","Hoël"],
    events:["Enlèvement d'Hélène","Ravage du Mont-Saint-Michel","Combat singulier d'Arthur contre le géant","Mort du géant"],
    sources:["Geoffrey de Monmouth, Historia Regum Britanniae, Livre X","Wace, Roman de Brut","Tradition du géant du Mont-Saint-Michel"] },

  { id:46, name:"Tombelaine — Tombe d'Hélène", lat:48.656, lng:-1.566, cat:"wonder",
    region:"Baie du Mont-Saint-Michel, Normandie",
    desc:"Îlot voisin du Mont-Saint-Michel associé dans la tradition de Wace à la sépulture d'Hélène, victime du géant Dinabuc. Le toponyme est rapproché de Tombe-Élaine ou Tombe-Hélène. À utiliser comme micro-site narratif lié au combat du Mont-Saint-Michel, avec prudence car l'étiologie est littéraire.",
    chars:["Hélène","Géant Dinabuc","Arthur"],
    events:["Mort d'Hélène","Sépulture légendaire de la victime du géant","Étiologie littéraire du nom Tombelaine"],
    sources:["Wace, Roman de Brut","Tradition du Mont-Saint-Michel et de Tombelaine"] },

  { id:47, name:"Carn Gafallt — Empreinte de Cafall", lat:52.2697, lng:-3.5548, cat:"creature",
    region:"Buellt / Builth, Pays de Galles",
    desc:"Cairn merveilleux associé à Cafall ou Cabal, chien personnel d'Arthur. L'Historia Brittonum raconte que, pendant la chasse du porc Troynt / Twrch Trwyth, Cafall imprima sa patte dans une pierre. Arthur fit assembler un cairn autour de cette pierre, appelée Carn Cabal ou Carn Gafallt. Même si on emportait la pierre, elle revenait miraculeusement à sa place. Dans Culhwch ac Olwen, Cafall participe aussi à la chasse au Twrch Trwyth : Bedwyr le tient en laisse lors d'une phase de la poursuite. Ce POI doit être traité comme l'un des plus anciens mirabilia arthuriens liés à un animal nommé.",
    chars:["Arthur","Cafall / Cabal","Bedwyr / Bedivere","Twrch Trwyth / Porc Troynt"],
    events:["Chasse au porc Troynt / Twrch Trwyth","Empreinte miraculeuse de Cafall","Fondation du cairn par Arthur","Participation de Cafall à la chasse merveilleuse"],
    sources:["Historia Brittonum, Mirabilia","Culhwch ac Olwen","Tradition galloise de Cafall / Cabal"] },

  { id:48, name:"Porth Clais — Débarquement du Twrch Trwyth", lat:51.8730, lng:-5.2800, cat:"encounter",
    region:"Dyfed, Pays de Galles",
    desc:"Point majeur de la chasse au Twrch Trwyth dans Culhwch ac Olwen. Après la poursuite en Irlande, le sanglier surnaturel débarque à Porth Clais en Dyfed. Arthur arrive à Mynyw / St Davids la même nuit. Ce lieu marque l'entrée de la grande chasse merveilleuse sur le sol gallois. La chasse mobilise plusieurs chiens nommés et merveilleux : Drudwyn, Cafall, les deux chiens de Glythmyr le Breton, les petits de Gast Rhymhi, ainsi que d'autres chiens cités dans les listes galloises.",
    chars:["Arthur","Twrch Trwyth","Culhwch","Mabon","Gwrhyr","Chevaliers et chasseurs d'Arthur","Drudwyn","Cafall"],
    events:["Débarquement du Twrch Trwyth","Passage de la chasse d'Irlande au Pays de Galles","Début de la poursuite galloise"],
    sources:["Culhwch ac Olwen","Mabinogion, tradition galloise"] },

  { id:49, name:"Cwm Cerwyn — Combat du Twrch Trwyth", lat:51.962, lng:-4.760, cat:"encounter",
    region:"Preseli Hills, Pembrokeshire, Pays de Galles",
    desc:"Zone de combat majeure dans la chasse au Twrch Trwyth. Le sanglier atteint les Preseli Hills et tient tête à Arthur à Cwm Cerwyn. Plusieurs hommes d'Arthur y sont tués, dont Gwydre fils d'Arthur selon la tradition de Culhwch ac Olwen. La localisation doit être comprise comme une zone de chasse et de bataille, non comme un point unique absolument certain.",
    chars:["Arthur","Twrch Trwyth","Gwydre fils d'Arthur","Culhwch","Chasseurs d'Arthur"],
    events:["Affrontement à Cwm Cerwyn","Mort de plusieurs guerriers d'Arthur","Phase la plus meurtrière de la chasse"],
    sources:["Culhwch ac Olwen","Mabinogion, tradition galloise"] },

  { id:50, name:"Estuaire Severn-Wye — Peigne, rasoir et ciseaux du Twrch Trwyth", lat:51.585, lng:-2.705, cat:"artifact",
    region:"Entre Severn et Wye, localisation estuarienne approximative",
    desc:"Zone majeure de récupération d'artefacts dans Culhwch ac Olwen. Les objets placés entre les oreilles du Twrch Trwyth — peigne, rasoir et ciseaux — sont nécessaires pour raser et préparer Ysbaddaden avant le mariage de Culhwch et Olwen. Arthur, Mabon et les chasseurs merveilleux poursuivent le sanglier à travers le pays. Une partie des objets est arrachée au cours de la lutte dans la zone Severn-Wye. Ce POI doit être relié à la route de chasse du Twrch Trwyth : il représente une récupération d'objets merveilleux en pleine bataille, non un dépôt stable.",
    chars:["Arthur","Twrch Trwyth","Mabon ap Modron","Culhwch","Ysbaddaden"],
    events:["Poursuite du Twrch Trwyth","Récupération du rasoir","Récupération des ciseaux","Quête du peigne merveilleux","Accomplissement des tâches d'Ysbaddaden"],
    sources:["Culhwch ac Olwen","Mabinogion, tradition galloise"] },

  { id:51, name:"Môn / Anglesey — Cath Palug", lat:53.281, lng:-4.340, cat:"creature",
    region:"Île d'Anglesey / Môn, Pays de Galles",
    desc:"Île associée à Cath Palug, le chat monstrueux de la tradition galloise. Dans le poème Pa Gur, Cei / Kay se rend à Môn et lève son bouclier contre Cath Palug. Le texte évoque la mort de cent quatre-vingts guerriers, tombés comme nourriture de la bête. Le lieu exact du combat n'est pas fixé : il faut cartographier l'île entière comme région légendaire.",
    chars:["Cath Palug","Cei / Kay","Arthur"],
    events:["Ravage de Môn par Cath Palug","Combat de Cei contre le chat monstrueux","Mort de nombreux guerriers"],
    sources:["Pa Gur yv y Porthaur","Livre noir de Carmarthen","Triades galloises","Tradition galloise de Cath Palug"] },

  { id:52, name:"Llanfair-yn-Arfon / Menai — Naissance de Cath Palug", lat:53.155, lng:-4.240, cat:"creature",
    region:"Arfon et détroit de Menai, Pays de Galles",
    desc:"Zone associée à la naissance du chaton qui deviendra Cath Palug. Dans la tradition triadique de Henwen, la truie surnaturelle donne naissance à divers prodiges ; près de Llanfair en Arfon naît un chaton noir ou monstrueux. Coll ap Collfrewy le jette dans le détroit de Menai, mais l'animal survit, atteint Môn et y est nourri par les fils de Palug. Localisation approximative et à présenter comme dossier critique.",
    chars:["Henwen","Cath Palug","Coll ap Collfrewy","Fils de Palug"],
    events:["Portée surnaturelle de Henwen","Naissance du chaton de Cath Palug","Jet du chaton dans le Menai","Arrivée du monstre à Môn"],
    sources:["Triades galloises","Trioedd Ynys Prydein","Tradition de Henwen et Cath Palug"] },

  { id:53, name:"Lac de Lausanne — Chapalu", lat:46.520, lng:6.640, cat:"creature",
    region:"Lausanne, Suisse",
    desc:"Localisation continentale du Chapalu, version française de Cath Palug. Dans l'Estoire de Merlin et les traditions du cycle en prose, un pêcheur manque à son vœu envers Dieu et remonte du lac un chaton noir. L'animal devient un démon félin gigantesque, ravage la région, brise les armes d'Arthur et le blesse grièvement avant d'être tué par le roi à l'aide de Marmiadoise.",
    chars:["Arthur","Chapalu / Capalu","Merlin","Pêcheur du lac","Marmiadoise"],
    events:["Péché du pêcheur","Naissance du chat démoniaque","Ravage des abords du lac","Combat d'Arthur contre le Chapalu","Mort du monstre"],
    sources:["Estoire de Merlin / Cycle Vulgate","Romans de la Table Ronde, tradition française","Tradition du Chapalu"] },

  { id:54, name:"Mont du Chat — Tradition du Chapalu", lat:45.6600, lng:5.8210, cat:"wonder",
    region:"Savoie, France",
    desc:"Localisation savoyarde tardive ou concurrente du Chapalu, souvent rapprochée du Mont du Chat, du Col du Chat et du lac du Bourget. À ne pas traiter comme localisation primaire du texte de Lausanne, mais comme géographie alternative et survivance toponymique autour du monstre félin combattu par Arthur.",
    chars:["Arthur","Chapalu / Capalu"],
    events:["Relocalisation savoyarde de la légende du chat monstrueux","Tradition toponymique du Mont du Chat"],
    sources:["Tradition française du Chapalu","Commentaires modernes sur la localisation savoyarde du mythe"] },

  { id:55, name:"Caerleon — Bête glatissante", lat:51.607, lng:-2.949, cat:"creature",
    region:"Galles du Sud",
    desc:"Point régional proposé pour la Bête glatissante, ou Questing Beast, créature composite du cycle arthurien. Elle est décrite comme une chimère au corps de léopard, pattes de cerf, arrière-train de lion et tête de serpent, produisant dans son ventre un bruit de meute. Sa localisation varie selon les textes : ce marqueur doit être présenté comme une apparition régionale et non comme un site fixe.",
    chars:["Bête glatissante / Questing Beast","Arthur","Pellinore","Palamède","Perceval"],
    events:["Apparition de la Bête glatissante","Début ou rappel de la quête de la créature","Poursuite par Pellinore ou Palamède selon les versions"],
    sources:["Cycle Post-Vulgate","Malory, Le Morte d'Arthur","Tradition de la Beste Glatisant"] },

  { id:56, name:"Camelot — Apparition du Saint Graal", lat:51.0620, lng:-1.3130, cat:"grail",
    region:"Winchester / Camelot malorien, Angleterre",
    desc:"Événement majeur du cycle du Graal. À la Pentecôte, le Saint Graal entre dans la salle de Camelot, couvert de samit blanc, répandant lumière, grâce et nourriture spirituelle. L'apparition pousse Gauvain puis les chevaliers de la Table Ronde à jurer la quête du Graal. Le Siège Périlleux est également lié à cette séquence, car Galaad y prend place sans périr.",
    chars:["Arthur","Gauvain","Galaad","Lancelot","Perceval","Bohort","Chevaliers de la Table Ronde"],
    events:["Apparition du Saint Graal à Camelot","Remplissage du Siège Périlleux par Galaad","Vœu de Gauvain","Départ de la Quête du Graal"],
    sources:["Malory, Le Morte d'Arthur","Cycle Vulgate, Queste del Saint Graal"] },

  { id:57, name:"Dinas Emrys — Dragons rouge et blanc", lat:53.0106, lng:-4.0895, cat:"creature",
    region:"Eryri / Snowdonia, Gwynedd, Pays de Galles",
    desc:"Colline légendaire où Vortigern tente de bâtir une forteresse qui s'effondre sans cesse. Ses conseillers veulent sacrifier un enfant sans père, mais le jeune Merlin / Ambrosius révèle que la cause du prodige se trouve sous les fondations : un étang souterrain contenant deux dragons endormis, l'un rouge et l'autre blanc. Les dragons se réveillent et combattent. Le dragon blanc domine d'abord, puis le dragon rouge l'emporte. Merlin interprète la lutte comme une prophétie : le dragon blanc représente les Saxons, le dragon rouge les Bretons / Gallois, appelés à résister et finalement à triompher. C'est l'un des épisodes fondateurs du symbolisme du dragon rouge gallois.",
    chars:["Vortigern","Merlin / Ambrosius","Dragon rouge","Dragon blanc","Conseillers de Vortigern"],
    events:["Construction impossible de la tour de Vortigern","Découverte de l'étang souterrain","Réveil et combat des deux dragons","Prophétie de Merlin sur les Bretons et les Saxons"],
    sources:["Historia Brittonum, tradition de Vortigern et Ambrosius","Geoffrey de Monmouth, Historia Regum Britanniae, Livre VII","Wace, Roman de Brut","Tradition de Dinas Emrys"] },

  { id:58, name:"Brocéliande — Le Lion d'Yvain", lat:48.0186, lng:-2.1722, cat:"creature",
    region:"Forêt de Paimpont / Brocéliande, Bretagne",
    desc:"Épisode majeur d'Yvain ou le Chevalier au Lion de Chrétien de Troyes. Après avoir perdu Laudine, sombré dans la folie puis été guéri, Yvain chemine dans une forêt profonde et entend un cri de douleur. Il découvre un lion attaqué par un serpent ou dragon cracheur de feu, qui le tient par la queue et lui brûle l'échine. Yvain choisit d'aider le lion, symbole de noblesse, contre le serpent, associé au venin et à la félonie. Après la mort du serpent, le lion devient son compagnon fidèle, combat à ses côtés et donne au héros son nouveau nom : le Chevalier au Lion. La localisation exacte n'est pas donnée comme un point géographique certain dans le roman ; ce marqueur utilise Brocéliande comme zone littéraire arthurienne associée à Yvain.",
    chars:["Yvain","Le lion d'Yvain","Serpent / dragon","Laudine","Lunette"],
    events:["Errance d'Yvain après sa folie","Rencontre du lion et du serpent","Combat contre le serpent cracheur de feu","Naissance du Chevalier au Lion","Alliance entre Yvain et le lion"],
    sources:["Chrétien de Troyes, Yvain ou le Chevalier au Lion","Manuscrit d'Yvain, tradition française du XIIe siècle","BnF Gallica, notice sur Le Chevalier au Lion"] },

  { id:59, name:"Aber Cleddau — Gast Rhymhi", lat:51.714, lng:-5.040, cat:"creature",
    region:"Milford Haven / Aber Cleddau, Pembrokeshire, Pays de Galles",
    desc:"Lieu associé à Gast Rhymhi, la chienne Rhymhi ou louve merveilleuse de Culhwch ac Olwen. Arthur cherche ses deux petits, nécessaires à l'accomplissement des tâches imposées par Ysbaddaden. La tradition indique que Gast Rhymhi se trouve à Aber Cleddau, souvent identifié à Milford Haven. Elle ravage le bétail sous la forme d'une louve avec ses deux petits. Arthur et ses hommes l'encerclent ; Dieu les restaure ensuite dans leur forme propre, probablement humaine. Le POI doit signaler la forte incertitude : Gast Rhymhi est à la fois canidé, femme transformée et créature merveilleuse.",
    chars:["Arthur","Gast Rhymhi","Gwyddrud","Gwydden / Gwyddneu Astrus","Culhwch"],
    events:["Recherche des deux petits de Gast Rhymhi","Ravage du bétail sous forme de louve","Capture par Arthur","Restauration de Gast Rhymhi et de ses petits dans leur forme naturelle"],
    sources:["Culhwch ac Olwen","Triades et traditions galloises associées","Tradition d'Aber Cleddau / Milford Haven"] },

  { id:60, name:"Glyn Nyfer — Drudwyn et les chiens du Twrch Trwyth", lat:52.023, lng:-4.800, cat:"creature",
    region:"Vallée de la Nevern / Preseli, Pembrokeshire, Pays de Galles",
    desc:"Zone de rassemblement et de poursuite des chiens merveilleux dans la chasse au Twrch Trwyth. Ysbaddaden affirme qu'on ne peut chasser le Twrch Trwyth sans Drudwyn, le petit chien de Greid fils d'Eri. Pour le contrôler, il faut des objets spéciaux — laisse, collier et chaîne — et surtout Mabon ap Modron comme conducteur. Dans la poursuite galloise, Arthur tient Drudwyn, Bedwyr tient Cafall, et d'autres chasseurs tiennent les chiens de Glythmyr le Breton. Ce marqueur ne désigne pas une niche ou un chenil, mais une zone narrative où les chiens merveilleux deviennent indispensables à l'épreuve.",
    chars:["Arthur","Drudwyn","Greid fils d'Eri","Mabon ap Modron","Cafall","Bedwyr","Chiens de Glythmyr le Breton","Twrch Trwyth"],
    events:["Rassemblement des chiens merveilleux","Contrôle de Drudwyn par Mabon","Poursuite du Twrch Trwyth dans les Preseli","Participation de Cafall et des chiens de Glythmyr"],
    sources:["Culhwch ac Olwen","Mabinogion, tradition galloise","Tradition de la chasse au Twrch Trwyth"] },

  { id:61, name:"Bretagne — Chiens de Glythmyr le Breton", lat:48.0186, lng:-2.1722, cat:"creature",
    region:"Bretagne, localisation régionale approximative",
    desc:"POI régional pour les deux chiens de Glythmyr le Breton, nécessaires aux chasses merveilleuses de Culhwch ac Olwen. Arthur se rend en Bretagne pour les obtenir avant la chasse d'Ysgithyrwyn Penbeidd et la grande poursuite du Twrch Trwyth. Le texte ne fixe pas un lieu précis : utiliser Brocéliande / Paimpont seulement comme point cartographique régional, non comme localisation textuelle certaine. Ces chiens doivent être reliés à la même chaîne narrative que Drudwyn et Cafall.",
    chars:["Arthur","Glythmyr le Breton","Chiens de Glythmyr","Mabon ap Modron","Twrch Trwyth","Ysgithyrwyn Penbeidd"],
    events:["Recherche des chiens de Glythmyr en Bretagne","Préparation de la chasse merveilleuse","Participation aux poursuites d'Ysgithyrwyn et du Twrch Trwyth"],
    sources:["Culhwch ac Olwen","Mabinogion, tradition galloise"] },

  { id:62, name:"Forêt de Morois — Husdent, chien de Tristan", lat:50.590, lng:-4.560, cat:"creature",
    region:"Cornouailles, localisation littéraire approximative",
    desc:"Lieu approximatif pour Husdent, aussi appelé Hodain dans certaines traditions, le chien de Tristan. Dans le Roman de Tristan, Husdent reconnaît son maître, pleure son absence et manifeste une fidélité exceptionnelle. Lorsque Tristan et Iseut vivent dans la forêt de Morois, Husdent devient leur compagnon de survie. Tristan lui apprend à chasser sans aboyer, afin de ne pas trahir leur présence. Ce POI doit être traité comme une localisation littéraire : la forêt de Morois appartient à la géographie romanesque de Tristan et ne correspond pas à un point historique certain.",
    chars:["Tristan","Iseut","Husdent / Hodain","Roi Marc"],
    events:["Fidélité de Husdent envers Tristan","Reconnaissance de son maître","Vie de Tristan et Iseut dans la forêt","Dressage du chien à chasser sans aboyer"],
    sources:["Béroul, Roman de Tristan","Tradition française de Tristan et Iseut","Roman en prose de Tristan"] },

  { id:63, name:"Galles / Swales — Petitcreiu et la clochette d'or", lat:52.1300, lng:-3.7800, cat:"artifact",
    region:"Galles ou Swales, localisation régionale",
    desc:"Dans le Tristan de Gottfried von Strassburg, Petitcreiu est un petit chien merveilleux venu d'Avalon et possédé par le duc Gilan. Son véritable artefact est aussi sa clochette d'or : son son apaise la douleur, bannit le chagrin et soulage la peine amoureuse. Tristan obtient Petitcreiu après avoir vaincu le géant Urgan, puis l'envoie à Iseut. Iseut finit par briser la clochette, refusant d'être consolée magiquement pendant que Tristan continue de souffrir. La cour de Gilan est localisée dans un pays appelé Swales, distinct ou voisin de Galles selon les lectures : utiliser un point régional prudent.",
    chars:["Tristan","Iseut","Petitcreiu / Petitcru / Peticrewe","Duc Gilan","Urgan le Géant"],
    events:["Possession de Petitcreiu par le duc Gilan","Victoire de Tristan sur Urgan","Don du chien merveilleux à Tristan","Envoi à Iseut","Bris de la clochette par Iseut"],
    sources:["Gottfried von Strassburg, Tristan","Tradition tristanienne germanique","Cycle de Tristan et Iseut"] },

  { id:64, name:"Cornouailles — Manteau d'invisibilité d'Arthur", lat:50.6631, lng:-4.7505, cat:"artifact",
    region:"Cornouailles, localisation régionale",
    desc:"Le Llen Arthyr yng Nghernyw, ou manteau d'Arthur en Cornouailles, appartient à la tradition galloise des Treize Trésors de l'île de Bretagne. Son pouvoir est net : celui qui se trouve dessous ne peut pas être vu, tandis que lui peut voir tout le monde. Ce POI ne doit pas être présenté comme une scène de récupération précise : la tradition localise l'objet en Cornouailles, sans donner un lieu d'acquisition narratif détaillé. Tintagel sert ici de point régional arthurien commode, non de preuve topographique.",
    chars:["Arthur"],
    events:["Possession du manteau merveilleux","Pouvoir d'invisibilité","Association aux Treize Trésors de Bretagne"],
    sources:["Trioedd Ynys Prydein / Treize Trésors de l'île de Bretagne","Tradition galloise du Llen Arthyr yng Nghernyw","Culhwch ac Olwen, mention des biens qu'Arthur refuse de donner"] },

  { id:65, name:"Irlande — Chaudron de Diwrnach", lat:53.4129, lng:-8.2439, cat:"artifact",
    region:"Irlande, localisation régionale approximative",
    desc:"Dans Culhwch ac Olwen, le chaudron de Diwrnach le Gwyddel / l'Irlandais fait partie des objets exigés pour accomplir les tâches d'Ysbaddaden. Arthur envoie d'abord une ambassade à Odgar, roi d'Irlande, afin d'obtenir le chaudron de son intendant Diwrnach. Devant le refus, Arthur traverse la mer dans son navire Prydwen avec une petite troupe. Bedwyr saisit le chaudron, Hygwydd le porte, et Llenlleawg l'Irlandais tue Diwrnach et ses hommes avec Caledfwlch. Le lieu exact de la maison de Diwrnach n'est pas donné : placer le marqueur au centre de l'Irlande comme zone littéraire, pas comme site archéologique.",
    chars:["Arthur","Diwrnach le Gwyddel","Bedwyr","Hygwydd","Llenlleawg l'Irlandais","Odgar roi d'Irlande"],
    events:["Ambassade d'Arthur auprès d'Odgar","Refus de Diwrnach","Voyage d'Arthur en Prydwen","Saisie du chaudron par Bedwyr","Mort de Diwrnach","Fuite d'Arthur avec le chaudron"],
    sources:["Culhwch ac Olwen","Mabinogion, tradition galloise","Tradition du chaudron de Diwrnach / Dyrnwch"] },

  { id:66, name:"Porth Kerddin — Mesure du chaudron", lat:51.8730, lng:-5.2800, cat:"artifact",
    region:"Dyfed, Pays de Galles, localisation incertaine",
    desc:"Après la prise du chaudron de Diwrnach en Irlande, Culhwch ac Olwen indique qu'Arthur et ses hommes débarquent chez Llwydeu fils de Kelcoed, à Porth Kerddin en Dyfed, et que la mesure du chaudron s'y trouve. La localisation précise de Porth Kerddin est discutée ; ce marqueur utilise la zone de Porth Clais / St Davids comme point cartographique pratique, mais la description doit signaler l'incertitude.",
    chars:["Arthur","Llwydeu fils de Kelcoed","Bedwyr","Hygwydd"],
    events:["Retour d'Irlande avec le chaudron","Débarquement en Dyfed","Mémoire locale de la mesure du chaudron"],
    sources:["Culhwch ac Olwen","Mabinogion, tradition galloise"] },

  { id:67, name:"Château de Wrnach — Épée du géant", lat:52.1300, lng:-3.7800, cat:"artifact",
    region:"Pays de Galles / localisation littéraire incertaine",
    desc:"Dans Culhwch ac Olwen, l'épée de Wrnach Gawr est nécessaire aux tâches imposées par Ysbaddaden. Le géant ne veut la donner à personne. Cei / Kay entre dans son château en se faisant passer pour le meilleur polisseur d'épées du monde. Wrnach lui confie l'épée ; Cei la polit, puis profite de l'occasion pour tuer le géant avec sa propre arme. La localisation exacte du château de Wrnach n'est pas fixée : utiliser ce marqueur comme lieu littéraire régional, non comme point historique certain.",
    chars:["Cei / Kay","Wrnach Gawr","Arthur","Culhwch","Ysbaddaden"],
    events:["Obtention de l'épée de Wrnach","Ruse de Cei comme polisseur d'épées","Mort de Wrnach par sa propre arme","Accomplissement d'une tâche de Culhwch"],
    sources:["Culhwch ac Olwen","Mabinogion, tradition galloise","Welsh Classical Dictionary, entrée Wrnach Gawr"] },

  { id:68, name:"Camelot — Épée aventureuse de Balin et Galaad", lat:51.0620, lng:-1.3130, cat:"artifact",
    region:"Winchester / Camelot malorien, Angleterre",
    desc:"À la cour d'Arthur, une demoiselle venue d'Avalon apporte une épée que seul un chevalier d'exception peut tirer de son fourreau. Balin réussit l'épreuve et obtient l'arme, qui devient la cause de grands malheurs. Après la mort de Balin, Merlin place cette épée dans une pierre de marbre flottante. Au début de la Quête du Graal, la pierre arrive sur l'eau à Camelot, et Galaad tire l'épée, accomplissant une nouvelle épreuve de prédestination chevaleresque. Cet objet doit être distingué de l'épée royale d'Arthur et d'Excalibur.",
    chars:["Balin le Sauvage","Galaad","Arthur","Merlin","Demoiselle d'Avalon","Balan"],
    events:["Arrivée de la demoiselle à la cour","Balin tire l'épée du fourreau","Malédiction et destin tragique de Balin","Épée placée par Merlin dans une pierre flottante","Galaad tire l'épée à Camelot"],
    sources:["Malory, Le Morte d'Arthur, Livre II","Malory, Le Morte d'Arthur, Livre XIII","Cycle du Graal, motif de l'épée prédestinée"] },

  { id:69, name:"Abbaye blanche — Écu de Galaad", lat:51.1485, lng:-2.7140, cat:"artifact",
    region:"Lieu littéraire non localisé ; point conventionnel à Glastonbury",
    desc:"Dans la Quête du Graal chez Malory, Galaad arrive à une Abbaye blanche où se trouve un écu merveilleux : blanc comme neige, marqué d'une croix rouge. Nul ne peut le porter sans être blessé, mutilé ou tué, sauf le meilleur chevalier du monde. Bagdemagus tente l'épreuve et échoue ; l'écu revient finalement à Galaad. Le texte donne le type de lieu — une abbaye blanche — mais pas une localisation historique certaine. Glastonbury sert seulement de point conventionnel pour représenter un lieu monastique du Graal.",
    chars:["Galaad","Bagdemagus","Uwaine","Moine de l'Abbaye blanche"],
    events:["Arrivée de Galaad à l'Abbaye blanche","Épreuve de l'écu blanc à croix rouge","Échec de Bagdemagus","Attribution de l'écu à Galaad"],
    sources:["Malory, Le Morte d'Arthur, Livre XIII","Queste del Saint Graal, tradition de l'écu de Galaad"] },

  { id:70, name:"Barenton — Anneau d'invisibilité d'Yvain", lat:48.0570, lng:-2.1710, cat:"artifact",
    region:"Brocéliande / Paimpont, Bretagne",
    desc:"Dans Yvain ou le Chevalier au Lion de Chrétien de Troyes, Yvain poursuit le chevalier Esclados jusqu'au château de Laudine après l'avoir mortellement blessé près de la fontaine merveilleuse. Pris au piège dans le château et menacé par les gens d'Esclados, il est sauvé par Lunette, qui lui remet un anneau magique. En tournant la pierre de l'anneau, Yvain devient invisible aux yeux de ses ennemis. Ce POI doit être lié à la Fontaine-qui-bout / Fontaine de Barenton et au château de Laudine, en signalant que la topographie romanesque n'est pas un cadastre historique.",
    chars:["Yvain","Lunette","Laudine","Esclados le Roux"],
    events:["Combat d'Yvain contre Esclados","Piège du château","Don de l'anneau par Lunette","Invisibilité d'Yvain","Rencontre avec Laudine"],
    sources:["Chrétien de Troyes, Yvain ou le Chevalier au Lion","Tradition de la Fontaine de Barenton","BnF Gallica, notices sur Le Chevalier au Lion"] },

  { id:71, name:"Hautdesert — Ceinture verte de Gauvain", lat:53.1685, lng:-1.8709, cat:"artifact",
    region:"Staffordshire / Peak District, localisation moderne hypothétique",
    desc:"Dans Sir Gawain and the Green Knight, Gauvain séjourne au château de Hautdesert avant son rendez-vous avec le Chevalier Vert. Le troisième jour, la dame du château lui offre une ceinture verte censée protéger celui qui la porte contre la mort. Gauvain l'accepte et la cache au seigneur, rompant ainsi le pacte d'échange. À la Green Chapel, le Chevalier Vert révèle que le don faisait partie de l'épreuve orchestrée par Morgan le Fay. Lud's Church / le Peak District sert ici de localisation moderne hypothétique pour la Green Chapel et l'espace de Hautdesert ; l'emplacement réel du poème reste discuté.",
    chars:["Gauvain","Chevalier Vert / Bertilak de Hautdesert","Dame de Hautdesert","Morgan le Fay"],
    events:["Séjour de Gauvain à Hautdesert","Tentations de la dame","Don de la ceinture verte","Dissimulation de l'objet","Révélation finale à la Green Chapel"],
    sources:["Sir Gawain and the Green Knight","Tradition du Green Knight","Interprétations topographiques modernes autour de Lud's Church"] },

  { id:72, name:"Carlisle — Manteau de chasteté et cor magique", lat:54.8925, lng:-2.9329, cat:"artifact",
    region:"Carlisle, Cumbria, Angleterre",
    desc:"Dans la tradition du Boy and the Mantle et dans des récits apparentés comme le Lai du Cor et le Mantel Mautaillié, la cour d'Arthur reçoit des objets merveilleux servant à tester la fidélité conjugale ou la chasteté : un manteau qui ne convient qu'à une femme fidèle, et un cor dont on ne peut boire sans se trahir si l'on est infidèle. La ballade anglaise situe l'arrivée du jeune porteur du manteau à Carlisle. Ce POI appartient à la tradition des objets-épreuves de cour ; il est moins central que les textes gallois ou la Vulgate, mais très utile pour enrichir la carte des artefacts.",
    chars:["Arthur","Guenièvre","Caradoc","Tegau Eurfron","Le jeune porteur du manteau"],
    events:["Arrivée du manteau à la cour","Épreuve de Guenièvre et des dames","Révélation de fidélité ou d'infidélité","Motif du cor magique de fidélité"],
    sources:["The Boy and the Mantle","Lai du Cor","Le Mantel Mautaillié","Tradition des tests de chasteté à la cour d'Arthur"] },

  { id:73, name:"Corbenic — Lance sanglante et épée brisée", lat:51.1485, lng:-2.7140, cat:"artifact",
    region:"Château du Graal, localisation littéraire conventionnelle",
    desc:"Le château du Roi Pêcheur / Corbenic concentre plusieurs artefacts majeurs du cycle du Graal : le Graal lui-même, la lance qui saigne, et selon les versions une épée brisée que Perceval ou le chevalier élu doit comprendre ou ressouder. Dans le Conte du Graal, Perceval voit passer le cortège merveilleux mais ne pose pas les questions nécessaires ; dans les continuations et la Queste, les objets prennent une valeur théologique plus forte. Glastonbury sert seulement de point conventionnel pour représenter le Château du Graal : ne pas présenter cette coordonnée comme une identification historique.",
    chars:["Perceval","Roi Pêcheur","Galaad","Bohort","Pucelles du Graal"],
    events:["Arrivée au château du Graal","Passage de la lance qui saigne","Apparition du Graal","Épreuve de la question non posée","Motif de l'épée brisée"],
    sources:["Chrétien de Troyes, Le Conte du Graal","Continuations de Perceval","Queste del Saint Graal","Cycle de Corbenic"] },

  { id:74, name:"Navire de Salomon — Épée aux étranges baudriers", lat:55.7700, lng:-2.0050, cat:"artifact",
    region:"Marches d'Écosse / mer du Nord, localisation approximative",
    desc:"Dans la Quête du Graal chez Malory, Galaad, Perceval, Bohort et la sœur de Perceval montent dans le navire merveilleux de Salomon. Ils y trouvent un lit, des inscriptions, des objets prophétiques et une épée merveilleuse issue de David et préparée par Salomon pour le chevalier élu. La sœur de Perceval complète l'objet en lui donnant les bons baudriers ou attaches ; Galaad est ensuite ceint de l'épée. Le texte rattache ensuite la navigation à Carteloise, dans les marches d'Écosse : ce marqueur doit représenter une zone maritime-littéraire et non un port exact.",
    chars:["Galaad","Perceval","Bohort","Sœur de Perceval","Salomon","David"],
    events:["Entrée dans le navire de Salomon","Découverte de l'épée merveilleuse","Remplacement des attaches de l'épée","Galaad ceint l'épée aux étranges baudriers","Navigation vers Carteloise"],
    sources:["Malory, Le Morte d'Arthur, Livre XVII","Queste del Saint Graal","Tradition du navire de Salomon"] },

  { id:75, name:"Bataille de Rion — Marmiadoise", lat:49.1829, lng:-0.3707, cat:"artifact",
    region:"Normandie / zone continentale approximative",
    desc:"Dans certaines versions françaises du Merlin, Arthur affronte le roi Rion, souverain barbu issu d'une race de géants. Rion possède Marmiadoise, une épée prestigieuse transmise depuis Hercule et Jason. Après un duel difficile, Arthur ne tue pas Rion mais lui enlève Marmiadoise, qu'il porte ensuite. La localisation exacte de la bataille varie ou reste vague dans la tradition ; ce point normand est seulement un marqueur continental approximatif. Si la carte possède déjà un POI consacré à Rion, enrichir celui-ci au lieu de créer un doublon.",
    chars:["Arthur","Rion / Rience","Gauvain","Ban de Benoïc","Bohort"],
    events:["Duel d'Arthur contre Rion","Conquête de Marmiadoise","Transmission héroïque de l'épée depuis Hercule","Arthur adopte Marmiadoise dans certaines versions"],
    sources:["Robert de Boron, Merlin, tradition manuscrite française","Romans de la Table Ronde, tradition de Rion et Marmiadoise","BnF Mandragore / Biblissima, enluminures d'Arthur tenant l'épée de Rion"] },

  { id:76, name:"Camelot — Clarent, épée de paix volée", lat:51.0620, lng:-1.3130, cat:"artifact",
    region:"Winchester / Camelot malorien ou arthurien",
    desc:"Clarent est l'épée cérémonielle ou épée de paix d'Arthur dans certaines traditions tardives, notamment l'Alliterative Morte Arthure. Elle n'est pas une arme de conquête comparable à Excalibur : sa force est symbolique et politique. Dans la tradition de la chute d'Arthur, Mordred s'en empare ou l'utilise, ce qui transforme l'objet royal en signe de trahison. Ce POI doit être traité comme un artefact politique de la catastrophe de Camlann, pas comme une arme magique à pouvoirs spectaculaires.",
    chars:["Arthur","Mordred","Guenièvre"],
    events:["Garde de Clarent à la cour","Vol ou appropriation par Mordred","Renversement symbolique de l'autorité royale","Annonce de la chute d'Arthur"],
    sources:["Alliterative Morte Arthure","Tradition tardive de Clarent","Cycle de la chute d'Arthur"] }
];

// TODO: si l'application Leaflet reçoit une couche de polylignes,
// exploiter ces jalons pour tracer la chasse du Twrch Trwyth sans
// présenter les points régionaux comme des certitudes topographiques.
const TWRCH_TRWYTH_ROUTE = [
  { name:"Irlande — départ de la chasse", lat:53.4129, lng:-8.2439 },
  { name:"Porth Clais — débarquement en Dyfed", lat:51.8730, lng:-5.2800 },
  { name:"Mynyw / St Davids — arrivée d'Arthur", lat:51.8820, lng:-5.2690 },
  { name:"Preseli / Cwm Cerwyn — combat sanglant", lat:51.962, lng:-4.760 },
  { name:"Estuaire Severn-Wye — récupération des objets", lat:51.585, lng:-2.705 },
  { name:"Cornouailles / mer — fuite finale du sanglier", lat:50.6631, lng:-4.7505 }
];

const TODO_ARTEFACTS_NON_LOCALISES = [
  {
    name:"Rhongomyniad / Ron",
    reason:"Lance d'Arthur très importante, mais pas de scène claire de récupération localisable."
  },
  {
    name:"Carnwennan",
    reason:"Dague d'Arthur attestée dans la tradition galloise, mais pas de lieu d'obtention stable."
  },
  {
    name:"Wynebgwrthucher",
    reason:"Bouclier d'Arthur dans Culhwch ac Olwen ; objet nommé mais lieu d'acquisition non donné."
  },
  {
    name:"Pridwen / Prydwen",
    reason:"Bouclier ou navire selon les traditions ; important mais déjà mieux traité comme moyen de voyage d'Arthur ou comme attribut, pas comme objet récupéré."
  },
  {
    name:"Galatine / Galuth",
    reason:"Épée associée à Gauvain dans certaines traditions tardives ou dérivées ; localisation d'acquisition médiévale trop instable."
  },
  {
    name:"Arondight",
    reason:"Nom d'épée de Lancelot surtout tardif / postmédiéval dans la forme populaire ; ne pas ajouter sans source textuelle et lieu précis."
  },
  {
    name:"Failnaught",
    reason:"Souvent attribué à Tristan dans la culture moderne, mais pas solide comme arme médiévale arthurienne localisable."
  },
  {
    name:"Sequence / Secace",
    reason:"Épée obscure parfois liée à Arthur ou Lancelot ; pas assez stable pour un POI sans recherche manuscrite ciblée."
  },
  {
    name:"Harpes, cornes, plats et échiquiers des Treize Trésors",
    reason:"Très intéressants, mais à traiter dans une future couche galloise des Treize Trésors avec lieux régionaux prudents."
  }
];
