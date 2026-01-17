import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';
import { CONTACT_INFO } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logic: When transparent (top), text must be white to contrast with Dark Hero image.
  // When scrolled (white/navy bg), text adapts.
  const navLinkColor = isScrolled ? 'text-white hover:text-brand-gold' : 'text-white/90 hover:text-white';

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Áreas de Atuação', href: '#atuacao' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4 lg:py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex flex-col z-50 relative">
          <a href="#home" className="group block">
            <img 
              src="https://i.imgur.com/b71i4q5.png" 
              alt="Tauanne Drumond Advocacia" 
              className="h-20 md:h-28 lg:h-31 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => {
                const id = link.href.replace('#', '');
                const element = document.getElementById(id);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`text-sm font-medium tracking-wide transition-colors cursor-pointer ${navLinkColor}`}
            >
              {link.name}
            </button>
          ))}
          <Button variant="primary" className="!px-6 !py-2 !text-sm shadow-none">
            Falar com Advogado
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden z-50 transition-colors ${isMobileMenuOpen ? 'text-white' : (isScrolled ? 'text-brand-gold' : 'text-white')}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-navy/95 backdrop-blur-xl z-40 transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 space-y-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => {
                setIsMobileMenuOpen(false);
                const id = link.href.replace('#', '');
                const element = document.getElementById(id);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-2xl font-serif font-medium text-white hover:text-brand-gold transition-colors border-b border-white/10 pb-4 text-left cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          
          <div className="pt-4">
            <Button fullWidth onClick={() => setIsMobileMenuOpen(false)}>
              <span className="flex items-center gap-2 justify-center">
                <Phone size={18} />
                (31) 99771-4068
              </span>
            </Button>
            
            <p className="text-center text-gray-500 text-sm mt-8">
              Rua Mato Grosso, nº. 355<br/>Barro Preto, Belo Horizonte/MG
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};