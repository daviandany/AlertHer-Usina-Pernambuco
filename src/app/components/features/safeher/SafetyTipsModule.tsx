import { useSafetyTips } from "../../../hooks/useSafetyTips";
import { IconByName } from "./iconMap";

export function SafetyTipsModule() {
  const { tips } = useSafetyTips();

  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {tips.map((tip) => (
        <article key={tip.id} className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-start justify-between">
            <div className="rounded-xl bg-purple-100 p-2 text-purple-700">
              <IconByName name={tip.icon} className="h-5 w-5" />
            </div>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
              {tip.category}
            </span>
          </div>
          <h3 className="mb-2 text-lg font-semibold text-slate-800">{tip.title}</h3>
          <p className="text-sm text-slate-600">{tip.description}</p>
        </article>
      ))}
    </section>
  );
}
