import { SafetyTipsModule } from "./features/safeher/SafetyTipsModule";

export function SafetyTipsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-slate-800">Dicas de Segurança</h1>
        <p className="mt-1 text-sm text-slate-600">Conteúdo pensado para te ajudar a agir com mais confiança no dia a dia.</p>
      </div>
      <SafetyTipsModule />
    </div>
  );
}
