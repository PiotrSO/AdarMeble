import React from 'react';
import heroBg from '../assets/kitchen_hero.png';

export default function Hero() {
  const handleScrollToSection = (tabName) => {
    // Dispatch event to change tab in Portfolio component
    window.dispatchEvent(new CustomEvent('setPortfolioTab', { detail: tabName }));

    const element = document.getElementById('portfolio');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center bg-slate-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-right-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Light Overlay for visual clarity and brand styling (Banned dark background) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/95 to-transparent md:to-white/10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/30 via-transparent to-white/40" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="max-w-2xl text-left">
          {/* Subtle Badge */}
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 tracking-wider uppercase mb-6 shadow-sm border border-blue-100">
            Rodzinna Fabryka Mebli — 36 lat doświadczenia
          </span>
          
          {/* H1 Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Sprawdzone systemy meblowe.
            <span className="block text-blue-600 mt-2 text-3xl sm:text-4xl lg:text-5xl">Dopasowane do Twojego wnętrza.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-xl">
            Tworzymy funkcjonalne biura, kuchnie i szafy wnękowe bazując na niezawodnych rozwiązaniach modułowych. Modyfikujemy wymiary i tworzymy projekty dostosowane do Twoich potrzeb.
          </p>

          {/* Split Path CTA Buttons */}
          <div className="mt-10 flex flex-col md:flex-row gap-4">
            <button
              onClick={() => handleScrollToSection('biura')}
              className="inline-flex items-center justify-center px-5 py-4 border border-transparent text-sm sm:text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-200/50 hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
            >
              Wyposaż biuro
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button
              onClick={() => handleScrollToSection('kuchnie')}
              className="inline-flex items-center justify-center px-5 py-4 border border-transparent text-sm sm:text-base font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-200/50 hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
            >
              Zaprojektuj kuchnię
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScrollToSection('szafy')}
              className="inline-flex items-center justify-center px-5 py-4 border-2 border-blue-600 text-sm sm:text-base font-bold rounded-xl text-blue-700 bg-white/80 hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
            >
              Stwórz szafę wnękową
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
              <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Bezpłatny pomiar & projekt
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
              <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Polskie drewno i komponenty
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-600 font-semibold">
              <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Dwuletnia gwarancja
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
