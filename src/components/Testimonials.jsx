import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      author: 'Tomasz Nowakowski',
      position: 'CEO, Warsaw Workspaces',
      rating: 5,
      text: 'Wyposażenie naszego nowego biura coworkingowego w meble systemowe Prim oraz stanowiska Delta przebiegło wzorowo. Jakość laminatów i elementów stalowych przerosła nasze oczekiwania. Wszystko dopasowane co do milimetra.',
      initials: 'TN',
      category: 'Meble biurowe (B2B)'
    },
    {
      author: 'Katarzyna Wiśniewska',
      position: 'Klient indywidualny, Warszawa',
      rating: 5,
      text: 'Zamówiłam szafę wnękową Linear Oak oraz garderobę Walk-In Glass. Meble są przepiękne, system cichego domyku działa idealnie, a montaż przebiegł sprawnie i w nienagannym porządku. Prawdziwi profesjonaliści!',
      initials: 'KW',
      category: 'Szafy wnękowe (B2C)'
    },
    {
      author: 'Marek Kowalski',
      position: 'Wspólnik Zarządzający, Kancelaria Murawski & Partners',
      rating: 5,
      text: 'Nasze gabinety prezesa zostały wyposażone w meble z serii Tercet Premium. Precyzja wykonania szaf i biurek jest na najwyższym poziomie. Bardzo cenimy sobie osobisty kontakt z panem Dariuszem i doradztwo na każdym etapie.',
      initials: 'MK',
      category: 'Meble biurowe (B2B)'
    },
    {
      author: 'Anna Bednarek',
      position: 'Klient indywidualny, Jakubów',
      rating: 5,
      text: 'Kuchnia na wymiar w stylu skandynawskim z dużą wyspą to spełnienie moich marzeń. Precyzyjny pomiar laserowy, doskonałe dopasowanie AGD i świetne doradztwo w kwestii materiałów. Bardzo polecam rodzinną fabrykę ADAR!',
      initials: 'AB',
      category: 'Kuchnie na wymiar (B2C)'
    }
  ];

  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-100" id="opinie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800 uppercase tracking-wide">
            Opinie
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Opinie Klientów o ADAR MEBLE
          </h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full mt-4 mb-4" />
          <p className="text-lg text-slate-600">
            Zaufanie naszych Klientów to dla nas najważniejsza rekomendacja. Zobacz, co mówią o nas firmy i osoby prywatne.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Rating and category badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md uppercase tracking-wider">
                    {review.category}
                  </span>
                </div>

                {/* Quote Icon */}
                <div className="text-slate-200 mb-4 select-none">
                  <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-4.765 2.627-5.023 5.424.317-.232.783-.354 1.269-.354 2.086 0 3.763 1.678 3.763 3.763 0 2.086-1.678 3.763-3.763 3.763-2.613 0-6.224-3.136-6.224-10.457H20V3h2.017V17h-2.017v4h-5.983zM1 12.017V4.626c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C8.546-2.915 6.213-1.205 5.955 1.592c.3-.232.766-.354 1.252-.354 2.086 0 3.763 1.678 3.763 3.763 0 2.086-1.678 3.763-3.763 3.763C4.594 8.764.983 5.628.983-1.693H7V3H8.983V17H7v4H1.017V12.017H1z" />
                  </svg>
                </div>

                {/* Review Text */}
                <p className="text-slate-600 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="flex-shrink-0 flex items-center justify-center h-11 w-11 rounded-full bg-blue-600 text-white font-extrabold text-sm shadow-md shadow-blue-200">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 leading-none">{review.author}</h4>
                  <p className="text-xs text-slate-500 mt-1">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
