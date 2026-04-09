import { faqBadge, faqItems } from "../domain/content/homeContent";
import { SectionHeader } from "./common/SectionHeader";

export function FAQSection() {
  const BadgeIcon = faqBadge.icon;

  return (
    <section id="ajuda" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          className="mb-12"
          title="Perguntas Frequentes sobre Proteção e Prevenção"
          description="Tire dúvidas sobre como o SafeHer ajuda mulheres a se proteger, prevenir riscos e agir com rapidez em situações de emergência."
          badge={
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
              <BadgeIcon className="w-4 h-4" />
              {faqBadge.label}
            </div>
          }
        />

        <div className="space-y-4">
          {faqItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.id} className="bg-white border border-purple-100 rounded-2xl p-6 shadow-sm">
                <h3 className="flex items-start gap-3 text-lg font-semibold text-gray-900 mb-2">
                  <span className="bg-purple-100 text-purple-600 rounded-lg p-2 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </span>
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-12">{item.answer}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
