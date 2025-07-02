
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MeetTheAgents from "@/components/MeetTheAgents";
import HowItWorks from "@/components/HowItWorks";
import AIReadiness from "@/components/AIReadiness";
import DataReadiness from "@/components/DataReadiness";
import DataManagement from "@/components/DataManagement";
import BrandVoice from "@/components/BrandVoice";
import PredictiveIntelligence from "@/components/PredictiveIntelligence";
import UseCases from "@/components/UseCases";
import DeploymentModel from "@/components/DeploymentModel";
import Integrations from "@/components/Integrations";
import SecurityPrivacy from "@/components/SecurityPrivacy";
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
        
        <div className="bg-white">
          <MeetTheAgents />
        </div>
        
        <section id="ai-readiness" className="bg-gradient-to-b from-white to-gray-50 py-8 scroll-mt-20">
          <AIReadiness />
        </section>
        
        <DataReadiness />
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="data-management" className="scroll-mt-20">
          <DataManagement />
        </section>
        
        <div className="bg-gradient-to-b from-gray-50 to-white py-8">
          <BrandVoice />
        </div>
        
        <section id="predictive-intelligence" className="scroll-mt-20">
          <PredictiveIntelligence />
        </section>
        
        <section id="use-cases" className="scroll-mt-20">
          <UseCases />
        </section>
        
        <DeploymentModel />
        
        <div className="bg-gradient-to-b from-white to-gray-50 py-8">
          <Integrations />
        </div>
        
        <SecurityPrivacy />
        
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
