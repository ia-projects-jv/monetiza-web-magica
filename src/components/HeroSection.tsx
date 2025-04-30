
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-secondary opacity-80 z-0"></div>
      
      {/* Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="animate-fade-in-up text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="block">Ganhe Dinheiro na</span> 
          <span className="text-gradient">Internet</span>
        </h1>
        
        <h2 className="animate-fade-in-up animation-delay-100 text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8">
          Descubra as Melhores Formas de Monetização
        </h2>
        
        <p className="animate-fade-in-up animation-delay-200 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          Aprenda como ganhar dinheiro online com métodos comprovados. Desde anúncios até marketing de afiliados, temos as estratégias que você precisa.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 animate-fade-in-up animation-delay-300">
          <Button 
            onClick={scrollToPricing}
            className="text-lg px-8 py-6 bg-highlight hover:bg-highlight-secondary transition-all duration-300 shadow-lg hover:shadow-highlight/25"
          >
            Compre Agora - Comece a Monetizar! <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Book mockup */}
      <div className="mt-20 max-w-md mx-auto animate-fade-in-up animation-delay-500 relative z-10">
        <div className="bg-dark-accent rounded-lg p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
          <div className="bg-gradient p-0.5 rounded-md">
            <div className="bg-dark-secondary p-8 rounded-md flex flex-col items-center">
              <div className="text-3xl font-bold mb-4 text-center text-white">
                <span className="text-gradient">Ganhe Dinheiro</span> na Internet
              </div>
              <div className="text-gray-400 text-center text-sm">
                Guia completo para monetizar sua presença digital
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
