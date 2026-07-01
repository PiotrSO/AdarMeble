import React from 'react';

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Konsultacja i Wizja',
      desc: 'Zadzwoń do nas lub wypełnij formularz. Podczas krótkiej rozmowy omawiamy Twoje potrzeby, preferowany styl, budżet oraz wstępny zakres prac.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Bezpłatny Pomiar i Projekt',
      desc: 'Przyjeżdżamy na miejsce inwestycji w Warszawie lub okolicach, wykonujemy precyzyjny pomiar laserowy oraz przygotowujemy bezpłatny trójwymiarowy projekt mebli.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Montaż i Realizacja na Czas',
      desc: 'Wycinamy i składamy meble w naszej fabryce. Następnie dostarczamy je i montujemy we wskazanym terminie. Pozostawiamy po sobie nienaganny porządek.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white" id="jak-dzialamy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800 uppercase tracking-wide">
            Nasz proces
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Jak działamy? 3 proste kroki
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Dbamy o jasność współpracy na każdym etapie. Od pierwszej rozmowy do wniesienia ostatnich frontów, wiesz dokładnie co i kiedy się wydarzy.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-slate-100 -z-10 transform -translate-y-6" />

          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover-card-effect flex flex-col items-center text-center"
            >
              {/* Step Badge */}
              <span className="absolute top-4 right-6 text-4xl font-black text-slate-200/80 tracking-tight select-none">
                {step.number}
              </span>

              {/* Step Icon Container */}
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-100 mb-6">
                {step.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-slate-950 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>

              {/* Mobile connecting arrow (only between steps) */}
              {index < 2 && (
                <div className="md:hidden mt-6 text-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 13l-7 7-7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
