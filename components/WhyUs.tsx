import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const reasons = [
    "Evita decisões precipitadas",
    "Protege seus direitos patrimoniais",
    "Garante segurança jurídica",
    "Reduz conflitos futuros",
    "Traz clareza em um momento confuso"
  ];

  return (
    // Increased padding-top even more (pt-32 md:pt-52 lg:pt-64) to maximize spacing
    <section className="pt-32 pb-16 md:pt-52 lg:pt-64 md:pb-24 bg-slate-50 overflow-visible">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
          
          {/* Photo Column */}
          <div className="w-full lg:w-5/12 order-2 lg:order-1 lg:-mt-24 relative z-10">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background element */}
              <div className="absolute -inset-4 bg-brand-navy rounded-lg transform -rotate-2 opacity-10"></div>
              <div className="absolute -inset-4 bg-brand-gold rounded-lg transform rotate-2 opacity-20"></div>
              
              <img 
                src="https://i.imgur.com/ZpjuKML.jpeg" 
                alt="Dra. Tauanne Drumond" 
                className="relative rounded-lg shadow-2xl w-full h-[350px] md:h-[500px] lg:h-[600px] object-cover object-center"
              />
              
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/95 backdrop-blur-sm p-4 rounded border-l-4 border-brand-gold shadow-lg">
                <p className="font-serif text-brand-navy font-bold text-lg">Tauanne Drumond</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Advogada Especialista</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2 pt-8 lg:pt-0">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-6 leading-tight">
              Por que procurar um advogado agora?
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Muitas pessoas tentam resolver conflitos familiares sozinhas e acabam abrindo mão de direitos sem saber. O que parece simples hoje pode gerar grandes prejuízos emocionais e financeiros amanhã.
            </p>

            <div className="grid gap-4 mb-10">
              {reasons.map((reason, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 flex items-center gap-4 group hover:border-brand-gold/50 transition-colors">
                  <div className="bg-brand-gold/10 p-2 rounded-full group-hover:bg-brand-gold group-hover:text-white transition-colors shrink-0">
                    <CheckCircle2 size={20} className="text-brand-gold group-hover:text-white" />
                  </div>
                  <h4 className="font-medium text-base md:text-lg text-brand-navy">{reason}</h4>
                </div>
              ))}
            </div>

            <Button className="w-full md:w-auto">
              Agendar consulta avaliativa
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};