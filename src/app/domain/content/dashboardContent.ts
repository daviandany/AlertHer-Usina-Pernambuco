import type {
  ContactItem,
  DashboardMetric,
  EmergencyAction,
  ProtectionPlace,
} from "../models/content";

export const dashboardBackgroundImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA1QMxWc2oxUqf-v1i80QxHciUZC9a52bQ_FOD07-o4YIggRIEwFXKKLMalH37lQFHkpmF2OMdXdOjmMu_DpLwU1DvzQCzzSgmXFM8PIqBNcTnvMFnFAR_xbIETEdncvC6W3nInLORHk0yfOmQTjC0l1iD1XKoZtFoekERrARjg_BbVgDNtUUgyzdF-3StD2-oTMAwfTh8U80-DDIG1IugkJ-rjDr5kv_U0TitxOeHFYNKm_NUXDYz99NGsKEYZROc0mGQC8VwL26A";

export const dashboardMetrics: DashboardMetric[] = [
  { id: "trip-time", label: "Tempo de Trajeto", value: "12 min restantes" },
  { id: "battery", label: "Bateria", value: "84%" },
];

export const trustedContacts: ContactItem[] = [
  {
    id: "ana-paula",
    name: "Ana Paula",
    relation: "Mãe",
    level: "Nível 1",
    action: "Ligar",
    online: true,
  },
  {
    id: "marcos-silva",
    name: "Marcos Silva",
    relation: "Irmão",
    level: "Nível 1",
    action: "Mensagem",
    online: false,
  },
  {
    id: "bia-santos",
    name: "Bia Santos",
    relation: "Amiga",
    level: "Nível 2",
    action: "Localização",
    online: true,
  },
];

export const protectionPlaces: ProtectionPlace[] = [
  { id: "ddm", type: "Delegacia", name: "1ª Delegacia de Defesa da Mulher (DDM)", distance: "0.8 km" },
  { id: "cmb", type: "ONG", name: "Casa da Mulher Brasileira", distance: "1.5 km" },
  { id: "perola", type: "Hospital", name: "Hospital Pérola Byington", distance: "2.1 km" },
];

export const helpGuides = [
  "O que fazer ao sentir que está sendo seguida?",
  "Compartilhamento de Rota",
  "Dispositivos de Defesa",
];

export const emergencyActions: EmergencyAction[] = [
  {
    id: "call-190",
    title: "Ligar 190",
    subtitle: "Polícia Militar - Emergência Imediata",
    colorClassName: "bg-red-600",
  },
  {
    id: "call-180",
    title: "Ligar 180",
    subtitle: "Central de Atendimento à Mulher",
    colorClassName: "bg-purple-700",
  },
  {
    id: "specialist-chat",
    title: "Chat de Apoio",
    subtitle: "Converse com uma especialista agora",
    colorClassName: "bg-[#6d4e8f]",
  },
];
