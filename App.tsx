import React, { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

// Lazy loading components that are not immediately visible
const Problem = lazy(() => import('./components/Problem').then(module => ({ default: module.Problem })));
const Services = lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const WhyUs = lazy(() => import('./components/WhyUs').then(module => ({ default: module.WhyUs })));
const Process = lazy(() => import('./components/Process').then(module => ({ default: module.Process })));
const Footer = lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="h-20 flex items-center justify-center">Carregando...</div>}>
          <Problem />
          <Services />
          <WhyUs />
          <Process />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;