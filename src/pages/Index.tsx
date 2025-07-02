
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AIReadiness from "@/components/AIReadiness";
import DataManagement from "@/components/DataManagement";
import BrandVoice from "@/components/BrandVoice";
import MeetTheAgents from "@/components/MeetTheAgents";
import PredictiveIntelligence from "@/components/PredictiveIntelligence";
import UseCases from "@/components/UseCases";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <div className="bg-gradient-to-b from-white to-gray-50 py-8">
          <AIReadiness />
        </div>
        
        <section id="data-management" className="scroll-mt-20">
          <DataManagement />
        </section>
        
        <div className="bg-gradient-to-b from-gray-50 to-white py-8">
          <BrandVoice />
        </div>
        
        <div className="bg-white">
          <MeetTheAgents />
        </div>
        
        <section id="predictive-intelligence" className="scroll-mt-20">
          <PredictiveIntelligence />
        </section>
        
        <section id="use-cases" className="scroll-mt-20">
          <UseCases />
        </section>
        
        <div className="bg-gradient-to-b from-white to-gray-50 py-8">
          <Integrations />
        </div>
        
        <div className="bg-gray-50">
          <Testimonials />
        </div>
        
        <section id="contact">
          <FinalCTA />
        </section>
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
