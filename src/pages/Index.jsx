import HeroSection from "@/components/landing/HeroSection";
import TopAlumniSection from "@/components/landing/TopAlumniSection";
import InspiringAlumniSection from "@/components/landing/InspiringAlumniSection";
import SuccessDomainsSection from "@/components/landing/SuccessDomainsSection";
import BatchSection from "@/components/landing/BatchSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <TopAlumniSection />
      <InspiringAlumniSection />
      <SuccessDomainsSection />
      <BatchSection />
      <Footer />
    </div>
  );
};

export default Index;
