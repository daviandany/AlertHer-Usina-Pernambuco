import { HeroSection } from "./HeroSection";
import { FeaturesSection } from "./FeaturesSection";
import { AdditionalFeatures } from "./AdditionalFeatures";
import { TestimonialsSection } from "./TestimonialsSection";
import { CTASection } from "./CTASection";

export function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AdditionalFeatures />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
