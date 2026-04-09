import type { EmergencyAction } from "../../domain/models/content";

interface EmergencyActionCardProps {
  action: EmergencyAction;
}

export function EmergencyActionCard({ action }: EmergencyActionCardProps) {
  return (
    <button className={`rounded-2xl p-8 text-left text-white ${action.colorClassName}`}>
      <div className="text-3xl font-black">{action.title}</div>
      <div className="text-sm opacity-90">{action.subtitle}</div>
    </button>
  );
}
