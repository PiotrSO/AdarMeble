import React from 'react';
import factoryCrew from '../assets/factory_crew.jpg';

export default function AboutUs() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden" id="o-nas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800 uppercase tracking-wide">
              Kim jesteśmy
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Nowoczesna produkcja, osobiste podejście
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Jako rodzinna fabryka mebli prowadzona przez Dariusza Murawskiego w Jakubowie pod Warszawą, łączymy wieloletnie doświadczenie z precyzją nowoczesnego parku maszynowego. Specjalizujemy się w trwałych konstrukcjach tworzonych z wysokiej jakości laminatów oraz solidnych elementów ze stali. W naszej ofercie znajdziesz zarówno sprawdzone meble systemowe, które pozwalają na elastyczną aranżację przestrzeni, jak i realizacje tworzone w pełni na wymiar. Niezależnie od wybranej opcji, każda szafa, biurko czy lada recepcyjna to owoc osobistej rozmowy z Klientem, precyzyjnego pomiaru i dbałości o każdy detal.
            </p>

            {/* Core Benefits List */}
            <div className="mt-8 space-y-6 pt-4">
              
              {/* Benefit 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Systemy i projekty autorskie</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Oferujemy niezawodne meble systemowe, które możemy swobodnie modyfikować pod konkretne wymiary. Realizujemy również całkowicie indywidualne projekty, dopasowując każdy szczegół do Twojej przestrzeni.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Nowoczesne materiały</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Meble produkujemy w naszej fabryce, opierając się na wytrzymałych płytach laminowanych, konstrukcjach stalowych oraz sprawdzonych okuciach meblowych (Blum, Hettich).
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Osobisty doradca</h4>
                  <p className="mt-1 text-sm text-slate-500">
                    Przez cały proces — od pomiaru, przez doradztwo techniczne, aż po finalny montaż — kontaktujesz się bezpośrednio z osobą odpowiedzialną za Twój projekt.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Premium Background Accent shapes */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-3xl mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-indigo-100 rounded-3xl mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
              
              {/* Main Image */}
              <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-slate-100">
                <img
                  src={factoryCrew}
                  alt="Załoga produkcyjna w nowoczesnej fabryce mebli ADAR"
                  className="rounded-xl w-full h-auto object-cover"
                />
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md border border-slate-100 text-center">
                  <p className="text-2xl font-extrabold text-blue-600 leading-none">36</p>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-1">lat doświadczenia</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
