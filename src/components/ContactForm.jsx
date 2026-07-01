import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const [step, setStep] = useState(1);
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      category: 'biuro', // default
      // Kitchen path
      kitchenLayout: 'Z wyspą',
      kitchenStyle: 'Nowoczesny',
      kitchenStatus: 'Gotowe',
      kitchenAppliances: 'Tak',
      // Office path
      officeStations: '1-4',
      officeItems: [],
      officeAdjustable: 'Tak',
      officeLayoutPlan: 'Nie',
      // Wardrobe path
      wardrobeDoorType: 'Przesuwne',
      wardrobeFrame: 'Aluminiowe',
      wardrobeItems: [],
      wardrobeHasDimensions: 'Nie',
      // Common Step 3
      location: '',
      priority: 'Stosunek jakości do ceny',
      difficulties: [],
      gdprConsent: false
    }
  });

  const selectedCategory = watch('category');

  // Pre-fill context when custom event triggers
  useEffect(() => {
    const handleSetContext = (event) => {
      const { category, style } = event.detail;
      if (category === 'kuchnia') {
        setValue('category', 'kuchnia');
        // Match style with select options
        if (['Nowoczesny', 'Klasyczny', 'Loft', 'Glamour'].includes(style)) {
          setValue('kitchenStyle', style);
        }
      } else if (category === 'biuro') {
        setValue('category', 'biuro');
        if (style.includes('Biurka')) {
          setValue('officeItems', ['Biurka']);
        }
        if (style.includes('Szafy')) {
          setValue('officeItems', ['Biurka', 'Szafy']);
        }
        if (style.includes('Sala Konferencyjna')) {
          setValue('officeItems', ['Sala konferencyjna']);
        }
      } else if (category === 'szafa') {
        setValue('category', 'szafa');
        if (style) {
          setValue('wardrobeDoorType', style);
        }
      }
      // Move to step 2 directly to make it clear we pre-filled
      setStep(2);
    };
    window.addEventListener('setFormContext', handleSetContext);
    return () => window.removeEventListener('setFormContext', handleSetContext);
  }, [setValue]);

  // Validation before going to next step
  const handleNextStep = async () => {
    if (step === 1) {
      const isStep1Valid = await trigger(['name', 'phone', 'email', 'category']);
      if (isStep1Valid) setStep(2);
    } else if (step === 2) {
      // Step 2 validation depends on selected category
      let fieldsToValidate = [];
      if (selectedCategory === 'kuchnia') {
        fieldsToValidate = ['kitchenLayout', 'kitchenStyle', 'kitchenStatus', 'kitchenAppliances'];
      } else if (selectedCategory === 'biuro') {
        fieldsToValidate = ['officeStations', 'officeAdjustable', 'officeLayoutPlan'];
      } else if (selectedCategory === 'szafa') {
        fieldsToValidate = ['wardrobeDoorType', 'wardrobeFrame', 'wardrobeHasDimensions'];
      }
      const isStep2Valid = await trigger(fieldsToValidate);
      if (isStep2Valid) setStep(3);
    }
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleGoToStep = async (targetStep) => {
    if (targetStep === step) return;
    
    if (targetStep < step) {
      setStep(targetStep);
    } else {
      if (step === 1 && targetStep >= 2) {
        const isStep1Valid = await trigger(['name', 'phone', 'email', 'category']);
        if (!isStep1Valid) return;
        if (targetStep === 2) {
          setStep(2);
          return;
        }
      }
      
      if (step <= 2 && targetStep === 3) {
        if (step === 1) {
          const isStep1Valid = await trigger(['name', 'phone', 'email', 'category']);
          if (!isStep1Valid) return;
        }
        
        let fieldsToValidate = [];
        if (selectedCategory === 'kuchnia') {
          fieldsToValidate = ['kitchenLayout', 'kitchenStyle', 'kitchenStatus', 'kitchenAppliances'];
        } else if (selectedCategory === 'biuro') {
          fieldsToValidate = ['officeStations', 'officeAdjustable', 'officeLayoutPlan'];
        } else if (selectedCategory === 'szafa') {
          fieldsToValidate = ['wardrobeDoorType', 'wardrobeFrame', 'wardrobeHasDimensions'];
        }
        const isStep2Valid = await trigger(fieldsToValidate);
        if (isStep2Valid) {
          setStep(3);
        }
      }
    }
  };

  const onSubmit = (data) => {
    // Construct sformatowany plain text dla klienta pocztowego (mailto:)
    let body = `KARTA ZAPYTANIA KLIENTA - ADAR MEBLE\n`;
    body += `---------------------------------\n\n`;
    body += `1. DANE KONTAKTOWE:\n`;
    body += `Imię i Nazwisko / Firma: ${data.name}\n`;
    body += `Telefon: ${data.phone}\n`;
    body += `E-mail: ${data.email}\n`;
    let pathText = '';
    if (data.category === 'kuchnia') pathText = 'Kuchnia na wymiar (B2C)';
    else if (data.category === 'biuro') pathText = 'Meble biurowe (B2B)';
    else if (data.category === 'szafa') pathText = 'Zabudowa wnęk / Szafy (B2C)';
    body += `Wybór ścieżki: ${pathText}\n\n`;

    body += `2. SZCZEGÓŁY ZAPYTANIA:\n`;
    if (data.category === 'kuchnia') {
      body += `Układ/Kształt: ${data.kitchenLayout}\n`;
      body += `Preferowany styl: ${data.kitchenStyle}\n`;
      body += `Status pomieszczenia: ${data.kitchenStatus}\n`;
      body += `Zabudowa AGD: ${data.kitchenAppliances}\n`;
    } else if (data.category === 'biuro') {
      body += `Liczba stanowisk pracy: ${data.officeStations}\n`;
      body += `Zamawiane elementy: ${data.officeItems && data.officeItems.length > 0 ? data.officeItems.join(', ') : 'Nie wybrano'}\n`;
      body += `Biurka z regulacją wysokości: ${data.officeAdjustable}\n`;
      body += `Posiada rzut/plan: ${data.officeLayoutPlan}\n`;
    } else if (data.category === 'szafa') {
      body += `System drzwi: ${data.wardrobeDoorType}\n`;
      body += `Rodzaj profilu: ${data.wardrobeFrame}\n`;
      body += `Wyposażenie: ${data.wardrobeItems && data.wardrobeItems.length > 0 ? data.wardrobeItems.join(', ') : 'Brak'}\n`;
      body += `Posiada wymiary wnęki: ${data.wardrobeHasDimensions}\n`;
    }
    body += `\n`;

    body += `3. INFORMACJE REALIZACYJNE:\n`;
    body += `Lokalizacja montażu: ${data.location || 'Nie podano'}\n`;
    body += `Główny priorytet inwestycji: ${data.priority}\n`;
    body += `Utrudnienia techniczne: ${data.difficulties && data.difficulties.length > 0 ? data.difficulties.join(', ') : 'Brak'}\n\n`;
    body += `---------------------------------\n`;
    body += `Wysłano za pomocą inteligentnego formularza wyceny Adar Meble.`;

    const subject = encodeURIComponent(`Zapytanie Ofertowe - ${data.name}`);
    const emailBody = encodeURIComponent(body);
    
    // Open mailto link
    window.location.href = `mailto:adar@adarmeble.pl?subject=${subject}&body=${emailBody}`;
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100" id="kontakt">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800 uppercase tracking-wide">
            Konfigurator wyceny
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-3">
            Skonfiguruj meble i otrzymaj wycenę
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500">
            Wypełnij nasz 3-krokowy konfigurator, a wygenerujemy dla Ciebie gotowy plik zapytania mailowego w kilka sekund.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 sm:p-10" id="kontakt-formularz">
            
            {/* Steps Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                <button
                  type="button"
                  onClick={() => handleGoToStep(1)}
                  className={`transition-colors cursor-pointer focus:outline-none hover:text-blue-600 ${
                    step >= 1 ? 'text-blue-600 font-extrabold' : 'text-slate-400'
                  }`}
                >
                  1. Kontakt & Typ
                </button>
                <button
                  type="button"
                  onClick={() => handleGoToStep(2)}
                  className={`transition-colors cursor-pointer focus:outline-none hover:text-blue-600 ${
                    step >= 2 ? 'text-blue-600 font-extrabold' : 'text-slate-400'
                  }`}
                >
                  2. Parametry
                </button>
                <button
                  type="button"
                  onClick={() => handleGoToStep(3)}
                  className={`transition-colors cursor-pointer focus:outline-none hover:text-blue-600 ${
                    step >= 3 ? 'text-blue-600 font-extrabold' : 'text-slate-400'
                  }`}
                >
                  3. Realizacja
                </button>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300 rounded-full" 
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* STEP 1: Dane kontaktowe i ścieżka */}
              {step === 1 && (
                <div className="space-y-5 animate-fadeIn">
                  <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Krok 1: Twoje dane i rodzaj mebli</h3>
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Imię i Nazwisko / Nazwa Firmy *</label>
                    <input 
                      type="text" 
                      placeholder="np. Jan Kowalski" 
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                      {...register('name', { required: 'To pole jest wymagane' })}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.name.message}</p>}
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Telefon kontaktowy *</label>
                      <input 
                        type="tel" 
                        placeholder="np. 500 600 700" 
                        className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        }`}
                        {...register('phone', { 
                          required: 'To pole jest wymagane',
                          pattern: {
                            value: /^[0-9\s\-+()]+$/,
                            message: 'Niepoprawny format numeru telefonu'
                          }
                        })}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Adres E-mail *</label>
                      <input 
                        type="email" 
                        placeholder="np. jan@domena.pl" 
                        className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all ${
                          errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                        }`}
                        {...register('email', { 
                          required: 'To pole jest wymagane',
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Niepoprawny adres e-mail'
                          }
                        })}
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.email.message}</p>}
                    </div>
                  </div>

                  {/* Path selection (Radio cards for better UI) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">Wybierz interesującą Cię ofertę *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      
                      {/* Office option */}
                      <label className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedCategory === 'biuro' 
                          ? 'border-blue-600 bg-blue-50/30' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}>
                        <input 
                          type="radio" 
                          value="biuro" 
                          className="sr-only" 
                          {...register('category')}
                        />
                        <div className="flex-grow">
                          <span className="block font-bold text-slate-900 text-sm">Biura (B2B)</span>
                          <span className="block text-xs text-slate-500 mt-1">Biurka, szafy aktowe, sale spotkań</span>
                        </div>
                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          selectedCategory === 'biuro' ? 'border-blue-600' : 'border-slate-300'
                        }`}>
                          {selectedCategory === 'biuro' && <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />}
                        </div>
                      </label>

                      {/* Kitchen option */}
                      <label className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedCategory === 'kuchnia' 
                          ? 'border-blue-600 bg-blue-50/30' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}>
                        <input 
                          type="radio" 
                          value="kuchnia" 
                          className="sr-only" 
                          {...register('category')}
                        />
                        <div className="flex-grow">
                          <span className="block font-bold text-slate-900 text-sm">Kuchnie (B2C)</span>
                          <span className="block text-xs text-slate-500 mt-1">Meble, blaty, wyspy kuchenne</span>
                        </div>
                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          selectedCategory === 'kuchnia' ? 'border-blue-600' : 'border-slate-300'
                        }`}>
                          {selectedCategory === 'kuchnia' && <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />}
                        </div>
                      </label>

                      {/* Wardrobe option */}
                      <label className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedCategory === 'szafa' 
                          ? 'border-blue-600 bg-blue-50/30' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}>
                        <input 
                          type="radio" 
                          value="szafa" 
                          className="sr-only" 
                          {...register('category')}
                        />
                        <div className="flex-grow">
                          <span className="block font-bold text-slate-900 text-sm">Szafy (B2C)</span>
                          <span className="block text-xs text-slate-500 mt-1">Zabudowa wnęk, garderoby na wymiar</span>
                        </div>
                        <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          selectedCategory === 'szafa' ? 'border-blue-600' : 'border-slate-300'
                        }`}>
                          {selectedCategory === 'szafa' && <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />}
                        </div>
                      </label>

                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2A: Parametry Kuchni */}
              {step === 2 && selectedCategory === 'kuchnia' && (
                <div className="space-y-5 animate-fadeIn">
                  <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Krok 2: Konfiguracja kuchni marzeń</h3>
                  
                  {/* Layout */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Układ / Kształt kuchni</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                      {...register('kitchenLayout')}
                    >
                      <option value="Jednorzędowa">Jednorzędowa (prosta)</option>
                      <option value="Litera L">W kształcie litery L</option>
                      <option value="Litera U">W kształcie litery U</option>
                      <option value="Z wyspą">Z wyspą kuchenną</option>
                    </select>
                  </div>

                  {/* Style */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Preferowany styl</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                      {...register('kitchenStyle')}
                    >
                      <option value="Nowoczesny">Nowoczesny (minimalistyczny, gładkie fronty)</option>
                      <option value="Klasyczny">Klasyczny (frezowane fronty, witryny)</option>
                      <option value="Loft">Loft / Industrialny (drewno z czarną stalą)</option>
                      <option value="Glamour">Glamour (połysk, marmur, zdobienia)</option>
                    </select>
                  </div>

                  {/* Room status */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Status pomieszczenia</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['Deweloperski', 'W remoncie', 'Gotowe'].map((status) => (
                        <label key={status} className="flex items-center justify-center p-3 border rounded-lg text-xs font-bold text-slate-700 cursor-pointer hover:bg-slate-50 border-slate-200 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50/20">
                          <input 
                            type="radio" 
                            value={status} 
                            className="sr-only" 
                            {...register('kitchenStatus')}
                          />
                          {status}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Appliances */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Czy planujesz zabudowę sprzętów AGD?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center text-sm font-semibold text-slate-700 cursor-pointer">
                        <input 
                          type="radio" 
                          value="Tak" 
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500" 
                          {...register('kitchenAppliances')}
                        />
                        Tak (lodówka, zmywarka itp. ukryte w zabudowie)
                      </label>
                      <label className="flex items-center text-sm font-semibold text-slate-700 cursor-pointer">
                        <input 
                          type="radio" 
                          value="Nie" 
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500" 
                          {...register('kitchenAppliances')}
                        />
                        Nie
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2B: Parametry Biura */}
              {step === 2 && selectedCategory === 'biuro' && (
                <div className="space-y-5 animate-fadeIn">
                  <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Krok 2: Konfiguracja mebli biurowych</h3>
                  
                  {/* Number of stations */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Szacowana liczba stanowisk pracy</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                      {...register('officeStations')}
                    >
                      <option value="1-4">Kameralne biuro (1 - 4 stanowiska)</option>
                      <option value="5-10">Średnie biuro (5 - 10 stanowisk)</option>
                      <option value="11-20">Większe biuro (11 - 20 stanowisk)</option>
                      <option value="20+">Open Space (ponad 20 stanowisk)</option>
                    </select>
                  </div>

                  {/* Required items (Checkboxes) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Potrzebne elementy wyposażenia (zaznacz wszystkie pasujące)</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {['Biurka', 'Szafy aktowe', 'Sala konferencyjna'].map((item) => (
                        <label key={item} className="flex items-center p-3 border rounded-lg text-xs font-bold text-slate-700 cursor-pointer hover:bg-slate-50 border-slate-200 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50/20">
                          <input 
                            type="checkbox" 
                            value={item} 
                            className="mr-2 rounded text-blue-600 focus:ring-blue-500" 
                            {...register('officeItems')}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Adjustable height desks */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Czy biurka powinny mieć elektryczną regulację wysokości?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center text-sm font-semibold text-slate-700 cursor-pointer">
                        <input 
                          type="radio" 
                          value="Tak" 
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500" 
                          {...register('officeAdjustable')}
                        />
                        Tak (ergonomiczne stanowiska sit-to-stand)
                      </label>
                      <label className="flex items-center text-sm font-semibold text-slate-700 cursor-pointer">
                        <input 
                          type="radio" 
                          value="Nie" 
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500" 
                          {...register('officeAdjustable')}
                        />
                        Nie (standardowa wysokość biurek)
                      </label>
                    </div>
                  </div>

                  {/* Layout Plan */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Czy posiadasz gotowy rzut/plan architektoniczny biura?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center text-sm font-semibold text-slate-700 cursor-pointer">
                        <input 
                          type="radio" 
                          value="Tak" 
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500" 
                          {...register('officeLayoutPlan')}
                        />
                        Tak
                      </label>
                      <label className="flex items-center text-sm font-semibold text-slate-700 cursor-pointer">
                        <input 
                          type="radio" 
                          value="Nie" 
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500" 
                          {...register('officeLayoutPlan')}
                        />
                        Nie (potrzebna pomoc w rozplanowaniu)
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2C: Parametry Szafy */}
              {step === 2 && selectedCategory === 'szafa' && (
                <div className="space-y-5 animate-fadeIn">
                  <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Krok 2: Konfiguracja szafy wnękowej</h3>
                  
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Rodzaj drzwi / system otwierania</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                      {...register('wardrobeDoorType')}
                    >
                      <option value="Przesuwne">Przesuwne (aluminiowe profile, cichy domyk)</option>
                      <option value="Uchylne">Tradycyjne uchylne (otwierane)</option>
                      <option value="Bez drzwi">Otwarta garderoba (same półki i drążki)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Preferowany rodzaj profilu / ramki</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600"
                      {...register('wardrobeFrame')}
                    >
                      <option value="Aluminiowe">Profile aluminiowe (szkło, lustro lub płyta)</option>
                      <option value="Drewniane">Brak profilu — fronty meblowe (MDF, laminat)</option>
                      <option value="Bezramkowe">System bezramowy / minimalistyczny</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Potrzebne elementy wyposażenia wewnętrznego</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['Szuflady', 'Oświetlenie LED', 'Wieszaki pantograf', 'Kosze druciane', 'Półki na buty'].map((item) => (
                        <label key={item} className="flex items-center p-3 border rounded-lg text-xs font-bold text-slate-700 cursor-pointer hover:bg-slate-50 border-slate-200 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50/20">
                          <input 
                            type="checkbox" 
                            value={item} 
                            className="mr-2 rounded text-blue-600 focus:ring-blue-500" 
                            {...register('wardrobeItems')}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Czy posiadasz wstępne wymiary wnęki?</label>
                    <div className="flex gap-6">
                      <label className="flex items-center text-sm font-semibold text-slate-700 cursor-pointer">
                        <input 
                          type="radio" 
                          value="Tak" 
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500" 
                          {...register('wardrobeHasDimensions')}
                        />
                        Tak (podam je w opisie lub podczas rozmowy)
                      </label>
                      <label className="flex items-center text-sm font-semibold text-slate-700 cursor-pointer">
                        <input 
                          type="radio" 
                          value="Nie" 
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500" 
                          {...register('wardrobeHasDimensions')}
                        />
                        Nie (potrzebny bezpłatny pomiar stolarza)
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Szczegóły montażu, priorytety i zgoda */}
              {step === 3 && (
                <div className="space-y-5 animate-fadeIn">
                  <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Krok 3: Lokalizacja i priorytety</h3>
                  
                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Lokalizacja montażu (Miasto/Dzielnica) *</label>
                    <input 
                      type="text" 
                      placeholder="np. Warszawa Wilanów, Jakubów" 
                      className={`w-full px-4 py-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all ${
                        errors.location ? 'border-red-400 bg-red-50/20' : 'border-slate-200'
                      }`}
                      {...register('location', { required: 'Lokalizacja jest wymagana do wyceny montażu' })}
                    />
                    {errors.location && <p className="mt-1 text-xs text-red-500 font-semibold">{errors.location.message}</p>}
                  </div>

                  {/* Priority */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Główny priorytet projektu</label>
                    <div className="space-y-2">
                      {[
                        'Trwałość i nowoczesne systemy (akcesoria Blum, Hettich)',
                        'Wyjątkowy design i drobiazgowe detale estetyczne',
                        'Optymalny stosunek jakości do ceny'
                      ].map((item) => (
                        <label key={item} className="flex items-center text-sm font-semibold text-slate-700 cursor-pointer">
                          <input 
                            type="radio" 
                            value={item} 
                            className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500" 
                            {...register('priority')}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Difficulties (Checkboxes) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Czy w pomieszczeniu występują utrudnienia? (zaznacz jeśli dotyczy)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {['Skosy poddasza', 'Rury instalacyjne', 'Piecyk gazowy', 'Brak kątów prostych', 'Inne'].map((item) => (
                        <label key={item} className="flex items-center p-3 border rounded-lg text-xs font-bold text-slate-700 cursor-pointer hover:bg-slate-50 border-slate-200 has-[:checked]:border-blue-600 has-[:checked]:bg-blue-50/20">
                          <input 
                            type="checkbox" 
                            value={item} 
                            className="mr-2 rounded text-blue-600 focus:ring-blue-500" 
                            {...register('difficulties')}
                          />
                          {item}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* GDPR Consent */}
                  <div className="pt-2 border-t border-slate-100">
                    <label className="flex items-start text-xs font-medium text-slate-500 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="mr-3 mt-0.5 rounded text-blue-600 focus:ring-blue-500 h-4 w-4" 
                        {...register('gdprConsent', { required: 'Musisz zaakceptować zgodę RODO, aby przesłać formularz' })}
                      />
                      <span>
                        Wyrażam zgodę na przetwarzanie moich danych osobowych przez Produkcja mebli "ADAR" w celu przygotowania oferty handlowej. Zgodnie z naszą <a href="/polityka-prywatnosci" target="_blank" className="text-blue-600 font-bold hover:underline">Polityką Prywatności</a>. *
                      </span>
                    </label>
                    {errors.gdprConsent && <p className="mt-1.5 text-xs text-red-500 font-semibold">{errors.gdprConsent.message}</p>}
                  </div>
                </div>
              )}

              {/* Form Navigation Buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-5 py-2.5 border-2 border-slate-200 text-sm font-bold rounded-lg text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Wstecz
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-100 transition-all cursor-pointer"
                  >
                    Dalej
                  </button>
                ) : (
                  <div className="w-full sm:w-auto text-right">
                    <p className="text-[11px] text-slate-500 font-medium mb-3 italic">
                      Kliknięcie przycisku otworzy Twój program pocztowy z gotowym podsumowaniem zapytania.
                    </p>
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md shadow-blue-200/50 hover:shadow-lg transition-all cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Generuj e-mail zapytania
                    </button>
                  </div>
                )}
              </div>

            </form>
          </div>
      </div>
    </section>
  );
}
