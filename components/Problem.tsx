import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

export const Problem: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute top-4 -left-4 w-full h-full border-2 border-brand-gold rounded-sm z-0 hidden md:block"></div>
            <img 
              src="https://i.imgur.com/S2nHJz4.png" 
              alt="Mulher refletindo sobre decisões familiares" 
              className="relative z-10 w-full rounded shadow-xl object-cover h-[350px] md:h-[700px] object-center"
            />
            {/* Quote box - Hidden on mobile to save space, visible on tablet+ */}
            <div className="absolute bottom-[-20px] right-[-20px] bg-brand-navy p-6 rounded shadow-lg z-20 max-w-[260px] hidden md:block">
              <p className="text-white font-serif italic text-lg leading-relaxed">
                "Segurança jurídica para recomeçar a sua vida."
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-navy font-bold mb-6">
              Quando o relacionamento chega ao limite
            </h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              O fim de um casamento ou união não envolve apenas sentimentos. 
            </p>
            
            <div className="bg-slate-50 border-l-4 border-brand-gold p-5 md:p-6 mb-8 rounded-r-lg">
              <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2 text-lg">
                <AlertCircle size={20} className="text-brand-gold shrink-0" />
                Envolve decisões sobre:
              </h3>
              <ul className="space-y-3">
                {[
                  "Divórcio", 
                  "Pensão alimentícia", 
                  "Organização financeira", 
                  "Proteção dos filhos",
                  "Segurança jurídica para recomeçar"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 size={18} className="text-green-600 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-slate-800 font-medium mb-8">
              Quanto antes você tiver orientação correta, menos desgaste emocional e financeiro enfrentará.
            </p>

            <Button className="w-full md:w-auto">
              Falar com um advogado agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};