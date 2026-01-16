import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { PaginaRedirecionamento } from './components/PaginaRedirecionamento';
import { PaginaObrigado } from './components/PaginaObrigado';

function MainContent() {
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

function App() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="/redirecionamento" element={<PaginaRedirecionamento onComplete={() => navigate('/obrigado')} />} />
      <Route path="/obrigado" element={<PaginaObrigado onBack={() => navigate('/')} />} />
    </Routes>
  );
}

export default App;