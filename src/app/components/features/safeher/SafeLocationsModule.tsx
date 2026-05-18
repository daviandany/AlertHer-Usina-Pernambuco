import { useMemo, useState } from "react";
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
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);

  const activeLocation = useMemo(() => {
    if (locations.length === 0) return null;

    return locations.find((location) => location.id === activeLocationId) ?? locations[0];
  }, [activeLocationId, locations]);

  const mapSrc = useMemo(() => {
    if (!activeLocation) return "";

    const delta = 0.015;
    const left = activeLocation.longitude - delta;
    const right = activeLocation.longitude + delta;
    const top = activeLocation.latitude + delta;
    const bottom = activeLocation.latitude - delta;
    const marker = `${activeLocation.latitude},${activeLocation.longitude}`;
    const bbox = `${left},${bottom},${right},${top}`;

    return `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(
      bbox,
    )}&layer=mapnik&marker=${encodeURIComponent(marker)}`;
  }, [activeLocation]);

  const handleUseMyLocation = () => {
    if (!("geolocation" in navigator)) return;

    navigator.geolocation.getCurrentPosition((position) => {
      const nearestLocation = locations.reduce<SafeLocation | null>((nearest, current) => {
        if (!nearest) return current;

        const nearestDistance =
          (nearest.latitude - position.coords.latitude) ** 2 +
          (nearest.longitude - position.coords.longitude) ** 2;
        const currentDistance =
          (current.latitude - position.coords.latitude) ** 2 +
          (current.longitude - position.coords.longitude) ** 2;

        return currentDistance < nearestDistance ? current : nearest;
      }, null);

      if (nearestLocation) {
        setActiveLocationId(nearestLocation.id);
      }
    });
  };

  return (
    <section className="space-y-6">
      <article className="relative overflow-hidden rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 to-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">Mapa Interativo</h3>
          <button
            onClick={handleUseMyLocation}
            className="flex items-center gap-2 rounded-full bg-purple-700 px-4 py-2 text-sm font-semibold text-white"
          >
            <LocateFixed className="h-4 w-4" />
            Usar minha localização
          </button>
        </div>
        {mapSrc ? (
          <div className="overflow-hidden rounded-2xl border border-purple-200 bg-white">
            <iframe
              title="Mapa de locais seguros"
              src={mapSrc}
              className="h-56 w-full"
              loading="lazy"
            />
          </div>
        ) : null}
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
                <a
                  onClick={() => setActiveLocationId(location.id)}
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    `${location.latitude},${location.longitude}`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-purple-700 px-3 py-2 text-sm font-medium text-white"
                >
                  <Navigation className="h-4 w-4" />
                  Ir para o local
                </a>
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
