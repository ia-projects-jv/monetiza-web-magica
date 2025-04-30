
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-dark py-4 px-6 md:px-8 flex justify-between items-center sticky top-0 z-50 backdrop-blur-md bg-dark/90 border-b border-dark-accent/20">
      <div className="font-heading text-xl md:text-2xl font-bold">
        <span className="text-gradient">Monetiza</span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a onClick={() => scrollToSection('benefits')} className="text-sm text-gray-300 hover:text-white cursor-pointer transition-colors">Benefícios</a>
        <a onClick={() => scrollToSection('testimonials')} className="text-sm text-gray-300 hover:text-white cursor-pointer transition-colors">Depoimentos</a>
        <a onClick={() => scrollToSection('preview')} className="text-sm text-gray-300 hover:text-white cursor-pointer transition-colors">Preview</a>
        <Button onClick={() => scrollToSection('pricing')} variant="default" className="bg-highlight hover:bg-highlight-secondary transition-colors">
          Comprar Agora
        </Button>
      </nav>
      <Button variant="ghost" size="icon" className="md:hidden">
        <ChevronDown className="h-5 w-5" />
      </Button>
    </header>
  );
};

export default Header;
