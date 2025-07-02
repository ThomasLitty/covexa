
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import DataManagement from "@/components/DataManagement";
import AIReadiness from "@/components/AIReadiness";
import BrandVoice from "@/components/BrandVoice";
import MeetTheAgents from "@/components/MeetTheAgents";
import UseCases from "@/components/UseCases";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <DataManagement />
      <AIReadiness />
      <BrandVoice />
      <MeetTheAgents />
      <UseCases />
      <Integrations />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
