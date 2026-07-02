import React from 'react';

export default function PrivacyPolicy() {
  const pageTitle = 'Polityka Prywatności - ADAR Meble';
  const pageDesc = 'Polityka prywatności i ochrony danych osobowych (RODO) w serwisie ADAR Meble Dariusz Murawski.';

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
          <a href="/" className="hover:text-blue-600">Strona Główna</a> / <span className="text-slate-600">Polityka Prywatności</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
          Polityka Prywatności serwisu Adar Meble
        </h1>

        {/* Content */}
        <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
          <p>
            Niniejsza Polityka prywatności określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem z serwisu internetowego <strong>adarmeble.pl</strong>.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Administrator Danych</h2>
          <p>
            Administratorem danych osobowych przetwarzanych w serwisie jest firma <strong>Produkcja mebli "ADAR" Dariusz Murawski</strong> z siedzibą pod adresem: Przedewsie 12, 05-306 Jakubów, NIP: 8221216168.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Cele Przetwarzania Danych</h2>
          <p>
            Dane osobowe Użytkowników są przetwarzane w celach:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nawiązania kontaktu z Użytkownikiem w celu przygotowania oferty handlowej (na podstawie dobrowolnie uzupełnionych danych w formularzu kontaktowym).</li>
            <li>Przesyłania materiałów informacyjnych i promocyjnych (np. katalogu PDF mebli) na życzenie Użytkownika.</li>
            <li>Realizacji usług stolarskich i montażowych (w przypadku podpisania umowy handlowej).</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Zakres Przetwarzanych Danych</h2>
          <p>
            Przetwarzamy następujące dane osobowe przekazane w formularzu:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Imię i nazwisko / nazwa firmy</li>
            <li>Numer telefonu kontaktowego</li>
            <li>Adres e-mail</li>
            <li>Lokalizacja montażu (miasto/dzielnica)</li>
            <li>Dane dotyczące charakterystyki zamówienia (układ mebli, styl, itp.)</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Podstawy Prawne Przetwarzania</h2>
          <p>
            Dane osobowe przetwarzane są na podstawie zgody wyrażonej przez Użytkownika (art. 6 ust. 1 lit. a RODO) oraz do celów wynikających z prawnie uzasadnionych interesów realizowanych przez administratora (art. 6 ust. 1 lit. f RODO).
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Prawa Użytkownika</h2>
          <p>
            Każdemu Użytkownikowi przysługuje prawo do:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Wglądu w swoje dane osobowe oraz ich poprawiania.</li>
            <li>Żądania usunięcia lub ograniczenia przetwarzania danych osobowych.</li>
            <li>Cofnięcia zgody na przetwarzanie danych w dowolnym momencie (cofnięcie zgody nie wpływa na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem).</li>
            <li>Wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych), jeżeli uzna, że przetwarzanie narusza przepisy RODO.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Kontakt z Administratorem</h2>
          <p>
            Wszelkie zapytania lub żądania dotyczące danych osobowych należy kierować na adres e-mail: <strong>adar@adarmeble.pl</strong> lub pisemnie na adres siedziby firmy.
          </p>
        </div>

      </div>
    </main>
  );
}
