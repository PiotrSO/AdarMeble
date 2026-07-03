import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToSection = (e, href) => {
    if (href.startsWith('/#')) {
      const targetId = href.substring(2);
      const isPortfolioTab = ['kuchnie', 'biura', 'szafy'].includes(targetId);
      const element = document.getElementById(isPortfolioTab ? 'portfolio' : targetId);
      
      if (element) {
        e.preventDefault();
        if (isPortfolioTab) {
          window.dispatchEvent(new CustomEvent('setPortfolioTab', { detail: targetId }));
        }
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 pt-16 pb-8" id="kontakt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Company Details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-800 leading-none">ADAR MEBLE</span>
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mt-1">Produkcja mebli</span>
            </div>
            <p className="text-sm text-slate-500 max-w-sm">
              Rodzinna fabryka mebli z Jakubowa. Od projektu po precyzyjny montaż — tworzymy piękno w Twoim domu i funkcjonalność w Twoim biurze.
            </p>
            <div className="text-sm text-slate-600 font-semibold space-y-1.5 pt-2">
              <p>Adres: Przedewsie 12, 05-306 Jakubów</p>
              <p>NIP: 8221216168</p>
            </div>
          </div>

          {/* Column 2: Hours & Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Godziny Otwarcia</h4>
            <div className="text-sm text-slate-600 space-y-2">
              <p className="flex justify-between">
                <span>Poniedziałek - Piątek:</span>
                <span className="font-semibold">8:00 - 16:00</span>
              </p>
              <p className="flex justify-between">
                <span>Sobota:</span>
                <span className="font-semibold">8:00 - 16:00</span>
              </p>
              <p className="flex justify-between text-red-500">
                <span>Niedziela:</span>
                <span className="font-semibold">Zamknięte</span>
              </p>
            </div>

            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider pt-4">Nawigacja</h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <a href="/#biura" onClick={(e) => handleScrollToSection(e, '/#biura')} className="text-slate-500 hover:text-blue-600 font-medium">Biura</a>
              <a href="/#kuchnie" onClick={(e) => handleScrollToSection(e, '/#kuchnie')} className="text-slate-500 hover:text-blue-600 font-medium">Kuchnie</a>
              <a href="/#szafy" onClick={(e) => handleScrollToSection(e, '/#szafy')} className="text-slate-500 hover:text-blue-600 font-medium">Szafy</a>
              <a href="/#o-nas" onClick={(e) => handleScrollToSection(e, '/#o-nas')} className="text-slate-500 hover:text-blue-600 font-medium">O nas</a>
            </div>
          </div>

          {/* Column 3: Google Maps Embed */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Nasza Lokalizacja</h4>
            <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <iframe 
                src="https://maps.google.com/maps?q=Przedewsie%2012,%2005-306%20Jakub%C3%B3w&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Google Map - Adar Meble Jakubów"
              />
            </div>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-medium gap-4">
          <p>© {currentYear} Produkcja mebli "ADAR" Dariusz Murawski. Wszelkie prawa zastrzeżone.</p>
          <div className="flex gap-4">
            <a href="/polityka-prywatnosci" className="hover:underline hover:text-slate-600">Polityka Prywatności</a>
            <span>•</span>
            <a href="/polityka-cookies" className="hover:underline hover:text-slate-600">Polityka Cookies</a>
          </div>
          <p>
            Realizacja: <a href="https://saturdev.pl" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 font-bold">SaturDev</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
