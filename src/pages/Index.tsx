import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import PricingSection from "@/components/PricingSection";
import { SurveySection } from "@/components/SurveySection";
import { VisitorsSection } from "@/components/VisitorsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { LanguageSelector } from "@/components/LanguageSelector";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LanguageSelector />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <PricingSection />
      <SurveySection />
      <VisitorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
