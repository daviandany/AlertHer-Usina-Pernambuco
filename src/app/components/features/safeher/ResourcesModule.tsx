import { ExternalLink } from "lucide-react";
import { useSupportResources } from "../../../hooks/useSupportResources";
import { IconByName } from "./iconMap";

export function ResourcesModule() {
  const { services, violenceTypes } = useSupportResources();

  return (
    <section className="space-y-6">
      <article className="rounded-3xl bg-purple-700 p-6 text-white shadow-md">
        <h3 className="mb-2 text-xl font-bold">Lei Maria da Penha (Lei 11.340/2006)</h3>
        <p className="text-sm text-purple-100">
          Violência contra a mulher não é apenas física. A lei protege contra violência psicológica,
          moral, sexual e patrimonial.
        </p>
      </article>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.id} className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-purple-700">
              <IconByName name={service.icon} className="h-5 w-5" />
              <h3 className="font-semibold text-slate-800">{service.title}</h3>
            </div>
            <ul className="space-y-2">
              {service.links.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="flex items-center gap-2 text-sm text-slate-600 hover:text-purple-700">
                    <ExternalLink className="h-4 w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold text-slate-800">Tipos de Violência</h3>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {violenceTypes.map((item) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <h4 className="font-semibold text-purple-800">{item.name}</h4>
              <p className="mt-1 text-sm text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
