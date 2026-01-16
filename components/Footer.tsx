import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants';
import { useNavigate } from 'react-router-dom';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <footer id="contato" className="bg-brand-navy text-white pt-20 pb-10">
      
      {/* Final Call to Action */}
      <div className="container mx-auto px-4 mb-20">
        <div className="bg-brand-gold/10 border border-brand-gold/30 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Chamada Final</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Se você está vivendo um divórcio ou precisa resolver a pensão alimentícia, não enfrente isso sozinha(o).
          </p>
          <p className="text-xl md:text-2xl text-brand-gold mb-8 font-serif italic">
            "Existe um caminho mais seguro, claro e justo para recomeçar."
          </p>
          <Button variant="primary" className="shadow-xl">
            Falar com um advogado agora
          </Button>
        </div>
      </div>

      {/* Contact Columns */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-12 gap-12 border-t border-white/10 pt-16">
        
        {/* Brand */}
        <div className="lg:col-span-4">
          <img 
            src="https://i.imgur.com/b71i4q5.png" 
            alt="Tauanne Drumond Advocacia" 
            className="h-20 md:h-24 lg:h-28 mb-6 object-contain"
          />
          <p className="text-gray-400 leading-relaxed mb-6">
            Escritório especialista em Direito da Família e Sucessões. Atuamos com ética, transparência e combate incansável pelos seus direitos.
          </p>
        </div>

        {/* Contacts */}
        <div className="lg:col-span-4">
          <h4 className="font-bold text-lg mb-6 text-white">Contatos</h4>
          <ul className="space-y-4">
            <li>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition-colors">
                <Mail size={18} className="text-brand-gold" />
                {CONTACT_INFO.email}
              </a>
            </li>
            <li>
              <button 
                onClick={() => navigate('/redirecionamento')}
                className="flex items-center gap-3 text-gray-400 hover:text-brand-gold transition-colors cursor-pointer"
              >
                <Phone size={18} className="text-brand-gold" />
                {CONTACT_INFO.phone}
              </button>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin size={18} className="text-brand-gold mt-1 shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </li>
          </ul>
        </div>

        {/* Map / Location */}
        <div className="lg:col-span-4">
          <h4 className="font-bold text-lg mb-6 text-white">Localização</h4>
          <div className="rounded-lg overflow-hidden h-64 bg-slate-800 shadow-lg border border-white/10">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Rua+Mato+Grosso,+355,+Barro+Preto,+Belo+Horizonte&t=&z=15&ie=UTF8&iwloc=&output=embed"
              title="Mapa de Localização do Escritório"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
          <div className="mt-2 text-right">
             <a href={CONTACT_INFO.mapsLink} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-gold hover:underline">
               Abrir no Google Maps
             </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Tauanne Drumond Advocacia. Todos os direitos reservados.
      </div>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={() => navigate('/redirecionamento')}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-transform hover:scale-110 flex items-center justify-center animate-bounce-slow cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </button>
    </footer>
  );
};