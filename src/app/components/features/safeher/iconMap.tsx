import {
  Ambulance,
  BookOpenCheck,
  Building2,
  Eye,
  ExternalLink,
  HeartHandshake,
  HeartPulse,
  Home,
  House,
  MapPinned,
  PhoneCall,
  Route,
  Scale,
  Shield,
  ShieldAlert,
  Siren,
  type LucideProps,
} from "lucide-react";

const iconMap = {
  Ambulance,
  BookOpenCheck,
  Building2,
  Eye,
  ExternalLink,
  HeartHandshake,
  HeartPulse,
  Home,
  House,
  MapPinned,
  PhoneCall,
  Route,
  Scale,
  Shield,
  ShieldAlert,
  Siren,
};

interface IconByNameProps extends LucideProps {
  name: string;
}

export function IconByName({ name, ...props }: IconByNameProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap] ?? Shield;
  return <IconComponent {...props} />;
}
