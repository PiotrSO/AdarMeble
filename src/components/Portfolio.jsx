import React, { useState, useEffect } from 'react';
import kitchenHero from '../assets/kitchen_hero.jpg';
import kitchenLoft from '../assets/kitchen_loft.jpg';
import kitchenGreen from '../assets/kitchen_green.jpg';
import kitchenEnglish from '../assets/kitchen_english.jpg';
import officeHero from '../assets/office_portfolio.jpg';
import officeExecutive from '../assets/office_executive.jpg';
import officeDelta from '../assets/office_delta.jpg';
import officeCowork from '../assets/office_cowork.jpg';
import officeReception from '../assets/office_reception.jpg';
import wardrobeHero from '../assets/wardrobe_builtin.jpg';
import wardrobeGlass from '../assets/wardrobe_glass.jpg';
import wardrobeSloped from '../assets/wardrobe_sloped.jpg';
import wardrobeClassic from '../assets/wardrobe_classic.jpg';
import wardrobeMirror from '../assets/wardrobe_mirror.jpg';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('biura');

  useEffect(() => {
    // Check if hash exists on initial mount
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.substring(1);
      if (['kuchnie', 'biura', 'szafy'].includes(hash)) {
        setActiveTab(hash);
      }
    }

    const handleSetTab = (event) => {
      const tabName = event.detail;
      if (tabName === 'kuchnie' || tabName === 'biura' || tabName === 'szafy' || tabName === 'szafa') {
        setActiveTab(tabName === 'szafa' ? 'szafy' : tabName);
      }
    };
    window.addEventListener('setPortfolioTab', handleSetTab);
    return () => window.removeEventListener('setPortfolioTab', handleSetTab);
  }, []);

  const offices = [
    {
      id: 'b1',
      title: 'Recepcja "Prim Corporate"',
      style: '',
      img: officeHero,
      desc: 'Nowoczesne stanowiska recepcyjne połączone z funkcjonalnym systemem przechowywania dokumentów, wykonane z trwałego laminatu.'
    },
    {
      id: 'b2',
      title: 'Gabinet "Tercet Premium"',
      style: '',
      img: officeExecutive,
      desc: 'Reprezentacyjny gabinet z orzecha amerykańskiego. Klasyczne, eleganckie biurko o stabilnej konstrukcji, wyposażone w dyskretne schowki.'
    },
    {
      id: 'b3',
      title: 'Biuro Handlowe "Delta"',
      style: '',
      img: officeDelta,
      desc: 'Nowoczesna i funkcjonalna przestrzeń typu open space z 16 zintegrowanymi stanowiskami pracy, wyposażona w ścianki działowe oraz dopasowane kontenerki podbiurkowe.'
    },
    {
      id: 'b4',
      title: 'Biuro Księgowe "Prim 28"',
      style: '',
      img: officeCowork,
      desc: 'Funkcjonalna aranżacja biura księgowego z systemowymi stanowiskami pracy, przegrodami wygłuszającymi oraz pojemną, modułową zabudową szaf aktowych.'
    },
    {
      id: 'b5',
      title: 'Recepcja "First Impression"',
      style: '',
      img: officeReception,
      desc: 'Reprezentacyjna lada recepcyjna o zaokrąglonym kształcie z elementami ze stali szczotkowanej, zestawiona z pojemną zabudową szaf aktowych.'
    }
  ];

  const kitchens = [
    {
      id: 'k1',
      title: 'Skandynawska Harmonia',
      style: 'Nowoczesny',
      img: kitchenHero,
      layout: 'Z wyspą',
      appliances: 'Zabudowa AGD: Tak',
      desc: 'Jasny dąb połączony z matową bielą i blatem z konglomeratu kwarcowego. Duża, funkcjonalna wyspa kuchenna.'
    },
    {
      id: 'k2',
      title: 'Klasyczna Butelkowa Zieleń',
      style: 'Klasyczny',
      img: kitchenGreen,
      layout: 'Litera L',
      appliances: 'Zabudowa AGD: Tak',
      desc: 'Głęboka zieleń frontów z eleganckimi frezami i szczotkowanymi uchwytami w kolorze szampańskiego złota.'
    },
    {
      id: 'k3',
      title: 'Loftowy Beton & Stal',
      style: 'Loft',
      img: kitchenLoft,
      layout: 'Jednorzędowa',
      appliances: 'Zabudowa AGD: Tak',
      desc: 'Industrialna kuchnia z ceglaną ścianą, otwartymi półkami z rur stalowych i drewna, oraz trwałym blatem ze stali nierdzewnej.'
    },
    {
      id: 'k4',
      title: 'Glamour Marmur & Połysk',
      style: 'Glamour',
      img: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=600&h=450&q=80',
      layout: 'Litera U',
      appliances: 'Zabudowa AGD: Tak',
      desc: 'Akrylowe fronty w wysokim połysku, blaty i ściany wykończone spiekiem kwarcowym wzorowanym na marmurze Carrara.'
    },
    {
      id: 'k5',
      title: 'Angielski Szyk',
      style: 'Klasyczny',
      img: kitchenEnglish,
      layout: 'Litera L',
      appliances: 'Zabudowa AGD: Nie',
      desc: 'Ciepła i przytulna zabudowa z naturalnego drewna z tradycyjnymi zdobieniami, ceramicznym zlewem oraz wiszącymi miedzianymi naczyniami.'
    }
  ];

  const wardrobes = [
    {
      id: 'w1',
      title: 'Szafa Przesuwna "Linear Oak"',
      style: 'Przesuwne',
      img: wardrobeHero,
      layout: 'System cichego domyku',
      accessories: 'Profil: Aluminiowy',
      desc: 'Zabudowa wnęki w przedpokoju z przesuwnymi frontami z naturalnego dębu oraz wbudowanym oświetleniem LED.'
    },
    {
      id: 'w2',
      title: 'Garderoba "Walk-In Glass"',
      style: 'Bez drzwi',
      img: wardrobeGlass,
      layout: 'Otwarta garderoba',
      accessories: 'Przeszklone witryny',
      desc: 'Kompleksowa otwarta garderoba z szufladami i przeszklonymi frontami ułatwiającymi organizację odzieży.'
    },
    {
      id: 'w3',
      title: 'Szafa Wnękowa "White Elegance"',
      style: 'Przesuwne',
      img: wardrobeClassic,
      layout: 'Drzwi przesuwne',
      accessories: 'Frezowane fronty MDF',
      desc: 'Klasyczna, pojemna szafa wnękowa z drzwiami przesuwnymi i frezowanymi frontami z płyt MDF w kolorze matowej bieli.'
    },
    {
      id: 'w4',
      title: 'Zabudowa Pod Skosem "Attic Master"',
      style: 'Uchylne',
      img: wardrobeSloped,
      layout: 'Szafa dopasowana do skosu',
      accessories: 'Precyzyjny laserowy dociąg',
      desc: 'Precyzyjnie docięte meble w sypialni na poddaszu, umożliwiające pełne wykorzystanie skomplikowanego kąta pomieszczenia.'
    },
    {
      id: 'w5',
      title: 'Szafa Lustrzana "Mirror Space"',
      style: 'Przesuwne',
      img: wardrobeMirror,
      layout: 'Drzwi przesuwne',
      accessories: 'Lustra bezramowe',
      desc: 'Szafa w sypialni z drzwiami przesuwnymi wykończonymi w całości taflą lustra optycznie powiększającego wnętrze.'
    }
  ];

  const handleInquire = (category, style, title) => {
    // Dispatch custom event to preset the form fields
    const event = new CustomEvent('setFormContext', {
      detail: { category, style, title }
    });
    window.dispatchEvent(event);

    // Scroll to form
    const element = document.getElementById('konfigurator');
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
    <section className="py-20 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Wybrane realizacje ADAR MEBLE
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Jako rodzinna fabryka mebli dbamy o to, by każda realizacja była dopracowana w najmniejszym detalu. Zobacz, jak łączymy rzemiosło z designem.
          </p>
        </div>

        {/* Tabs Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200 flex-wrap justify-center">
            <button
              onClick={() => setActiveTab('biura')}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'biura'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Meble biurowe (B2B)
            </button>
            <button
              onClick={() => setActiveTab('kuchnie')}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'kuchnie'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Kuchnie na wymiar (B2C)
            </button>
            <button
              onClick={() => setActiveTab('szafy')}
              className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'szafy'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Szafy wnękowe / Garderoby (B2C)
            </button>
          </div>
        </div>

        {/* Tab content (Biura) */}
        {activeTab === 'biura' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((b) => (
              <article key={b.id} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover-card-effect flex flex-col h-full">
                <div className="relative aspect-4/3 overflow-hidden bg-slate-200">
                  <img
                    src={b.img}
                    alt={b.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {b.style && (
                    <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-white/95 text-blue-600 shadow-sm">
                      {b.style}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">{b.desc}</p>
                  <div className="mt-6 pt-4 border-t border-slate-200/60">
                    <button
                      onClick={() => handleInquire('biuro', b.style, b.title)}
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 border-2 border-blue-600 text-sm font-bold rounded-lg text-blue-700 hover:bg-blue-50 active:bg-blue-100 transition-colors duration-200 cursor-pointer"
                    >
                      Zapytaj o ten styl
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Tab content (Kuchnie) */}
        {activeTab === 'kuchnie' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitchens.map((k) => (
              <article key={k.id} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover-card-effect flex flex-col h-full">
                <div className="relative aspect-4/3 overflow-hidden bg-slate-200">
                  <img
                    src={k.img}
                    alt={k.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-white/95 text-blue-600 shadow-sm">
                    Styl: {k.style}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{k.title}</h3>
                  <div className="flex gap-2 mb-4">
                    <span className="inline-block text-xs font-semibold px-2 py-1 bg-slate-200/60 rounded text-slate-700">{k.layout}</span>
                    <span className="inline-block text-xs font-semibold px-2 py-1 bg-slate-200/60 rounded text-slate-700">{k.appliances}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">{k.desc}</p>
                  <div className="mt-6 pt-4 border-t border-slate-200/60">
                    <button
                      onClick={() => handleInquire('kuchnia', k.style, k.title)}
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 border-2 border-blue-600 text-sm font-bold rounded-lg text-blue-700 hover:bg-blue-50 active:bg-blue-100 transition-colors duration-200 cursor-pointer"
                    >
                      Zapytaj o ten styl
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Tab content (Szafy) */}
        {activeTab === 'szafy' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wardrobes.map((w) => (
              <article key={w.id} className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover-card-effect flex flex-col h-full">
                <div className="relative aspect-4/3 overflow-hidden bg-slate-200">
                  <img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-white/95 text-blue-600 shadow-sm">
                    Drzwi: {w.style}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{w.title}</h3>
                  <div className="flex gap-2 mb-4">
                    <span className="inline-block text-xs font-semibold px-2 py-1 bg-slate-200/60 rounded text-slate-700">{w.layout}</span>
                    <span className="inline-block text-xs font-semibold px-2 py-1 bg-slate-200/60 rounded text-slate-700">{w.accessories}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed flex-grow">{w.desc}</p>
                  <div className="mt-6 pt-4 border-t border-slate-200/60">
                    <button
                      onClick={() => handleInquire('szafa', w.style, w.title)}
                      className="w-full inline-flex items-center justify-center px-4 py-2.5 border-2 border-blue-600 text-sm font-bold rounded-lg text-blue-700 hover:bg-blue-50 active:bg-blue-100 transition-colors duration-200 cursor-pointer"
                    >
                      Zapytaj o ten styl
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
