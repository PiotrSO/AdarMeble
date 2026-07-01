import React from 'react';

export default function Clients() {
  const clients = [
    {
      name: 'Warsaw Workspaces',
      logo: (
        <svg className="h-8 text-slate-400 hover:text-slate-600 transition-colors duration-200" viewBox="0 0 200 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="8" height="30" rx="1" />
          <rect x="22" y="5" width="8" height="35" rx="1" />
          <rect x="34" y="18" width="8" height="22" rx="1" />
          <text x="50" y="31" fontFamily="sans-serif" fontSize="13" fontWeight="bold" letterSpacing="1">WARSAW WORKSPACES</text>
        </svg>
      )
    },
    {
      name: 'Moderna Design',
      logo: (
        <svg className="h-8 text-slate-400 hover:text-slate-600 transition-colors duration-200" viewBox="0 0 160 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="25" r="12" fill="none" stroke="currentColor" strokeWidth="3" />
          <polygon points="20,17 27,30 13,30" />
          <text x="42" y="30" fontFamily="sans-serif" fontSize="14" fontWeight="black" letterSpacing="2">MODERNA</text>
        </svg>
      )
    },
    {
      name: 'Polska Grupa Inwestycyjna',
      logo: (
        <svg className="h-8 text-slate-400 hover:text-slate-600 transition-colors duration-200" viewBox="0 0 160 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,12 L25,5 L40,12 L40,28 C40,36 25,43 25,43 C25,43 10,36 10,28 L10,12 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          <text x="52" y="30" fontFamily="sans-serif" fontSize="15" fontWeight="bold" letterSpacing="1">P.G.I. S.A.</text>
        </svg>
      )
    },
    {
      name: 'Capital Hub',
      logo: (
        <svg className="h-8 text-slate-400 hover:text-slate-600 transition-colors duration-200" viewBox="0 0 160 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="10" opacity="0.5" />
          <circle cx="28" cy="28" r="10" opacity="0.8" />
          <text x="46" y="30" fontFamily="sans-serif" fontSize="14" fontWeight="bold" letterSpacing="0.5">Capital Hub</text>
        </svg>
      )
    },
    {
      name: 'Dębowy Dom',
      logo: (
        <svg className="h-8 text-slate-400 hover:text-slate-600 transition-colors duration-200" viewBox="0 0 160 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M25,5 L10,22 L15,22 L15,40 L35,40 L35,22 L40,22 L25,5 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="25" cy="25" r="5" />
          <text x="50" y="30" fontFamily="sans-serif" fontSize="13" fontWeight="bold" letterSpacing="0.5">Dębowy Dom</text>
        </svg>
      )
    },
    {
      name: 'Vertex Solutions',
      logo: (
        <svg className="h-8 text-slate-400 hover:text-slate-600 transition-colors duration-200" viewBox="0 0 160 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <polygon points="25,7 40,16 40,34 25,43 10,34 10,16" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <polyline points="16,21 25,14 34,21" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="50" y="30" fontFamily="sans-serif" fontSize="14" fontWeight="bold" letterSpacing="1.5">VERTEX</text>
        </svg>
      )
    },
    {
      name: 'Murawski & Partners',
      logo: (
        <svg className="h-8 text-slate-400 hover:text-slate-600 transition-colors duration-200" viewBox="0 0 180 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <line x1="12" y1="38" x2="38" y2="38" stroke="currentColor" strokeWidth="3" />
          <line x1="25" y1="38" x2="25" y2="12" stroke="currentColor" strokeWidth="3" />
          <line x1="15" y1="12" x2="35" y2="12" stroke="currentColor" strokeWidth="3" />
          <text x="48" y="29" fontFamily="sans-serif" fontSize="11" fontWeight="bold" letterSpacing="1">MURAWSKI</text>
          <text x="48" y="41" fontFamily="sans-serif" fontSize="9" fontWeight="semibold" opacity="0.7" letterSpacing="0.5">&amp; PARTNERS</text>
        </svg>
      )
    },
    {
      name: 'Baltic Logistics',
      logo: (
        <svg className="h-8 text-slate-400 hover:text-slate-600 transition-colors duration-200" viewBox="0 0 180 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M8,15 L25,15 L32,25 L25,35 L8,35 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <line x1="14" y1="20" x2="24" y2="20" stroke="currentColor" strokeWidth="2" />
          <line x1="14" y1="30" x2="24" y2="30" stroke="currentColor" strokeWidth="2" />
          <text x="40" y="30" fontFamily="sans-serif" fontSize="12" fontWeight="bold" letterSpacing="0.5">BALTIC LOGISTICS</text>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-slate-50/60 border-y border-slate-100" id="klienci">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800 uppercase tracking-wide">
            Zaufanie B2B & B2C
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            Zaufali nam - Klienci ADAR MEBLE
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Wyposażamy biura warszawskich firm, realizujemy projekty dla deweloperów oraz doradzamy klientom indywidualnym.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-10 gap-x-8 items-center justify-items-center opacity-85">
          {clients.map((client, idx) => (
            <div key={idx} className="flex items-center justify-center p-4 bg-white rounded-xl border border-slate-100/80 shadow-sm w-full max-w-[200px] h-16 transform hover:-translate-y-0.5 transition-all duration-200">
              {client.logo}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
