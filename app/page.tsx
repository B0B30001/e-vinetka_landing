import { HeroSection } from "@/components/sections/HeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AddonsSection } from "@/components/sections/AddonsSection";
import { LeadFormSection } from "@/components/sections/LeadFormSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { LegalSection } from "@/components/sections/LegalSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <PartnersSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <PricingSection />
      <BenefitsSection />
      <AddonsSection />
      <LeadFormSection />
      <FaqSection />
      <LegalSection />
      <FinalCtaSection />
      <Footer />
    </>
  );
}
