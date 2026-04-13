import type {
  EmergencyContact,
  SafeLocation,
  SafetyTip,
  SupportService,
  ViolenceType,
} from "../types/safeher";

const mockEmergencyContacts: EmergencyContact[] = [
  {
    id: "pm-190",
    name: "Polícia Militar",
    phone: "190",
    description: "Atendimento policial imediato",
    icon: "Shield",
    iconColorClass: "text-blue-600",
    availability: "24 horas",
    category: "public-security",
  },
  {
    id: "mulher-180",
    name: "Central de Atendimento à Mulher",
    phone: "180",
    description: "Orientação e acolhimento para mulheres",
    icon: "PhoneCall",
    iconColorClass: "text-purple-600",
    availability: "24 horas",
    category: "women-support",
  },
  {
    id: "denuncia-181",
    name: "Disque Denúncia",
    phone: "181",
    description: "Denúncias anônimas e proteção comunitária",
    icon: "Siren",
    iconColorClass: "text-indigo-600",
    category: "public-security",
  },
  {
    id: "samu-192",
    name: "SAMU",
    phone: "192",
    description: "Emergências médicas",
    icon: "Ambulance",
    iconColorClass: "text-red-600",
    category: "health",
  },
  {
    id: "dh-100",
    name: "Direitos Humanos",
    phone: "100",
    description: "Canal nacional de denúncias",
    icon: "Scale",
    iconColorClass: "text-orange-600",
    category: "human-rights",
  },
  {
    id: "cvv-188",
    name: "CVV (Apoio emocional)",
    phone: "188",
    description: "Apoio emocional e prevenção ao suicídio",
    icon: "HeartHandshake",
    iconColorClass: "text-emerald-700",
    category: "emotional-support",
  },
];

const mockSafetyTips: SafetyTip[] = [
  {
    id: "tip-1",
    title: "Mantenha-se atenta ao redor",
    description: "Observe movimentações incomuns e evite distrações em locais de risco.",
    category: "Prevenção",
    icon: "Eye",
  },
  {
    id: "tip-2",
    title: "Compartilhe sua localização",
    description: "Envie sua localização em tempo real para alguém de confiança.",
    category: "Tecnologia",
    icon: "MapPinned",
  },
  {
    id: "tip-3",
    title: "Conheça rotas seguras",
    description: "Planeje trajetos iluminados e com circulação de pessoas.",
    category: "Navegação",
    icon: "Route",
  },
  {
    id: "tip-4",
    title: "Fortaleça sua segurança em casa",
    description: "Mantenha contatos de emergência visíveis e trancas sempre revisadas.",
    category: "Casa",
    icon: "House",
  },
  {
    id: "tip-5",
    title: "Confie em seus instintos",
    description: "Ao perceber perigo, priorize sair do local e pedir ajuda rapidamente.",
    category: "Intuição",
    icon: "ShieldAlert",
  },
];

const mockSupportServices: SupportService[] = [
  {
    id: "srv-1",
    title: "Delegacias Especializadas",
    icon: "Building2",
    type: "delegacias",
    links: [
      { id: "s1-l1", label: "Encontre a delegacia mais próxima", href: "#" },
      { id: "s1-l2", label: "Horários de atendimento", href: "#" },
    ],
  },
  {
    id: "srv-2",
    title: "Assistência Jurídica",
    icon: "Scale",
    type: "juridico",
    links: [
      { id: "s2-l1", label: "Defensoria Pública", href: "#" },
      { id: "s2-l2", label: "OAB - Assistência Gratuita", href: "#" },
    ],
  },
  {
    id: "srv-3",
    title: "Apoio Psicológico",
    icon: "HeartPulse",
    type: "psicologico",
    links: [
      { id: "s3-l1", label: "CAPS", href: "#" },
      { id: "s3-l2", label: "CVV", href: "#" },
    ],
  },
  {
    id: "srv-4",
    title: "Casas de Abrigo",
    icon: "Home",
    type: "abrigos",
    links: [
      { id: "s4-l1", label: "Informações sobre abrigos", href: "#" },
      { id: "s4-l2", label: "Como solicitar acolhimento", href: "#" },
    ],
  },
  {
    id: "srv-5",
    title: "Cursos e Workshops",
    icon: "BookOpenCheck",
    type: "cursos",
    links: [{ id: "s5-l1", label: "Cursos de autodefesa", href: "#" }],
  },
];

const mockViolenceTypes: ViolenceType[] = [
  { id: "v-1", name: "Física", description: "Qualquer ação que cause dor ou lesão corporal." },
  {
    id: "v-2",
    name: "Psicológica",
    description: "Ameaças, humilhações, manipulação e controle emocional.",
  },
  { id: "v-3", name: "Sexual", description: "Imposição de atos sexuais sem consentimento." },
  {
    id: "v-4",
    name: "Patrimonial",
    description: "Retenção, destruição ou controle de documentos e bens.",
  },
  {
    id: "v-5",
    name: "Moral",
    description: "Calúnia, difamação e injúria com objetivo de descredibilizar.",
  },
];

const mockLocations: SafeLocation[] = [
  {
    id: "loc-1",
    name: "Delegacia da Mulher - Centro",
    type: "delegacia",
    address: "Av. Central, 250 - Centro",
    phone: "(81) 4002-1900",
    openHours: "Seg-Sex: 8h-18h",
    rating: 4.5,
    distanceKm: 1.5,
  },
  {
    id: "loc-2",
    name: "Centro de Referência da Mulher Boa Vista",
    type: "centro-apoio",
    address: "Rua das Flores, 89 - Boa Vista",
    phone: "(81) 3210-0180",
    openHours: "Seg-Sex: 8h-17h",
    rating: 4.8,
    distanceKm: 2.1,
  },
  {
    id: "loc-3",
    name: "Casa de Abrigo Esperança",
    type: "abrigo",
    address: "Endereço sigiloso - suporte via central",
    phone: "(81) 3333-2222",
    openHours: "24 horas",
    rating: 4.7,
    distanceKm: 3.4,
  },
  {
    id: "loc-4",
    name: "Núcleo Jurídico Popular",
    type: "assistencia-juridica",
    address: "R. Aurora, 522 - Santo Amaro",
    phone: "(81) 2121-1000",
    openHours: "Seg-Sex: 9h-17h",
    rating: 4.4,
    distanceKm: 2.9,
  },
];

const simulate = <T>(data: T): Promise<T> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(data), 200);
  });

export const supabaseService = {
  getEmergencyContacts: async (): Promise<EmergencyContact[]> =>
    simulate(mockEmergencyContacts),
  getSafetyTips: async (): Promise<SafetyTip[]> => simulate(mockSafetyTips),
  getSupportServices: async (): Promise<SupportService[]> => simulate(mockSupportServices),
  getViolenceTypes: async (): Promise<ViolenceType[]> => simulate(mockViolenceTypes),
  getSafeLocations: async (): Promise<SafeLocation[]> => simulate(mockLocations),
};
