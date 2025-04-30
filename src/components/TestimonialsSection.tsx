
import React from 'react';
import { Card } from '@/components/ui/card';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <Card className="bg-dark-secondary border-dark-accent p-6 h-full hover:border-highlight transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="mb-4 text-highlight">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
          </svg>
        </div>
        <p className="text-gray-300 mb-6 flex-grow">{quote}</p>
        <div className="mt-auto">
          <p className="font-semibold text-white">{author}</p>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Este ebook transformou completamente minha abordagem para monetização online. Em apenas 2 meses, consegui triplicar minha renda com as estratégias de afiliados.",
      author: "Carlos Silva",
      role: "Blogueiro"
    },
    {
      quote: "As dicas sobre criação de produtos digitais foram incríveis. Consegui lançar meu primeiro curso online e já recuperei o investimento em menos de uma semana.",
      author: "Ana Oliveira",
      role: "Empreendedora Digital"
    },
    {
      quote: "Finalmente entendi como monetizar meu canal no YouTube de forma ética e eficiente. O capítulo sobre anúncios me deu clareza sobre como maximizar meus ganhos.",
      author: "Pedro Santos",
      role: "Youtuber"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-6 lg:px-8 bg-dark-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">O que <span className="text-gradient">dizem os leitores</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Centenas de pessoas já transformaram sua presença digital em uma fonte de renda com nosso ebook.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
