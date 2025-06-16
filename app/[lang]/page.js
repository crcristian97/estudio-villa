import { Hero3 } from "../../components/HeroSection";
import { AboutUs } from "../../components/AboutUs";
import { LegalServicesSection } from "../../components/Feature";
import { Stats } from "../../components/Stats";
import { HowWorks } from "../../components/HowWorks";
import { Testimonial } from "../../components/Testimonial";
import { CTA2 } from "../../components/Cta";
import WhyChoose from "../../components/WhyChoose";
import { FAQ2 } from "../../components/FAQ";
export default function Page({ params }) {
  return (
    <main>
      <Hero3 />
      <AboutUs />
      <LegalServicesSection />  
      <Stats />
      <HowWorks />
      <Testimonial />
      <CTA2 />
      <WhyChoose />
      <FAQ2 />
      </main>
  );
} 