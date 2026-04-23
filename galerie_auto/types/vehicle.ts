// Types utilitaires pour restreindre les valeurs possibles (exemples)
export type VehicleType =
  | "SUV"
  | "Coupe"
  | "Sedan"
  | "Hatchback"
  | "Convertible"
  | "Wagon"
  | "Supercar";
export type EnergyType =
  | "Électrique"
  | "Essence"
  | "Diesel"
  | "Hybride"
  | "Hybride Rechargeable";
export type Transmission = "Automatique" | "Manuelle";
export type Drivetrain = "Traction" | "Propulsion" | "Intégrale (AWD)" | "4x4";
export type Condition = "Neuf" | "Occasion";

// --- SOUS-INTERFACES ---

export interface VehicleStats {
  powerHP: number; // Puissance en chevaux (ch)
  torqueNm: number; // Couple en Newton-mètre (Nm)
  topSpeedKmh: number; // Vitesse maximale (km/h)
  acceleration0to100: number; // 0 à 100 km/h en secondes
  weightKg: number; // Poids à vide (kg)

  // Spécifiques selon le type d'énergie (optionnels)
  autonomyKm?: number; // Autonomie (pour électrique/hybride)
  batteryCapacityKWh?: number; // Capacité de la batterie (électrique)
  fuelConsumption?: number; // Consommation mixte L/100km (thermique)
}

export interface VehicleDimensions {
  lengthMm: number; // Longueur en mm
  widthMm: number; // Largeur en mm
  heightMm: number; // Hauteur en mm
  wheelbaseMm: number; // Empattement (distance entre les roues)
  trunkCapacityL: number; // Volume du coffre en litres
}

// --- INTERFACE PRINCIPALE ---

export interface Vehicle {
  id: string | number; // 'string' est souvent préférable si tu utilises des UUID
  vedettes: boolean; // Indique si le véhicule est mis en avant
  name: string; // Ex: "911 GT3 RS"
  brand: string; // Ex: "Porsche"
  model: string; // Pratique pour le tri/recherche
  year: number;
  price: number;
  description: string;

  // Médias
  images: string;

  // Caractéristiques générales
  type: VehicleType;
  energy: EnergyType;
  transmission: Transmission;
  drivetrain: Drivetrain;

  // Détails pratiques
  doors: number; // Nombre de portes
  seats: number; // Nombre de places assises
  exteriorColor: string;
  interiorColor: string;

  // Regroupements techniques
  stats: VehicleStats;
  dimensions: VehicleDimensions;

  // Équipements et options
  features: string[]; // Ex: ["Sièges chauffants", "Toit carbone", "Apple CarPlay"]

  // Statut de vente
  condition: Condition;
  mileageKm: number; // 0 si neuf, ou le kilométrage actuel
  isAvailable: boolean; // En stock ou vendu
}
