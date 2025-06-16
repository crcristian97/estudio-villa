import { Hero3 } from "../../components/HeroSection";
import { AboutUs } from "../../components/AboutUs";
import { LegalServicesSection } from "../../components/Feature";
import { Stats } from "../../components/Stats";
import { HowWorks } from "../../components/HowWorks";
import { Testimonial } from "../../components/Testimonial";
export default function Page({ params }) {
  return (
    <main>
      <Hero3 />
      <AboutUs />
      <LegalServicesSection />  
      <Stats />
      <HowWorks />
      <Testimonial />
      </main>
  );
} 