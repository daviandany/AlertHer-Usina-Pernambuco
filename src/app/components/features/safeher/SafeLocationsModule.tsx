import { LocateFixed, MapPin, Navigation, Phone, Search, Star } from "lucide-react";
import { useLocations, type LocationFilter } from "../../../hooks/useLocations";
import type { SafeLocation } from "../../../types/safeher";

const filters: Array<{ label: string; value: LocationFilter }> = [
  { label: "Todos", value: "todos" },
  { label: "Delegacias", value: "delegacia" },
  { label: "Centros de Apoio", value: "centro-apoio" },
  { label: "Abrigos", value: "abrigo" },
  { label: "Assistência Jurídica", value: "assistencia-juridica" },
];

const iconColorByType: Record<SafeLocation["type"], string> = {
  delegacia: "text-blue-600",
  "centro-apoio": "text-purple-600",
  abrigo: "text-emerald-600",
  "assistencia-juridica": "text-orange-600",
};

export function SafeLocationsModule() {
  const { locations, query, setQuery, filter, setFilter } = useLocations();

  return (
    <section className="space-y-6">
      <article className="relative overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">Mapa Interativo</h3>
          <button className="flex items-center gap-2 rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white">
            <LocateFixed className="h-4 w-4" />
            Usar minha localização
          </button>
        </div>
        <div className="relative h-56 rounded-2xl bg-white/80 p-2">
          <div className="absolute left-[14%] top-[25%] text-purple-700"><MapPin /></div>
          <div className="absolute left-[62%] top-[20%] text-purple-700"><MapPin /></div>
          <div className="absolute left-[35%] top-[62%] text-purple-700"><MapPin /></div>
          <div className="absolute left-[75%] top-[68%] text-purple-700"><MapPin /></div>
          <div className="absolute inset-0 rounded-2xl border border-dashed border-purple-200" />
        </div>
      </article>

      <div className="space-y-4">
        <label className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Buscar local..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                filter === item.value
                  ? "bg-purple-700 text-white"
                  : "border border-slate-200 bg-white text-slate-700"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {locations.map((location) => (
          <article
            key={location.id}
            className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-3">
                <div className={`mt-1 rounded-xl bg-slate-100 p-2 ${iconColorByType[location.type]}`}>
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{location.name}</h3>
                  <p className="text-sm text-slate-600">{location.address}</p>
                  <p className="text-sm text-slate-600">{location.phone}</p>
                  <p className="text-sm text-slate-600">{location.openHours}</p>
                  <p className="mt-1 flex items-center gap-1 text-sm text-slate-700">
                    <Star className="h-4 w-4 fill-current text-yellow-500" />
                    {location.rating.toFixed(1)}/5.0
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <button className="flex items-center gap-2 rounded-xl bg-purple-700 px-3 py-2 text-sm font-medium text-white">
                  <Navigation className="h-4 w-4" />
                  Ir para o local
                </button>
                <a
                  href={`tel:${location.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-2 rounded-xl border border-purple-300 px-3 py-2 text-sm font-medium text-purple-700"
                >
                  <Phone className="h-4 w-4" />
                  Ligar
                </a>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                  {location.distanceKm.toFixed(1)} km
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
