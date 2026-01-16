import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export function ThankYouPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={48} />
          </div>
          <h1 className="text-3xl font-serif font-bold text-brand-navy mb-2">Mensagem Enviada!</h1>
          <p className="text-slate-600">
            Obrigado pelo seu contato. A Dra. Tauanne Drumond responderá o mais breve possível no seu WhatsApp.
          </p>
        </div>
        
        <button 
          onClick={onBack}
          className="flex items-center justify-center gap-2 w-full py-3 bg-brand-navy text-white rounded-lg hover:bg-brand-navyLight transition-colors"
        >
          <ArrowLeft size={18} />
          Voltar para o site
        </button>
      </div>
    </div>
  );
}
