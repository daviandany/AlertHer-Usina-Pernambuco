import { ResourcesModule } from "./features/safeher/ResourcesModule";

export function ResourcesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6">
      <h1 className="mb-4 text-2xl font-bold text-slate-800">Recursos e Apoio</h1>
      <ResourcesModule />
    </div>
  );
}
