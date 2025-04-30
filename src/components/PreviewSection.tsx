
import React from 'react';
import { Card } from '@/components/ui/card';

const PreviewSection: React.FC = () => {
  return (
    <section id="preview" className="py-20 px-6 lg:px-8 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Veja um <span className="text-gradient">trecho do ebook</span></h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Confira uma pequena amostra do conteúdo que você encontrará no ebook completo.
          </p>
        </div>
        
        <Card className="bg-dark-secondary border-dark-accent md:p-10 p-6">
          <div className="prose prose-invert max-w-none">
            <h3 className="text-2xl font-semibold mb-4 text-white">Capítulo 3: Monetização através do Marketing de Afiliados</h3>
            
            <p className="text-gray-300 mb-4">
              O marketing de afiliados é uma das formas mais acessíveis e escaláveis de gerar renda online. Diferente de outras estratégias, você não precisa criar um produto próprio ou gerenciar estoque. Sua principal responsabilidade é conectar pessoas a produtos ou serviços que atendam às suas necessidades.
            </p>
            
            <h4 className="text-xl font-semibold mb-3 text-white">3.1 Como escolher os programas de afiliados certos</h4>
            
            <p className="text-gray-300 mb-4">
              A escolha dos programas de afiliados adequados é fundamental para seu sucesso. Muitos iniciantes cometem o erro de promover produtos apenas pelo valor da comissão, ignorando a relevância e qualidade do produto para seu público.
            </p>
            
            <p className="text-gray-300 mb-4">
              Aqui estão três critérios essenciais para selecionar programas de afiliados:
            </p>
            
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li><span className="text-highlight">Relevância para o público:</span> O produto deve resolver um problema real que seu público enfrenta.</li>
              <li><span className="text-highlight">Qualidade do produto:</span> Promova apenas produtos que você usaria ou recomendaria mesmo sem comissão.</li>
              <li><span className="text-highlight">Suporte ao afiliado:</span> Programas que oferecem materiais promocionais, dados e suporte facilitam seu trabalho.</li>
            </ul>
            
            <p className="text-gray-300 italic">
              Continua no ebook completo...
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PreviewSection;
