import {
  emergencyActions,
  helpGuides,
} from "../domain/content/dashboardContent";
import { EmergencyActionCard } from "./common/EmergencyActionCard";

export function HelpCenterPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32">
      <header className="mb-10">
        <h1 className="mb-3 text-4xl font-black">Central de Ajuda</h1>
        <p className="max-w-2xl text-slate-600">
          Você não está sozinha. Acesse recursos de emergência imediatos ou aprenda a agir em situações de risco.
        </p>
      </header>

      <div className="mb-10 grid gap-6 md:grid-cols-3">
        {emergencyActions.map((action) => (
          <EmergencyActionCard key={action.id} action={action} />
        ))}
      </div>

      <h2 className="mb-4 text-2xl font-bold">Guias de Ação</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {helpGuides.map((guide) => (
          <article key={guide} className="rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="font-bold">{guide}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
