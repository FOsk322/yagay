import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import ProblemSection from "../components/landing/ProblemSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <BenefitsSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}