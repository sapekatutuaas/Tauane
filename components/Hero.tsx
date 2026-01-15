import React from 'react';
import { Button } from './Button';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen max-h-[800px] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://img.freepik.com/fotos-gratis/casal-de-close-up-se-divorciando_23-2148542278.jpg?t=st=1768406513~exp=1768410113~hmac=d63e83192db73e6bf65cc7fe3992d9eeb4dc23b89579c9ca2bb2f64abe68a0f0&w=1480" 
          alt="Casal em processo de separação - Direito de Família" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-brand-navy/60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Subtitle Text Only */}
          <p className="text-brand-gold text-sm md:text-base font-bold tracking-widest uppercase mb-6">
            Escritório Especialista em Direito da Família
          </p>
          
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
            Está passando por um divórcio ou precisa resolver questões de pensão alimentícia?
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl font-light">
            Atuamos com orientação clara, estratégica e humana para proteger seus direitos e o futuro da sua família.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="shadow-brand-gold/20 shadow-lg">
              Falar com um advogado agora
            </Button>
            
            <a href="#atuacao" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border border-white/30 rounded hover:bg-white/10 transition-all uppercase tracking-wider">
              Conheça as Áreas
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};