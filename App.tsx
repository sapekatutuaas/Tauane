import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { PaginaRedirecionamento } from './components/PaginaRedirecionamento';
import { PaginaObrigado } from './components/PaginaObrigado';

function App() {
  const [view, setView] = useState<'main' | 'redirect' | 'thankyou'>('main');

  useEffect(() => {
    const handleWhatsAppClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.href.includes('wa.me') || anchor?.href.includes('whatsapp.com')) {
        e.preventDefault();
        setView('redirect');
      }
    };

    document.addEventListener('click', handleWhatsAppClick);
    return () => document.removeEventListener('click', handleWhatsAppClick);
  }, []);

  if (view === 'redirect') {
    return <PaginaRedirecionamento onComplete={() => setView('thankyou')} />;
  }

  if (view === 'thankyou') {
    return <PaginaObrigado onBack={() => setView('main')} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <WhyUs />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;