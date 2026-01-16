import React from 'react';
import { CheckCircle, ArrowLeft, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export function ThankYouPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Mensagem Enviada!</h1>
          <p className="text-slate-600">
            Obrigado pelo seu contato. A Dra. Tauanne Drumond responderá o mais breve possível no seu WhatsApp.
          </p>
        </div>

        <div className="space-y-3 mb-8">
          <p className="text-sm text-slate-500 italic">
            Caso o WhatsApp não tenha aberto automaticamente, clique no botão abaixo:
          </p>
          <a 
            href={CONTACT_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-lg hover:opacity-90 transition-opacity font-bold shadow-md"
          >
            <MessageCircle size={20} />
            Abrir WhatsApp Manualmente
          </a>
        </div>
        
        <button 
          onClick={onBack}
          className="flex items-center justify-center gap-2 w-full py-3 border-2 border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors font-medium"
        >
          <ArrowLeft size={18} />
          Voltar para o site
        </button>
      </div>
    </div>
  );
}
