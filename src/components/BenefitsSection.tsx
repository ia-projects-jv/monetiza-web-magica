
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Benefit: React.FC<BenefitProps> = ({ title, description, icon }) => {
  return (
    <Card className="bg-dark-secondary border-dark-accent hover:border-highlight transition-colors duration-300 group animate-fade-in-up">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-full bg-dark-accent flex items-center justify-center mb-4 group-hover:bg-highlight/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>,
      title: "Monetizar com anúncios",
      description: "Aprenda a monetizar seu site ou canal com diferentes tipos de anúncios e maximize seus ganhos."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      title: "Marketing de afiliados",
      description: "Descubra como criar uma renda recorrente promovendo produtos que você acredita como afiliado."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>,
      title: "Produtos digitais",
      description: "Crie e venda seus próprios produtos digitais, desde ebooks até cursos online completos."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>,
      title: "Serviços online",
      description: "Ofereça seus serviços pela internet e alcance clientes em todo o mundo."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>,
      title: "Crowdfunding",
      description: "Saiba como financiar seus projetos através de plataformas de crowdfunding e apoiadores."
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-highlight" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
      title: "Segurança financeira",
      description: "Estratégias para diversificar suas fontes de renda online e criar segurança financeira."
    }
  ];

  return (
    <section id="benefits" className="py-20 px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">O que você irá <span className="text-gradient">aprender</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Este ebook abrange todas as estratégias comprovadas para gerar receita online, desde iniciantes até métodos avançados.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Benefit
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
