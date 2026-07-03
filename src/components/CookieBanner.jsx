import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage (runs only on client)
    try {
      const consent = localStorage.getItem('adar_cookie_consent');
      if (!consent) {
        setIsVisible(true);
      }
    } catch {
      // Fallback: show banner if localStorage is disabled/blocked (Safari Private Mode)
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('adar_cookie_consent', 'accepted');
    } catch (e) {
      console.warn('LocalStorage is blocked:', e);
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('adar_cookie_consent', 'declined');
    } catch (e) {
      console.warn('LocalStorage is blocked:', e);
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-xl animate-fadeIn">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Text */}
        <div className="text-slate-600 text-xs sm:text-sm font-medium max-w-4xl text-center md:text-left leading-relaxed">
          Ta strona korzysta z plików cookies (ciasteczek) w celu świadczenia usług na najwyższym poziomie, optymalizacji Local SEO oraz analizy ruchu. Możesz w każdej chwili zmienić ustawienia swojej przeglądarki. Szczegóły znajdziesz w naszej <a href="/polityka-prywatnosci.html" className="text-blue-600 font-bold hover:underline">Polityce Prywatności</a> oraz <a href="/polityka-cookies.html" className="text-blue-600 font-bold hover:underline">Polityce Cookies</a>.
        </div>

        {/* Buttons */}
        <div className="flex gap-3 flex-shrink-0 w-full sm:w-auto justify-center">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            Odrzuć
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-100 rounded-lg transition-colors cursor-pointer"
          >
            Akceptuję
          </button>
        </div>

      </div>
    </div>
  );
}
