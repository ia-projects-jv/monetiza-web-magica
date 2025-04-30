
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 px-6 lg:px-8 bg-dark-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Adquira <span className="text-gradient">agora!</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Invista em seu futuro financeiro e comece a construir múltiplas fontes de renda online.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto bg-dark-secondary border-2 border-highlight p-8 md:p-10 relative overflow-hidden">
          {/* Highlight badge */}
          <div className="absolute -top-2 -right-12 bg-highlight text-white px-12 py-1 rotate-45 transform text-sm font-semibold shadow-lg">
            Oferta Especial
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Ebook "Ganhe Dinheiro na Internet"</h3>
            <div className="flex justify-center items-center gap-4 mb-6">
              <span className="text-gray-400 line-through text-xl">R$97,00</span>
              <span className="text-4xl font-bold text-white">R$67,00</span>
            </div>
            
            <p className="text-gray-300 mb-8">
              Pagamento único. Sem assinaturas ou taxas escondidas.
            </p>
            
            <div className="space-y-4 mb-10 max-w-md mx-auto">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-highlight mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-left text-gray-300">Acesso imediato ao ebook completo em formato PDF e EPUB</span>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-highlight mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-left text-gray-300">6 modelos de planilhas para acompanhar seus ganhos online</span>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-highlight mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-left text-gray-300">Bônus: Lista exclusiva com 50 programas de afiliados recomendados</span>
              </div>
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-highlight mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-left text-gray-300">Garantia de satisfação de 30 dias ou seu dinheiro de volta</span>
              </div>
            </div>
            
            <Button className="text-lg w-full py-6 bg-highlight hover:bg-highlight-secondary transition-all duration-300 shadow-lg hover:shadow-highlight/25 animate-pulse-light">
              Comprar agora e começar a monetizar
            </Button>
            
            <div className="mt-6 flex justify-center gap-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-gray-400 text-sm ml-1">Pagamento seguro</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <span className="text-gray-400 text-sm ml-1">Download imediato</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
