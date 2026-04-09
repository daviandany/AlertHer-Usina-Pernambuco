import {
  Bell,
  BellRing,
  HelpCircle,
  Lightbulb,
  Lock,
  LockKeyhole,
  MapPin,
  MapPinned,
  Phone,
  PhoneCall,
  Shield,
  ShieldAlert,
  Users,
} from "lucide-react";
import type { FAQItem, FeatureItem, TestimonialItem } from "../models/content";

export const homeFeatures: FeatureItem[] = [
  {
    id: "emergency-alerts",
    icon: Shield,
    title: "Alertas de Emergência",
    description: "Envie alertas instantâneos para seus contatos de confiança",
  },
  {
    id: "live-location",
    icon: MapPin,
    title: "Compartilhamento de Localização em Tempo Real",
    description: "Compartilhe sua localização com quem você confia",
  },
  {
    id: "safety-tips",
    icon: Lightbulb,
    title: "Dicas de Segurança",
    description: "Acesse dicas e recursos para se manter segura",
  },
];

export const additionalFeatures: FeatureItem[] = [
  {
    id: "smart-notifications",
    icon: Bell,
    title: "Notificações Inteligentes",
    description: "Receba alertas personalizados baseados em sua localização e horário",
  },
  {
    id: "support-network",
    icon: Users,
    title: "Rede de Apoio",
    description: "Conecte-se com uma comunidade de mulheres que se apoiam mutuamente",
  },
  {
    id: "hotline",
    icon: Phone,
    title: "Linha Direta 24/7",
    description: "Acesso a suporte e orientação sempre que você precisar",
  },
  {
    id: "privacy",
    icon: Lock,
    title: "Privacidade Garantida",
    description: "Seus dados são criptografados e mantidos em total sigilo",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "ana-silva",
    name: "Ana Silva",
    role: "Estudante",
    content:
      "O SafeHer mudou completamente como me sinto ao sair sozinha à noite. Saber que posso alertar minha família instantaneamente me dá tanta paz de espírito.",
    image:
      "https://images.unsplash.com/photo-1739300293361-d1b503281902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwcG9ydHJhaXQlMjBjb25maWRlbnR8ZW58MXx8fHwxNzc1NjcyNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
  },
  {
    id: "maria-santos",
    name: "Maria Santos",
    role: "Profissional",
    content:
      "Adoro as dicas de segurança personalizadas. O app realmente entende minhas necessidades e rotina. Recomendo para todas as mulheres!",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBicnVuZXR0ZXxlbnwxfHx8fDE3NzU2NzI1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
  },
  {
    id: "carla-oliveira",
    name: "Carla Oliveira",
    role: "Empreendedora",
    content:
      "A rede de apoio é incrível! Me sinto parte de uma comunidade que se importa. O SafeHer não é apenas um app, é uma família.",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVtcG93ZXJtZW50JTIwc21pbGUlMjBsYXRpbmF8ZW58MXx8fHwxNzc1NjcyNTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
  },
];

export const faqBadge = {
  icon: HelpCircle,
  label: "FAQ SafeHer",
};

export const faqItems: FAQItem[] = [
  {
    id: "faq-emergency",
    icon: ShieldAlert,
    question: "Como funcionam os alertas de emergência do SafeHer?",
    answer:
      "Ao acionar o botão de emergência, o sistema envia imediatamente uma notificação para seus contatos de confiança com sua identificação e um aviso de risco para agilizar o apoio.",
  },
  {
    id: "faq-location",
    icon: MapPinned,
    question: "Posso compartilhar minha localização em tempo real com pessoas específicas?",
    answer:
      "Sim. Você escolhe quem recebe sua localização e por quanto tempo o compartilhamento fica ativo, mantendo o controle total sobre suas informações.",
  },
  {
    id: "faq-notifications",
    icon: BellRing,
    question: "O que são as notificações inteligentes de prevenção?",
    answer:
      "São alertas preventivos baseados no seu contexto, como horário e região, para ajudar você a antecipar riscos e tomar decisões mais seguras no dia a dia.",
  },
  {
    id: "faq-support",
    icon: PhoneCall,
    question: "Existe suporte em situações de urgência?",
    answer:
      "Sim. O SafeHer oferece canal de suporte 24/7 para orientação em momentos críticos, além de recursos para acionar rapidamente sua rede de apoio.",
  },
  {
    id: "faq-privacy",
    icon: LockKeyhole,
    question: "Como o SafeHer protege meus dados pessoais?",
    answer:
      "Os dados são protegidos com criptografia e políticas de privacidade alinhadas à LGPD, com acesso restrito e foco em sigilo e segurança das usuárias.",
  },
];
