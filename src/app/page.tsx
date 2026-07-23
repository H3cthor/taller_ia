import ParticlesBg from "@/components/ParticlesBg";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectsHub from "@/components/ProjectsHub";
import Methodology from "@/components/Methodology";
import Equipment from "@/components/Equipment";
import PortalForm from "@/components/PortalForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Dynamic neural-like network background */}
      <ParticlesBg />

      {/* Navigation bar */}
      <Navbar />

      {/* Landing / Hero section */}
      <Hero />

      {/* About & Philosophy */}
      <About />

      {/* Catalog of projects with modal details and SILL simulator */}
      <ProjectsHub />

      {/* 5 Phases timeline */}
      <Methodology />

      {/* Equipment list */}
      <Equipment />

      {/* Application / Collaboration Form Portal */}
      <PortalForm />

      {/* Footer & Credits */}
      <Footer />
    </>
  );
}
