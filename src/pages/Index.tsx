
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PreviewSection from '@/components/PreviewSection';
import PricingSection from '@/components/PricingSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  // Change page title
  useEffect(() => {
    document.title = "Ganhe Dinheiro na Internet | Ebook Monetização";
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PreviewSection />
        <PricingSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
