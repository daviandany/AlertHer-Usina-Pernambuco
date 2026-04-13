import { SafetyTipsModule } from "./features/safeher/SafetyTipsModule";

export function SafetyTipsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6">
      <h1 className="mb-4 text-2xl font-bold text-slate-800">Dicas de Segurança</h1>
      <SafetyTipsModule />
    </div>
  );
}
