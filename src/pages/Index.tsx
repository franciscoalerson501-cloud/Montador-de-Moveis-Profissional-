
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PricingSection from '@/components/PricingSection';
import ProblemsDarkSection from '@/components/ProblemsDarkSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ClientesSection from '@/components/ClientesSection';
import RegionsCoverageSection from '@/components/RegionsCoverageSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <PricingSection />
      <ProblemsDarkSection />
      <WhyChooseSection />
      <ClientesSection />
      <RegionsCoverageSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
