import { Hero3 } from "../../components/HeroSection";
import { AboutUs } from "../../components/AboutUs";
import { LegalServicesSection } from "../../components/Feature";

export default function Page({ params }) {
  return (
    <main>
      <Hero3 />
      <AboutUs />
      <LegalServicesSection />
    </main>
  );
} 