import { EmergencyModule } from "./features/safeher/EmergencyModule";

export function EmergencyPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6">
      <h1 className="mb-4 text-2xl font-bold text-slate-800">Painel de Emergência</h1>
      <EmergencyModule />
    </div>
  );
}
