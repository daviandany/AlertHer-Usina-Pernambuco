import { Bell, Users, Phone, Lock } from "lucide-react";

const additionalFeatures = [
  {
    icon: Bell,
    title: "Notificações Inteligentes",
    description: "Receba alertas personalizados baseados em sua localização e horário",
  },
  {
    icon: Users,
    title: "Rede de Apoio",
    description: "Conecte-se com uma comunidade de mulheres que se apoiam mutuamente",
  },
  {
    icon: Phone,
    title: "Linha Direta 24/7",
    description: "Acesso a suporte e orientação sempre que você precisar",
  },
  {
    icon: Lock,
    title: "Privacidade Garantida",
    description: "Seus dados são criptografados e mantidos em total sigilo",
  },
];

export function AdditionalFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Recursos Adicionais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para se sentir segura e confiante, 
            onde quer que esteja
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <div className="relative bg-white rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all duration-300">
                  <div className="bg-purple-100 rounded-xl p-3 w-fit mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
