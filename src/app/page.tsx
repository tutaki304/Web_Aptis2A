import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import FeatureCards from "@/components/sections/FeatureCards";
import Courses from "@/components/sections/Courses";
import LearningPath from "@/components/sections/LearningPath";
import PartnersSection from "@/components/sections/PartnersSection";
import StatsSection from "@/components/sections/StatsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <Courses />
        <LearningPath />
        <PartnersSection />
        <StatsSection />
        <Testimonials />
        <ProjectsSection />
        <BenefitsSection />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}