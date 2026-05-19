import { useMemo, useState } from "react";
import { useSafetyTips } from "../../../hooks/useSafetyTips";
import { IconByName } from "./iconMap";

export function SafetyTipsModule() {
  const { tips } = useSafetyTips();
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(tips.map((tip) => tip.category)));
    return ["Todas", ...uniqueCategories];
  }, [tips]);

  const filteredTips = useMemo(() => {
    return tips.filter((tip) => {
      const categoryMatch = selectedCategory === "Todas" || tip.category === selectedCategory;
      const queryMatch =
        query.trim().length === 0 ||
        tip.title.toLowerCase().includes(query.toLowerCase()) ||
        tip.description.toLowerCase().includes(query.toLowerCase());

      return categoryMatch && queryMatch;
    });
  }, [tips, query, selectedCategory]);

  return (
    <section className="space-y-6">
      <div className="overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-br from-white via-purple-50 to-fuchsia-50 p-5 shadow-sm md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Se organize para se proteger melhor</h2>
            <p className="mt-1 text-sm text-slate-600">Filtre por categoria e encontre dicas práticas para diferentes situações.</p>
          </div>
          <div className="w-full md:max-w-xs">
            <label htmlFor="tip-search" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Buscar dica
            </label>
            <input
              id="tip-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Ex.: transporte, casa, celular..."
              className="w-full rounded-xl border border-purple-200 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                  isActive
                    ? "bg-purple-600 text-white shadow"
                    : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-purple-50 hover:text-purple-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {filteredTips.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="text-sm font-medium text-slate-700">Nenhuma dica encontrada para essa busca.</p>
          <p className="mt-1 text-xs text-slate-500">Tente limpar os filtros ou usar outras palavras-chave.</p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredTips.map((tip) => (
            <article
              key={tip.id}
              className="group rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md"
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <div className="rounded-xl bg-purple-100 p-2 text-purple-700 transition group-hover:bg-purple-600 group-hover:text-white">
                  <IconByName name={tip.icon} className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">{tip.category}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-800">{tip.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{tip.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
