import React from 'react';
import { Button } from './Button';
import { HeartHandshake, FileSignature } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="atuacao" className="py-16 md:py-20 bg-brand-navy text-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-brand-gold uppercase tracking-widest text-xs md:text-sm font-bold">Nossas Especialidades</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mt-3 mb-6">Atuação Especializada</h2>
          <p className="text-gray-300 px-4">
             Focamos em resolver conflitos familiares com agilidade, discrição e técnica jurídica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
          {/* Service 1: Divórcio */}
          <div className="bg-brand-navyLight border border-white/5 p-6 md:p-10 rounded-lg hover:border-brand-gold/30 transition-all duration-300 group flex flex-col">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
              <FileSignature size={28} className="text-brand-gold md:w-8 md:h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-white">Divórcio: Clareza e Segurança</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              Atuamos em divórcios consensuais e litigiosos, sempre buscando:
            </p>
            <ul className="space-y-3 mb-8 text-gray-400 flex-grow text-sm md:text-base">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                Divisão justa de bens
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                Agilidade no processo
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                Redução de conflitos desnecessários
              </li>
               <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                Preservação da dignidade
              </li>
            </ul>
            <p className="text-xs md:text-sm text-gray-500 italic mb-6">
              Cada caso é tratado com estratégia, sigilo e respeito à sua história.
            </p>
            <Button variant="outline" fullWidth className="mt-auto">
              Falar com um advogado
            </Button>
          </div>

          {/* Service 2: Pensão */}
          <div className="bg-brand-navyLight border border-white/5 p-6 md:p-10 rounded-lg hover:border-brand-gold/30 transition-all duration-300 group flex flex-col">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
              <HeartHandshake size={28} className="text-brand-gold md:w-8 md:h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-white">Pensão Alimentícia</h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
              A pensão alimentícia garante dignidade e estabilidade. Atuamos em:
            </p>
            <ul className="space-y-3 mb-8 text-gray-400 flex-grow text-sm md:text-base">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                Pedido de pensão
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                Revisão de valor (aumento/redução)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                Cobrança de pensão atrasada
              </li>
               <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full shrink-0"></span>
                Regularização de acordos
              </li>
            </ul>
             <p className="text-xs md:text-sm text-gray-500 italic mb-6">
              Tudo com foco no equilíbrio financeiro e no melhor interesse da família.
            </p>
            <Button variant="outline" fullWidth className="mt-auto">
              Falar com um advogado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};