import React from 'react';
import { MessageSquare, Search, TrendingUp, Users } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare size={24} />,
      title: "1. Análise Inicial",
      desc: "Análise inicial do seu caso"
    },
    {
      icon: <Search size={24} />,
      title: "2. Orientação",
      desc: "Orientação clara sobre direitos e caminhos possíveis"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "3. Estratégia",
      desc: "Definição da melhor estratégia"
    },
    {
      icon: <Users size={24} />,
      title: "4. Acompanhamento",
      desc: "Acompanhamento próximo e transparente"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-4">Como Funciona o Atendimento</h2>
          <p className="text-slate-500 mt-4 text-lg italic">"Sem juridiquês. Sem julgamentos. Com respeito."</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative group p-4 rounded-lg hover:bg-slate-50 transition-colors">
              
              {/* Connector Line (Desktop only) */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-gray-100 -z-10"></div>
              )}

              <div className="w-16 h-16 bg-white border-2 border-brand-gold rounded-full flex items-center justify-center text-brand-navy mb-6 shadow-sm group-hover:bg-brand-gold group-hover:text-white transition-all duration-300 z-10">
                {step.icon}
              </div>
              <h3 className="font-serif font-bold text-lg text-brand-navy mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed px-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};