import React from 'react';

export default function Contact() {
  return (
    <section className="py-20 bg-white border-t border-slate-100" id="kontakt-dane">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact details and sales text */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800 uppercase tracking-wide">
                Kontakt
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Porozmawiajmy o Twojej przestrzeni
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Niezależnie czy urządzasz biuro, czy potrzebujesz solidnej szafy wnękowej – jesteśmy tu, aby doradzić.
              </p>

              {/* Contact Data Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a href="tel:+48257579045" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100/80 hover:border-blue-200 transition-colors shadow-sm group">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Zadzwoń do nas</p>
                    <p className="text-sm sm:text-base font-bold text-slate-800">(25) 757 90 45</p>
                  </div>
                </a>

                <a href="mailto:adar@adarmeble.pl" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors shadow-sm group">
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Napisz e-mail</p>
                    <p className="text-sm sm:text-base font-bold text-slate-800">adar@adarmeble.pl</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Location highlights box */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100/60 flex items-start gap-4 shadow-sm">
              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-blue-100 text-blue-600 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm text-blue-900 leading-relaxed font-medium">
                <strong>Jesteśmy bliżej niż myślisz!</strong> Nasza fabryka w Jakubowie (<strong>Przedewsie 12, 05-306 Jakubów</strong>) znajduje się tuż przy węźle autostrady A2. Dzięki temu dojeżdżamy na bezpłatny pomiar do dowolnej dzielnicy Warszawy w czasie porównywalnym z przejechaniem z lewego na prawy brzeg Wisły w godzinach szczytu.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps iframe */}
          <div className="lg:col-span-6 flex items-stretch">
            <div className="w-full h-80 lg:h-auto min-h-[320px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=Przedewsie%2012,%2005-306%20Jakub%C3%B3w&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map - Adar Meble Jakubów"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
