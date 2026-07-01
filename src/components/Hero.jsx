import React from 'react';
import heroBg from '../assets/office_hero.png';

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
    <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-6 text-left">
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
            <p className="mt-6 text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-xl">
              Tworzymy funkcjonalne biura, kuchnie i szafy wnękowe bazując na niezawodnych rozwiązaniach modułowych. Modyfikujemy wymiary i tworzymy projekty dostosowane do Twoich potrzeb.
            </p>

            {/* Split Path CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleScrollToSection('biura')}
                className="inline-flex items-center justify-center px-5 py-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-200/50 hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
              >
                Wyposaż biuro
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button
                onClick={() => handleScrollToSection('kuchnie')}
                className="inline-flex items-center justify-center px-5 py-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-200/50 hover:shadow-lg transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
              >
                Zaprojektuj kuchnię
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <div className="mt-4">
              <button
                onClick={() => handleScrollToSection('szafy')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-4 border-2 border-blue-600 text-sm font-bold rounded-xl text-blue-700 bg-white hover:bg-blue-50 active:bg-blue-100 transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5"
              >
                Stwórz szafę wnękową
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-6 border-t border-slate-200/80 flex flex-wrap gap-x-6 gap-y-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-semibold">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Bezpłatny pomiar & projekt
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 font-semibold">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Polskie meble i komponenty
              </div>
            </div>
          </div>

          {/* Right Column: Image of the elegant woman in office */}
          <div className="lg:col-span-6 relative h-[320px] sm:h-[420px] lg:h-[520px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100/60 bg-slate-50">
            <img 
              src={heroBg} 
              alt="Elegancka kobieta w nowoczesnym biurze wyposażonym przez Adar Meble" 
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
