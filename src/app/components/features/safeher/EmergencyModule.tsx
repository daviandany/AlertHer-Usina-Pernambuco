import { AlertTriangle, Phone } from "lucide-react";
import { useEmergencyContacts } from "../../../hooks/useEmergencyContacts";
import { IconByName } from "./iconMap";

export function EmergencyModule() {
  const { contacts } = useEmergencyContacts();

  return (
    <section className="space-y-8">
      <div className="rounded-3xl bg-white p-6 shadow-md">
        <div className="mx-auto flex max-w-sm flex-col items-center gap-4 text-center">
          <div className="relative">
            <span className="absolute inset-0 animate-ping rounded-full bg-red-500/40" />
            <button className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white shadow-xl">
              <span className="flex flex-col items-center text-center">
                <AlertTriangle className="mb-2 h-10 w-10" />
                <strong className="text-3xl">SOS</strong>
                <span className="text-xs font-semibold uppercase tracking-wide">Toque para ajuda</span>
              </span>
            </button>
          </div>
          <p className="text-sm text-slate-600">Ação rápida para iniciar seu protocolo de emergência.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {contacts.map((contact) => (
          <article
            key={contact.id}
            className="flex items-center justify-between gap-4 rounded-2xl border border-purple-100 bg-white p-4 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className={`rounded-xl bg-slate-100 p-2 ${contact.iconColorClass}`}>
                <IconByName name={contact.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-800">{contact.name}</h3>
                <p className="text-sm text-slate-600">{contact.phone}</p>
                <p className="text-xs text-slate-500">{contact.description}</p>
                {contact.availability ? (
                  <span className="mt-1 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                    {contact.availability}
                  </span>
                ) : null}
              </div>
            </div>
            <a
              href={`tel:${contact.phone.replace(/\D/g, "")}`}
              className="flex items-center gap-2 rounded-xl bg-purple-700 px-3 py-2 text-sm font-medium text-white hover:bg-purple-800"
            >
              <Phone className="h-4 w-4" />
              Ligar
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
