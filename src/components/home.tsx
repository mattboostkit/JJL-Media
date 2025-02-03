import React from "react";
import Navbar from "./navigation/Navbar";
import HeroSection from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";
import { motion } from "framer-motion";

interface HomeProps {
  navItems?: Array<{ label: string; href: string }>;
  heroTitle?: string;
  heroSubtitle?: string;
  services?: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
}

const Home = ({ navItems, heroTitle, heroSubtitle, services }: HomeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      <Navbar menuItems={navItems} />
      <main>
        <div className="pt-20">
          <HeroSection
            title={heroTitle}
            subtitle={heroSubtitle}
            onCtaClick={() => console.log("CTA clicked")}
          />
          <ServicesSection services={services} />
        </div>
      </main>
    </motion.div>
  );
};

export default Home;
