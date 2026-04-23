import { Vehicle } from "@/types/vehicle";

export const vehiclesData: Vehicle[] = [
  // --- 718 SPYDER RS ---
  {
    id: "porsche-718-spyder-rs",
    vedettes: true, // Ce véhicule est une vedette
    name: "718 Spyder RS",
    brand: "Porsche",
    model: "718",
    year: 2024,
    price: 159053,
    description:
      "Le couronnement de la gamme 718 à moteur central. Le moteur de la 911 GT3 dans un cabriolet ultra-léger et puriste.",
    images: "/vehicle/718/718_Spyder_RS.png",
    type: "Convertible",
    energy: "Essence",
    transmission: "Automatique", // PDK 7 rapports
    drivetrain: "Propulsion",
    doors: 2,
    seats: 2,
    exteriorColor: "Gris Arctique", // Couleur de présentation
    interiorColor: "Race-Tex Noir / Argent",
    stats: {
      powerHP: 500,
      torqueNm: 450,
      topSpeedKmh: 308,
      acceleration0to100: 3.4,
      weightKg: 1410,
      fuelConsumption: 13.0,
    },
    dimensions: {
      lengthMm: 4418, 
      widthMm: 1822, 
      heightMm: 1252, 
      wheelbaseMm: 2482, 
      trunkCapacityL: 120, // 125L à l'avant, 120L à l'arrière
    },
    features: [
      "Toit bimini manuel allégé",
      "Échappement sport en acier spécial",
      "Entrées d'air derrière les appuie-têtes",
      "Suspension PASM avec surbaissement de 30 mm",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- 718 CAYMAN GT4 RS ---
  {
    id: "porsche-718-cayman-gt4-rs",
    vedettes: false,
    name: "718 Cayman GT4 RS",
    brand: "Porsche",
    model: "718",
    year: 2024,
    price: 161000, // Prix de base approximatif
    description:
      "Conçu pour la performance pure. Une aérodynamique radicale et un moteur atmosphérique hurlant à 9000 tr/min.",
    images: "/vehicle/718/718.png", // Chemin à adapter selon le nom exact de ton fichier
    type: "Coupe",
    energy: "Essence",
    transmission: "Automatique", // PDK 7 rapports
    drivetrain: "Propulsion",
    doors: 2,
    seats: 2,
    exteriorColor: "Bleu Requin",
    interiorColor: "Race-Tex Noir / Bleu",
    stats: {
      powerHP: 500,
      torqueNm: 450,
      topSpeedKmh: 315,
      acceleration0to100: 3.4,
      weightKg: 1415,
      fuelConsumption: 13.2,
    },
    dimensions: {
      lengthMm: 4456, 
      widthMm: 1822, 
      heightMm: 1267, 
      wheelbaseMm: 2482, 
      trunkCapacityL: 136, // 125L à l'avant, 136L à l'arrière
    },
    features: [
      "Aileron arrière fixe avec fixation en col de cygne",
      "Prises d'air en carbone à la place des vitres arrière",
      "Capot avant en PRFC",
      "Pack Clubsport (Option)",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- 911 CARRERA ---
  {
    id: "porsche-911-carrera",
    vedettes: false,
    name: "911 Carrera",
    brand: "Porsche",
    model: "911",
    year: 2024,
    price: 131700,
    description:
      "L'icône intemporelle. La pureté de la 911 dans sa version originelle avec son légendaire flat-six biturbo.",
    images: "/vehicle/911/911_Carrera.png",
    type: "Coupe",
    energy: "Essence",
    transmission: "Automatique",
    drivetrain: "Propulsion",
    doors: 2,
    seats: 4,
    exteriorColor: "Argent GT Métallisé",
    interiorColor: "Noir",
    stats: {
      powerHP: 394, // Génération 992.2
      torqueNm: 450,
      topSpeedKmh: 294,
      acceleration0to100: 4.1, // 3.9 avec Sport Chrono
      weightKg: 1520,
      fuelConsumption: 10.3,
    },
    dimensions: {
      lengthMm: 4542,
      widthMm: 1852,
      heightMm: 1302,
      wheelbaseMm: 2450,
      trunkCapacityL: 132,
    },
    features: [
      "Phares Matrix LED",
      "Porsche Communication Management (PCM)",
      "Jantes Carrera 19/20 pouces",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- 911 CARRERA CABRIOLET ---
  {
    id: "porsche-911-carrera-cabriolet",
    vedettes: false,
    name: "911 Carrera Cabriolet",
    brand: "Porsche",
    model: "911",
    year: 2024,
    price: 145900,
    description:
      "La sensation de liberté de la 911 Carrera avec une capote en tissu entièrement automatique et un saute-vent électrique.",
    images: "/vehicle/911/911_Carrera_Cabriolet.png",
    type: "Convertible",
    energy: "Essence",
    transmission: "Automatique",
    drivetrain: "Propulsion",
    doors: 2,
    seats: 4,
    exteriorColor: "Bleu Gentiane Métallisé",
    interiorColor: "Cuir Beige Mojave",
    stats: {
      powerHP: 394,
      torqueNm: 450,
      topSpeedKmh: 291,
      acceleration0to100: 4.3,
      weightKg: 1590,
      fuelConsumption: 10.6,
    },
    dimensions: {
      lengthMm: 4542,
      widthMm: 1852,
      heightMm: 1301,
      wheelbaseMm: 2450,
      trunkCapacityL: 132,
    },
    features: [
      "Capote escamotable en 12s",
      "Saute-vent électrique intégré",
      "Sièges chauffants",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- 911 TARGA 4S ---
  {
    id: "porsche-911-targa-4s",
    vedettes: false,
    name: "911 Targa 4S",
    brand: "Porsche",
    model: "911",
    year: 2024,
    price: 173000,
    description:
      "Le design culte avec son arceau iconique, allié à la sécurité de la transmission intégrale et la puissance du modèle S.",
    images: "/vehicle/911/911_Targa_4S.png",
    type: "Convertible", // Ou "Coupe" avec toit amovible selon la nomenclature
    energy: "Essence",
    transmission: "Automatique",
    drivetrain: "Intégrale (AWD)",
    doors: 2,
    seats: 4,
    exteriorColor: "Rouge Carmin",
    interiorColor: "Cuir Noir / Rouge Bordeaux",
    stats: {
      powerHP: 450,
      torqueNm: 530,
      topSpeedKmh: 304,
      acceleration0to100: 3.8,
      weightKg: 1675,
      fuelConsumption: 11.1,
    },
    dimensions: {
      lengthMm: 4542,
      widthMm: 1852,
      heightMm: 1302,
      wheelbaseMm: 2450,
      trunkCapacityL: 132,
    },
    features: [
      "Cinématique de toit Targa automatique",
      "Transmission intégrale PTM",
      "Arceau Targa en Argent (finition satinée)",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- 911 GT3 ---
  {
    id: "porsche-911-gt3",
    vedettes: true,
    name: "911 GT3",
    brand: "Porsche",
    model: "911",
    year: 2024,
    price: 213700,
    description:
      "La pureté du sport automobile. Moteur atmosphérique haut régime de 4,0 litres et train avant à double triangulation.",
    images: "/vehicle/911/911_GT3.png",
    type: "Coupe",
    energy: "Essence",
    transmission: "Automatique", // Disponible en Manuelle aussi
    drivetrain: "Propulsion",
    doors: 2,
    seats: 2, // Banquette arrière supprimée
    exteriorColor: "Bleu Requin",
    interiorColor: "Race-Tex Noir",
    stats: {
      powerHP: 510,
      torqueNm: 470,
      topSpeedKmh: 318,
      acceleration0to100: 3.4,
      weightKg: 1435,
      fuelConsumption: 13.0,
    },
    dimensions: {
      lengthMm: 4570,
      widthMm: 1852,
      heightMm: 1279,
      wheelbaseMm: 2457,
      trunkCapacityL: 132,
    },
    features: [
      "Aileron arrière col de cygne",
      "Capot avant en PRFC",
      "Train avant à double triangulation",
      "Roues arrière directrices",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- 911 SPIRIT 70 ---
  {
    id: "porsche-911-spirit-70",
    vedettes: false,
    name: "911 Spirit 70",
    brand: "Porsche",
    model: "911",
    year: 2026,
    price: 247200,
    description:
      "Édition spéciale limitée (1500 ex.) incarnant l'âme des années 70. Teinte Olive Neo, intérieur Pascha et jantes Sport Classic.",
    images: "/vehicle/911/911_Spirit_70.png",
    type: "Convertible",
    energy: "Essence",
    transmission: "Automatique",
    drivetrain: "Propulsion",
    doors: 2,
    seats: 4,
    exteriorColor: "Olive Neo",
    interiorColor: "Cuir Noir / Textile Pascha",
    stats: {
      powerHP: 480, // Estimation basée sur châssis GTS
      torqueNm: 570,
      topSpeedKmh: 309,
      acceleration0to100: 3.4,
      weightKg: 1610,
      fuelConsumption: 10.6,
    },
    dimensions: {
      lengthMm: 4553,
      widthMm: 1852,
      heightMm: 1293, // PASM -20
      wheelbaseMm: 2450,
      trunkCapacityL: 132,
    },
    features: [
      "Teinte exclusive Olive Neo",
      "Motif intérieur Pascha",
      "Jantes Sport Classic 20/21",
      "Stickers Heritage Design",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: false,
  },

  // --- 911 GT3 RS ---
  {
    id: "porsche-911-gt3-rs",
    vedettes: true,
    name: "911 GT3 RS",
    brand: "Porsche",
    model: "911",
    year: 2025,
    price: 253454,
    description:
      "Une voiture de course homologuée route. Aérodynamisme actif (DRS) pour une force d'appui extrême sur circuit.",
    images: "/vehicle/911/911_GT3_RS.png",
    type: "Coupe",
    energy: "Essence",
    transmission: "Automatique",
    drivetrain: "Propulsion",
    doors: 2,
    seats: 2,
    exteriorColor: "Argent GT / Jantes Rouges",
    interiorColor: "Race-Tex Noir / Rouge",
    stats: {
      powerHP: 525,
      torqueNm: 465,
      topSpeedKmh: 296,
      acceleration0to100: 3.2,
      weightKg: 1450,
      fuelConsumption: 13.4,
    },
    dimensions: {
      lengthMm: 4572,
      widthMm: 1900,
      heightMm: 1322,
      wheelbaseMm: 2457,
      trunkCapacityL: 0, // Système aéro S-Duct à la place du coffre
    },
    features: [
      "Aérodynamisme actif (DRS)",
      "Radiateur central (Concept S-Duct)",
      "Réglages suspensions au volant",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- 911 TURBO S ---
  {
    id: "porsche-911-turbo-s",
    vedettes: true,
    name: "911 Turbo S",
    brand: "Porsche",
    model: "911",
    year: 2024,
    price: 250000,
    description:
      "La quintessence de la performance au quotidien. 650 chevaux pour des accélérations qui défient les lois de la physique.",
    images: "/vehicle/911/911_Turbo_S.png",
    type: "Coupe",
    energy: "Essence",
    transmission: "Automatique",
    drivetrain: "Intégrale (AWD)",
    doors: 2,
    seats: 4,
    exteriorColor: "Noir Intense Métallisé",
    interiorColor: "Cuir Bicolore Exclusif",
    stats: {
      powerHP: 650,
      torqueNm: 800,
      topSpeedKmh: 330,
      acceleration0to100: 2.7,
      weightKg: 1640,
      fuelConsumption: 12.0,
    },
    dimensions: {
      lengthMm: 4551,
      widthMm: 1900,
      heightMm: 1305,
      wheelbaseMm: 2450,
      trunkCapacityL: 128,
    },
    features: [
      "Aérodynamique active (PAA)",
      "Freins céramique (PCCB)",
      "Système de contrôle du roulis (PDCC)",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- 911 TURBO S CABRIOLET ---
  {
    id: "porsche-911-turbo-s-cabriolet",
    vedettes: false,
    name: "911 Turbo S Cabriolet",
    brand: "Porsche",
    model: "911",
    year: 2024,
    price: 263000,
    description:
      "Les performances d'une supercar avec le plaisir de rouler à ciel ouvert.",
    images: "/vehicle/911/911_Turbo_S_Cabriolet.png",
    type: "Convertible",
    energy: "Essence",
    transmission: "Automatique",
    drivetrain: "Intégrale (AWD)",
    doors: 2,
    seats: 4,
    exteriorColor: "Craie",
    interiorColor: "Cuir Rouge Bordeaux",
    stats: {
      powerHP: 650,
      torqueNm: 800,
      topSpeedKmh: 330,
      acceleration0to100: 2.8,
      weightKg: 1710,
      fuelConsumption: 12.1,
    },
    dimensions: {
      lengthMm: 4551,
      widthMm: 1900,
      heightMm: 1304,
      wheelbaseMm: 2450,
      trunkCapacityL: 128,
    },
    features: [
      "Capote renforcée au magnésium",
      "Freins céramique (PCCB)",
      "Sièges Sport Plus 18 positions",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- 911 GT3 S/C ---
  {
    id: "porsche-911-gt3-sc",
    vedettes: false,
    name: "911 GT3 S/C",
    brand: "Porsche",
    model: "911",
    year: 2026,
    price: 276500,
    description:
      "Un cabriolet radical allégé. Moteur atmo 510ch, boîte mécanique et sonorité magistrale à ciel ouvert. Une vraie Driver's Car.",
    images: "/vehicle/911/911_GT3.png", // Remplacer par le nom exact de l'image GT3 S/C s'il est différent
    type: "Convertible",
    energy: "Essence",
    transmission: "Manuelle", // Boîte manuelle GT 6 vitesses
    drivetrain: "Propulsion",
    doors: 2,
    seats: 2,
    exteriorColor: "Pyrored",
    interiorColor: "Race-Tex / Cuir Léger",
    stats: {
      powerHP: 510,
      torqueNm: 470,
      topSpeedKmh: 313,
      acceleration0to100: 3.9,
      weightKg: 1497,
      fuelConsumption: 13.7,
    },
    dimensions: {
      lengthMm: 4570,
      widthMm: 1852,
      heightMm: 1279,
      wheelbaseMm: 2457,
      trunkCapacityL: 132,
    },
    features: [
      "Boîte manuelle à rapports courts",
      "Panneaux de porte légers PRFC",
      "Châssis réglage GT3 Touring",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: false,
  },

  // --- 911 TURBO 50E ANNIVERSAIRE ---
  {
    id: "porsche-911-turbo-50",
    vedettes: false,
    name: "911 Turbo 50e Anniversaire",
    brand: "Porsche",
    model: "911",
    year: 2024,
    price: 280000,
    description:
      "Série très limitée (1974 exemplaires) célébrant le demi-siècle de la 911 Turbo. Des détails esthétiques exclusifs mariés à 650 ch.",
    images: "/vehicle/911/911_Turbo_50e_Anniversaire.png",
    type: "Coupe",
    energy: "Essence",
    transmission: "Automatique",
    drivetrain: "Intégrale (AWD)",
    doors: 2,
    seats: 4,
    exteriorColor: "Turbonite / Gris",
    interiorColor: "Tartan / Cuir Noir",
    stats: {
      powerHP: 650,
      torqueNm: 800,
      topSpeedKmh: 330,
      acceleration0to100: 2.7,
      weightKg: 1640,
      fuelConsumption: 12.0,
    },
    dimensions: {
      lengthMm: 4535,
      widthMm: 1900,
      heightMm: 1305, // Basé sur la Turbo S
      wheelbaseMm: 2450,
      trunkCapacityL: 128,
    },
    features: [
      "Détails de carrosserie en Turbonite",
      "Tissu Tartan historique à l'intérieur",
      "Stickers Heritage latéraux",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: false,
  },

  // --- 911 GT3 90 F. A. PORSCHE ---
  {
    id: "porsche-911-gt3-90-fa-porsche",
    vedettes: false,
    name: "911 GT3 90 F. A. Porsche",
    brand: "Porsche",
    model: "911",
    year: 2026,
    price: 361700,
    description:
      "Édition spéciale Sonderwunsch ultra-exclusive (90 ex.) rendant hommage au designer historique Ferdinand Alexander Porsche.",
    images: "/vehicle/911/911_GT3_90_F._A._Porsche.png",
    type: "Coupe",
    energy: "Essence",
    transmission: "Manuelle", // Boîte manuelle de série sur l'édition
    drivetrain: "Propulsion",
    doors: 2,
    seats: 2,
    exteriorColor: "Noir / Vert Forêt (Sonderwunsch)",
    interiorColor: "Tissu Grid-Weave F.A. / Cuir",
    stats: {
      powerHP: 510,
      torqueNm: 450,
      topSpeedKmh: 313,
      acceleration0to100: 3.9,
      weightKg: 1418, // Basé sur GT3 Touring manuelle
      fuelConsumption: 13.7,
    },
    dimensions: {
      lengthMm: 4570,
      widthMm: 1852,
      heightMm: 1279,
      wheelbaseMm: 2457,
      trunkCapacityL: 132,
    },
    features: [
      "Tissu Pépita spécifique 'Grid-Weave'",
      "Basée sur la GT3 Pack Touring",
      "Horloge tableau de bord Chronographe I",
      "Badge plaqué or",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: false,
  },

  // --- TAYCAN ---
  {
    id: "porsche-taycan",
    vedettes: false,
    name: "Taycan",
    brand: "Porsche",
    model: "Taycan",
    year: 2024,
    price: 105900,
    description:
      "La berline de sport 100% électrique. Un centre de gravité très bas, une aérodynamique optimisée et les gènes inimitables de Porsche.",
    images: "/vehicle/Taycan/Taycan.png",
    type: "Sedan",
    energy: "Électrique",
    transmission: "Automatique", // Boîte 2 vitesses sur l'essieu arrière
    drivetrain: "Propulsion",
    doors: 4,
    seats: 4, // 4 ou 4+1 en option
    exteriorColor: "Gris Volcano Métallisé",
    interiorColor: "Cuir Partiel Noir",
    stats: {
      powerHP: 408, // Puissance Overboost avec Launch Control (batterie de base)
      torqueNm: 410,
      topSpeedKmh: 230,
      acceleration0to100: 4.8,
      weightKg: 2090,
      autonomyKm: 678, // WLTP Mixte (peut varier selon les options)
      batteryCapacityKWh: 89, // Batterie brute de série (105 kWh en option)
    },
    dimensions: {
      lengthMm: 4963,
      widthMm: 1966,
      heightMm: 1379,
      wheelbaseMm: 2900,
      trunkCapacityL: 407, // + 84L à l'avant
    },
    features: [
      "Architecture 800V",
      "Plug & Charge",
      "Porsche Active Aerodynamics (PAA)",
      "Suspension à ressorts en acier",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- TAYCAN SPORT TURISMO ---
  {
    id: "porsche-taycan-sport-turismo",
    vedettes: false,
    name: "Taycan Sport Turismo",
    brand: "Porsche",
    model: "Taycan",
    year: 2024,
    price: 106900,
    description:
      "Le compromis parfait. La ligne de toit du Cross Turismo offrant un vaste espace intérieur, avec les réglages routiers et la propulsion de la berline.",
    images: "/vehicle/Taycan/Taycan_Sport_Turismo.png",
    type: "Wagon",
    energy: "Électrique",
    transmission: "Automatique",
    drivetrain: "Propulsion",
    doors: 5,
    seats: 5,
    exteriorColor: "Glace Pâle Métallisé",
    interiorColor: "Noir",
    stats: {
      powerHP: 408,
      torqueNm: 410,
      topSpeedKmh: 230,
      acceleration0to100: 4.8,
      weightKg: 2160,
      autonomyKm: 650, // WLTP Mixte
      batteryCapacityKWh: 89,
    },
    dimensions: {
      lengthMm: 4963,
      widthMm: 1966,
      heightMm: 1390,
      wheelbaseMm: 2900,
      trunkCapacityL: 446, // + 84L à l'avant
    },
    features: [
      "Espace garde au toit arrière augmenté",
      "Grand hayon arrière",
      "Pré-conditionnement de la batterie",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- TAYCAN 4 CROSS TURISMO ---
  {
    id: "porsche-taycan-4-cross-turismo",
    vedettes: true,
    name: "Taycan 4 Cross Turismo",
    brand: "Porsche",
    model: "Taycan",
    year: 2024,
    price: 114400,
    description:
      "Le break baroudeur électrique de Porsche. Transmission intégrale, mode Gravel et éléments de design Offroad pour sortir des sentiers battus.",
    images: "/vehicle/Taycan/Taycan_4_Cross_Turismo.png",
    type: "Wagon",
    energy: "Électrique",
    transmission: "Automatique",
    drivetrain: "Intégrale (AWD)",
    doors: 5,
    seats: 5,
    exteriorColor: "Vert Chêne Métallisé Neo",
    interiorColor: "Noir / Craie",
    stats: {
      powerHP: 435, // Puissance Overboost
      torqueNm: 585,
      topSpeedKmh: 220,
      acceleration0to100: 4.7,
      weightKg: 2280,
      autonomyKm: 613, // WLTP Mixte
      batteryCapacityKWh: 105, // La batterie Performance Plus est de série sur les Cross Turismo
    },
    dimensions: {
      lengthMm: 4974,
      widthMm: 1967, // J'ai appliqué 1967mm comme de nombreux modèles CT avec protections d'ailes
      heightMm: 1409,
      wheelbaseMm: 2904,
      trunkCapacityL: 446, // + 84L à l'avant
    },
    features: [
      "Mode Gravel",
      "Suspension pneumatique adaptative de série",
      "Pack Design Offroad (Option)",
      "Transmission intégrale",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- PANAMERA ---
  {
    id: "porsche-panamera",
    vedettes: false,
    name: "Panamera",
    brand: "Porsche",
    model: "Panamera",
    year: 2024,
    price: 119000,
    description:
      "La berline sportive emblématique de Porsche dans sa version d'entrée de gamme. Un équilibre parfait entre confort luxueux de limousine et dynamique de conduite de voiture de sport.",
    images: "/vehicle/Panamera/Panamera.png",
    type: "Sedan",
    energy: "Essence",
    transmission: "Automatique", // Boîte PDK 8 rapports
    drivetrain: "Propulsion",
    doors: 5, // Hayon arrière
    seats: 4, // Peut-être 4+1 selon option, mais 4 de base sur les modèles luxueux
    exteriorColor: "Noir Intense Métallisé",
    interiorColor: "Cuir Noir",
    stats: {
      powerHP: 353, // V6 2.9L biturbo
      torqueNm: 500,
      topSpeedKmh: 272,
      acceleration0to100: 5.1,
      weightKg: 1885,
      fuelConsumption: 9.7, // L/100km WLTP
    },
    dimensions: {
      lengthMm: 5052,
      widthMm: 1937,
      heightMm: 1423,
      wheelbaseMm: 2950,
      trunkCapacityL: 494, // Jusqu'à 1328L banquette rabattue
    },
    features: [
      "Suspension pneumatique adaptative à deux chambres",
      "Phares Matrix LED",
      "Porsche Communication Management (PCM) 12,3 pouces",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- PANAMERA 4 E-HYBRID EXECUTIVE ---
  {
    id: "porsche-panamera-4-ehybrid-exec",
    vedettes: true,
    name: "Panamera 4 E-Hybrid Executive",
    brand: "Porsche",
    model: "Panamera",
    year: 2024,
    price: 135000, // Prix de base estimé pour l'Executive E-Hybrid en Europe
    description:
      "La version à empattement allongé. Un espace royal pour les passagers arrière, combiné à l'efficience de la technologie hybride rechargeable et la sécurité des 4 roues motrices.",
    images: "/vehicle/Panamera/Panamera_4_E-Hybrid_Executive.png",
    type: "Sedan",
    energy: "Hybride Rechargeable",
    transmission: "Automatique", // Boîte PDK 8 rapports
    drivetrain: "Intégrale (AWD)",
    doors: 5,
    seats: 4, // Souvent configurée avec console centrale arrière sur les Executive
    exteriorColor: "Gris Volcano Métallisé",
    interiorColor: "Cuir Bicolore Noir / Beige",
    stats: {
      powerHP: 470, // Puissance combinée (Moteur V6 + Électrique)
      torqueNm: 650,
      topSpeedKmh: 280,
      acceleration0to100: 4.2, // Avec Pack Sport Chrono
      weightKg: 2300,
      autonomyKm: 88, // Autonomie WLTP 100% électrique maximale (batterie 25,9 kWh)
      batteryCapacityKWh: 25.9,
      fuelConsumption: 1.4, // Consommation mixte pondérée WLTP avec batterie pleine
    },
    dimensions: {
      lengthMm: 5202, // +15 cm par rapport à la version normale
      widthMm: 1937,
      heightMm: 1425,
      wheelbaseMm: 3100, // +15 cm
      trunkCapacityL: 430, // Le volume est légèrement réduit à cause des batteries sous le plancher
    },
    features: [
      "Empattement allongé de 15 cm pour les places arrière",
      "Suspension Porsche Active Ride (Option recommandée)",
      "Sièges arrière confort avec réglage électrique et chauffage",
      "Stores pare-soleil électriques à l'arrière",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- MACAN ---
  {
    id: "porsche-macan",
    vedettes: false,
    name: "Macan",
    brand: "Porsche",
    model: "Macan",
    year: 2024,
    price: 82950,
    description:
      "Le SUV compact best-seller passe à l'ère 100% électrique. Un confort de haut vol, la dynamique de conduite typique de Porsche et une autonomie taillée pour les longs trajets.",
    images: "/vehicle/Macan/Macan.png",
    type: "SUV",
    energy: "Électrique",
    transmission: "Automatique", // Boîte à rapport unique
    drivetrain: "Propulsion", // Le modèle "Macan" de base est une pure propulsion (contrairement au Macan 4)
    doors: 5,
    seats: 5,
    exteriorColor: "Bleu Provence", // La fameuse teinte de lancement
    interiorColor: "Cuir Synthétique Noir",
    stats: {
      powerHP: 360, // Puissance Overboost avec Launch Control
      torqueNm: 563,
      topSpeedKmh: 220,
      acceleration0to100: 5.7,
      weightKg: 2220,
      autonomyKm: 641, // Autonomie WLTP très généreuse sur la version propulsion
      batteryCapacityKWh: 100, // Capacité brute
    },
    dimensions: {
      lengthMm: 4784,
      widthMm: 1938,
      heightMm: 1623,
      wheelbaseMm: 2893,
      trunkCapacityL: 540, // Et il faut y ajouter les 84L du "Frunk" sous le capot avant !
    },
    features: [
      "Architecture 800 Volts",
      "Puissance de recharge jusqu'à 270 kW (10 à 80% en 21 min)",
      "Système d'infodivertissement sous Android Automotive",
      "Coffre avant (Frunk) de 84 litres",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- CAYENNE ELECTRIC ---
  {
    id: "porsche-cayenne-electric",
    vedettes: true,
    name: "Cayenne Electric",
    brand: "Porsche",
    model: "Cayenne",
    year: 2026,
    price: 110000, // Estimation pour le futur modèle électrique
    description:
      "Le futur de l'aventure. Le Cayenne passe au 100% électrique avec une habitabilité record grâce à son nouvel empattement et des technologies de recharge ultra-rapide.",
    images: "/vehicle/Cayenne/Cayenne_Electric.png",
    type: "SUV",
    energy: "Électrique",
    transmission: "Automatique",
    drivetrain: "Intégrale (AWD)",
    doors: 5,
    seats: 5,
    exteriorColor: "Argent Dolomite Métallisé",
    interiorColor: "Cuir Club Noir",
    stats: {
      powerHP: 612, // Basé sur les projections de la plateforme PPE
      torqueNm: 1000,
      topSpeedKmh: 250,
      acceleration0to100: 3.9,
      weightKg: 2450,
      autonomyKm: 600, // Estimation WLTP
      batteryCapacityKWh: 100,
    },
    dimensions: {
      lengthMm: 4985, 
      widthMm: 1980, 
      heightMm: 1674, 
      wheelbaseMm: 3023, 
      trunkCapacityL: 650,
    },
    features: [
      "Architecture 800V haute performance",
      "Roues arrière directrices de série",
      "Porsche Active Ride",
      "Interface passager numérique",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: false, // Disponible prochainement
  },

  // --- CAYENNE ---
  {
    id: "porsche-cayenne",
    vedettes: false,
    name: "Cayenne",
    brand: "Porsche",
    model: "Cayenne",
    year: 2024,
    price: 94000,
    description:
      "Le SUV de luxe polyvalent par excellence. Puissant, dynamique et doté d'un intérieur entièrement numérique (Porsche Driver Experience).",
    images: "/vehicle/Cayenne/Cayenne.png",
    type: "SUV",
    energy: "Essence",
    transmission: "Automatique", // Tiptronic S 8 rapports
    drivetrain: "4x4",
    doors: 5,
    seats: 5,
    exteriorColor: "Bleu Algarve Métallisé",
    interiorColor: "Cuir Noir",
    stats: {
      powerHP: 353,
      torqueNm: 500,
      topSpeedKmh: 248,
      acceleration0to100: 6.0, // 5.7 avec Sport Chrono
      weightKg: 2085,
      fuelConsumption: 10.8,
    },
    dimensions: {
      lengthMm: 4930, 
      widthMm: 1983, 
      heightMm: 1679, 
      wheelbaseMm: 2895, 
      trunkCapacityL: 772,
    },
    features: [
      "Phares Matrix LED",
      "Châssis à ressorts en acier avec PASM",
      "Porsche Driver Experience",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },

  // --- CAYENNE COUPÉ ---
  {
    id: "porsche-cayenne-coupe",
    vedettes: true,
    name: "Cayenne Coupé",
    brand: "Porsche",
    model: "Cayenne",
    year: 2024,
    price: 98000,
    description:
      "Une silhouette plus athlétique et un design exclusif. Le Cayenne Coupé allie la présence d'un SUV à l'élégance d'un coupé sportif.",
    images: "/vehicle/Cayenne/Cayenne_Coupé.png",
    type: "SUV",
    energy: "Essence",
    transmission: "Automatique",
    drivetrain: "4x4",
    doors: 5,
    seats: 4, // 4 places de série sur le Coupé
    exteriorColor: "Craie",
    interiorColor: "Pack intérieur GT avec coutures contrastantes",
    stats: {
      powerHP: 353,
      torqueNm: 500,
      topSpeedKmh: 248,
      acceleration0to100: 5.7, // Sport Chrono de série sur Coupé
      weightKg: 2120,
      fuelConsumption: 11.0,
    },
    dimensions: {
      lengthMm: 4930, 
      widthMm: 1983,
      heightMm: 1659,  (plus bas que le SUV)
      wheelbaseMm: 2895, 
      trunkCapacityL: 592,
    },
    features: [
      "Aileron arrière adaptatif",
      "Toit panoramique fixe en verre",
      "Pack Sport Chrono de série",
      "Direction assistée Plus",
    ],
    condition: "Neuf",
    mileageKm: 0,
    isAvailable: true,
  },
];
