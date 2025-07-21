"use client";

import MeteorRain from "@/app/components/MeteorRain";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "@/app/components/sections/AboutSection";
import TechStackSection from "@/app/components/sections/TechStackSection";
import ResumeSection from "@/app/components/sections/ResumeSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="bg-black text-white relative">
      {/* Meteor Rain Background */}
      <MeteorRain />

      {/* Background overlay with noise texture */}
      <div
        className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] 
        opacity-20 pointer-events-none"
      />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Resume Section */}
      <ResumeSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}