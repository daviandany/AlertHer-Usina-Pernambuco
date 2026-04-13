import { useEffect, useMemo, useState } from "react";
import { BellRing, MapPin, ShieldCheck, Siren, Timer, UserCheck } from "lucide-react";

const demoSteps = [
  {
    id: "alerta",
    title: "1. Alerta rápido em 1 clique",
    short: "Botão SOS",
    description:
      "Ao perceber risco, a usuária aciona o botão SOS e a central recebe localização, nível de urgência e dados essenciais em segundos.",
    icon: BellRing,
    color: "from-fuchsia-500 to-purple-600",
    eta: "00:05s",
    status: "Sinal enviado",
  },
  {
    id: "localizacao",
    title: "2. Rastreamento inteligente",
    short: "Localização ativa",
    description:
      "A SafeHer atualiza rota em tempo real e identifica movimentações suspeitas para apoiar ações preventivas da equipe.",
    icon: MapPin,
    color: "from-sky-500 to-indigo-600",
    eta: "00:12s",
    status: "Rota monitorada",
  },
  {
    id: "resposta",
    title: "3. Resposta coordenada",
    short: "Rede de apoio",
    description:
      "Responsáveis e equipe de suporte recebem o alerta com instruções claras, reduzindo o tempo de reação em situações críticas.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-600",
    eta: "00:20s",
    status: "Apoio acionado",
  },
] as const;

export function InteractivePreviewSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % demoSteps.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [isAutoPlaying]);

  const currentStep = demoSteps[activeStep];
  const completion = useMemo(() => ((activeStep + 1) / demoSteps.length) * 100, [activeStep]);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="inline-flex items-center rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-700 mb-4">
            Pré-demonstração interativa
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Veja como a SafeHer protege você em tempo real
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore o fluxo completo da solução: do pedido de ajuda ao acionamento da rede de apoio.
            Simples de entender, rápido de agir e pensado para o público feminino.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="space-y-4">
            {demoSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;

              return (
                <button
                  key={step.id}
                  type="button"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onFocus={() => setIsAutoPlaying(false)}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left rounded-3xl border p-6 transition-all duration-300 ${
                    isActive
                      ? "border-purple-300 bg-white shadow-xl shadow-purple-100/80 scale-[1.01]"
                      : "border-purple-100 bg-white/80 hover:border-purple-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`rounded-2xl p-3 text-white bg-gradient-to-br ${step.color} ${
                        isActive ? "shadow-lg" : "opacity-85"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                        <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                          {step.eta}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-2 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative rounded-3xl border border-purple-200 bg-white p-6 sm:p-8 shadow-2xl shadow-purple-100/70 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-70">
              <div className={`absolute -top-24 -right-20 h-56 w-56 rounded-full blur-3xl bg-gradient-to-br ${currentStep.color}`} />
              <div className="absolute -bottom-16 -left-14 h-44 w-44 rounded-full blur-3xl bg-purple-200" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-gray-500">Painel de Operações SafeHer</span>
                <button
                  type="button"
                  onClick={() => setIsAutoPlaying((value) => !value)}
                  className="text-sm font-semibold text-purple-700 hover:text-purple-800"
                >
                  {isAutoPlaying ? "Pausar animação" : "Reproduzir animação"}
                </button>
              </div>

              <div className="rounded-2xl border border-white/60 bg-white/80 backdrop-blur p-5 mb-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-gray-500">Etapa ativa</p>
                  <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
                    {currentStep.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentStep.short}</h3>
                <p className="text-gray-600">{currentStep.description}</p>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Central", value: "Online", icon: Siren },
                  { label: "Tempo médio", value: "< 30s", icon: Timer },
                  { label: "Apoio", value: "Confirmado", icon: UserCheck },
                ].map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl bg-gray-50 border border-gray-100 p-3">
                      <ItemIcon className="w-4 h-4 text-purple-600 mb-2" />
                      <p className="text-xs text-gray-500">{item.label}</p>
                      <p className="font-semibold text-gray-900 text-sm">{item.value}</p>
                    </div>
                  );
                })}
              </div>

              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>Progresso da simulação</span>
                  <span>{Math.round(completion)}%</span>
                </div>
                <div className="h-2 rounded-full bg-purple-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${currentStep.color} transition-all duration-700`}
                    style={{ width: `${completion}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
