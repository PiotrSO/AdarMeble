import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Biura', href: '/#biura' },
    { name: 'Kuchnie', href: '/#kuchnie' },
    { name: 'Szafy', href: '/#szafy' },
    { name: 'O nas', href: '/#o-nas' },
    { name: 'Kontakt', href: '/#kontakt-dane' },
  ];

  const handleScrollToSection = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.substring(2);
      
      setIsMenuOpen(false);
      
      setTimeout(() => {
        const isPortfolioTab = ['kuchnie', 'biura', 'szafy'].includes(targetId);
        const element = document.getElementById(isPortfolioTab ? 'portfolio' : targetId);
        
        if (element) {
          if (isPortfolioTab) {
            window.dispatchEvent(new CustomEvent('setPortfolioTab', { detail: targetId }));
          }
          
          const headerOffset = 105;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'auto'
          });
        }
      }, 100);
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 shadow-md shadow-slate-100/50 backdrop-blur-md py-3' 
        : 'bg-white py-4 border-b border-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Adar Meble Logo" 
                className="h-12 w-auto object-contain rounded-sm" 
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Call CTA Desktop */}
          <div className="hidden md:block">
            <a
              href="tel:+48257579045"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-200/50 hover:shadow-lg transition-all duration-200 gap-2 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Zadzwoń: (25) 757 90 45
            </a>
          </div>

          {/* Hamburger button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-600 hover:bg-slate-50 focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Otwórz menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block border-t border-slate-100 mt-2 bg-white' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollToSection(e, link.href)}
              className="block px-3 py-2 text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-3">
            <a
              href="tel:+48257579045"
              className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-200/50 transition-all gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Zadzwoń: (25) 757 90 45
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
