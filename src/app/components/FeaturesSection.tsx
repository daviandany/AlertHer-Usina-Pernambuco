import { Shield, MapPin, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Alertas de Emergência",
    description: "Envie alertas instantâneos para seus contatos de confiança",
  },
  {
    icon: MapPin,
    title: "Compartilhamento de Localização em Tempo Real",
    description: "Compartilhe sua localização com quem você confia",
  },
  {
    icon: Lightbulb,
    title: "Dicas de Segurança",
    description: "Acesse dicas e recursos para se manter segura",
  },
];

export function FeaturesSection() {
  return (
    <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100"
              >
                <div className="bg-purple-100 rounded-2xl p-4 w-fit mb-4">
                  <Icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
