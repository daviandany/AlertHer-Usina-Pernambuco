import { Shield } from "lucide-react";
import { NavLink, Outlet } from "react-router";

const navItems = [
  { to: "/app/emergencia", label: "Emergência" },
  { to: "/app/dicas", label: "Dicas" },
  { to: "/app/recursos", label: "Recursos" },
  { to: "/app/locais", label: "Locais Seguros" },
];

export function SafeHerAppLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff,_#f4f2ff_45%,_#eef2ff)] font-sans text-slate-900">
      <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-purple-100 bg-white/90 px-4 py-3 backdrop-blur md:px-6">
        <div className="flex items-center gap-2 text-purple-700">
          <span className="rounded-xl bg-purple-100 p-2">
            <Shield className="h-5 w-5" />
          </span>
          <strong className="text-xl">SafeHer</strong>
        </div>
        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? "bg-purple-700 text-white" : "text-slate-600 hover:bg-purple-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="pb-24 pt-20 md:pt-24">
        <Outlet />
      </main>

      <footer className="fixed bottom-0 left-0 z-50 flex w-full justify-around border-t border-purple-100 bg-white/90 px-3 py-2 backdrop-blur md:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `rounded-xl px-2 py-1 text-[11px] font-semibold ${
                isActive ? "bg-purple-100 text-purple-700" : "text-slate-500"
              }`
            }
          >
            {item.label.split(" ")[0]}
          </NavLink>
        ))}
      </footer>
    </div>
  );
}
