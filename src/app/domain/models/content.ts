import type { LucideIcon } from "lucide-react";

export type EntityId = string;

export interface FeatureItem {
  id: EntityId;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: EntityId;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface FAQItem {
  id: EntityId;
  icon: LucideIcon;
  question: string;
  answer: string;
}

export interface ContactItem {
  id: EntityId;
  name: string;
  relation: string;
  level: string;
  action: string;
  online: boolean;
}

export interface ProtectionPlace {
  id: EntityId;
  type: string;
  name: string;
  distance: string;
}

export interface DashboardMetric {
  id: EntityId;
  label: string;
  value: string;
}

export interface EmergencyAction {
  id: EntityId;
  title: string;
  subtitle: string;
  colorClassName: string;
}
