import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PortfolioModelsSection from '@/components/PortfolioModelsSection';
import PositioningSection from '@/components/PositioningSection';
import TrustSection from '@/components/TrustSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <PortfolioModelsSection />
        <PositioningSection />
        <TrustSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
