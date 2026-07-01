import React from 'react';

export default function CookiesPolicy() {
  const pageTitle = 'Polityka Cookies - ADAR Meble';
  const pageDesc = 'Informacje o plikach cookies oraz technologiach pokrewnych wykorzystywanych w serwisie internetowym ADAR Meble.';

  if (typeof document !== 'undefined') {
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDesc);
    }
  }

  React.useEffect(() => {
    document.title = pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', pageDesc);
    }
  }, []);

  return (
    <main className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
          <a href="/" className="hover:text-blue-600">Strona Główna</a> / <span className="text-slate-600">Polityka Cookies</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
          Polityka Cookies (Ciasteczek) serwisu Adar Meble
        </h1>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
          <p>
            Niniejsza Polityka Cookies odnosi się do plików cookies oraz innych podobnych technologii stosowanych w serwisie internetowym <strong>adarmeble.pl</strong>.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Czym są pliki cookies?</h2>
          <p>
            Pliki cookies (tzw. „ciasteczka”) to małe pliki tekstowe wysyłane przez serwis internetowy i zapisywane na urządzeniu końcowym Użytkownika (komputerze, laptopie, smartfonie), z którego korzysta podczas przeglądania stron www.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. W jakim celu stosujemy pliki cookies?</h2>
          <p>
            Serwis adarmeble.pl wykorzystuje pliki cookies w celu:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Zapewnienia prawidłowego działania strony:</strong> Umożliwienia nawigacji, poprawnego wyświetlania elementów graficznych oraz zapobiegania ponownemu wyświetlaniu baneru informacyjnego o cookies (po wyrażeniu zgody).</li>
            <li><strong>Analizy statystyk (Local SEO):</strong> Zbierania zanonimizowanych informacji o tym, jak Użytkownicy korzystają ze strony, co pozwala nam optymalizować naszą widoczność lokalną w wyszukiwarce.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Jakie pliki cookies stosujemy?</h2>
          <p>
            W ramach serwisu stosowane są dwa zasadnicze rodzaje ciasteczek:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Ciasteczka sesyjne (session cookies):</strong> Są plikami tymczasowymi, które przechowywane są w urządzeniu Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia przeglądarki.</li>
            <li><strong>Ciasteczka stałe (persistent cookies):</strong> Przechowywane są w urządzeniu Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich ręcznego usunięcia przez Użytkownika. Do tej grupy należy m.in. zapis zgody cookie w <code>localStorage</code>.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Zarządzanie plikami cookies w przeglądarce</h2>
          <p>
            Przeglądarki internetowe domyślnie dopuszczają przechowywanie plików cookies w urządzeniu końcowym. Użytkownik może w każdym czasie dokonać zmiany tych ustawień w swojej przeglądarce, np. zablokować automatyczną obsługę cookies lub żądać każdorazowej informacji o ich zamieszczeniu w urządzeniu.
          </p>
          <p>
            Szczegółowe informacje o możliwości i sposobach obsługi ciasteczek dostępne są w ustawieniach oprogramowania (przeglądarki internetowej):
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><a href="https://support.google.com/chrome/answer/95647?hl=pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mozilla Firefox</a></li>
            <li><a href="https://support.microsoft.com/pl-pl/microsoft-edge/wy%C5%9Bwietlanie-i-usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-a7d95376-f2cd-8e4b-252a-b9c136c7f33d" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Microsoft Edge</a></li>
            <li><a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Apple Safari</a></li>
          </ul>
          <p className="mt-4 font-semibold text-slate-700">
            Ważne: Ograniczenie lub zablokowanie plików cookies może wpłynąć na niektóre funkcjonalności dostępne na naszej stronie internetowej.
          </p>
        </div>

      </div>
    </main>
  );
}
