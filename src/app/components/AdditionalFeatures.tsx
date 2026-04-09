import { additionalFeatures } from "../domain/content/homeContent";
import { SectionHeader } from "./common/SectionHeader";

export function AdditionalFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          className="mb-16"
          title="Recursos Adicionais"
          description="Tudo que você precisa para se sentir segura e confiante, onde quer que esteja"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.id} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                <div className="relative bg-white rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all duration-300">
                  <div className="bg-purple-100 rounded-xl p-3 w-fit mb-4">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
