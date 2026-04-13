export type EmergencyContactCategory =
  | "public-security"
  | "women-support"
  | "health"
  | "human-rights"
  | "emotional-support";

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  description: string;
  icon: string;
  iconColorClass: string;
  availability?: string;
  category: EmergencyContactCategory;
}

export type SafetyTipCategory = "Prevenção" | "Tecnologia" | "Navegação" | "Casa" | "Intuição";

export interface SafetyTip {
  id: string;
  title: string;
  description: string;
  category: SafetyTipCategory;
  icon: string;
}

export type SupportServiceType =
  | "delegacias"
  | "juridico"
  | "psicologico"
  | "abrigos"
  | "cursos";

export interface SupportService {
  id: string;
  title: string;
  icon: string;
  links: Array<{
    id: string;
    label: string;
    href: string;
  }>;
  type: SupportServiceType;
}

export interface ViolenceType {
  id: string;
  name: string;
  description: string;
}

export type SafeLocationType = "delegacia" | "centro-apoio" | "abrigo" | "assistencia-juridica";

export interface SafeLocation {
  id: string;
  name: string;
  type: SafeLocationType;
  address: string;
  phone: string;
  openHours: string;
  rating: number;
  distanceKm: number;
}
