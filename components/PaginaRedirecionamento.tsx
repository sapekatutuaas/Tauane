import React, { useEffect, useState } from 'react';
import { CONTACT_INFO } from '../constants';

export function PaginaRedirecionamento({ onComplete }: { onComplete: () => void }) {
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      window.open(CONTACT_INFO.whatsappLink, '_blank');
      onComplete();
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
        <div className="mb-6">
          <div className="w-16 h-16 border-4 border-brand-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h1 className="text-2xl font-serif font-bold text-brand-navy mb-2">Redirecionando para o WhatsApp...</h1>
          <p className="text-slate-600">Por favor, aguarde {timeLeft} segundos.</p>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-slate-500">
            Você está sendo redirecionado para falar diretamente com a Dra. Tauanne Drumond.
          </p>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-brand-gold h-full transition-all duration-1000 ease-linear"
              style={{ width: `${(5 - timeLeft) * 20}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
