
import React from 'react';
import { useLanguage } from './LanguageContext';

const Partners: React.FC = () => {
  const { t } = useLanguage();
  
  const partners = [
    { name: "SIEMENS", id: "001", country: "DE" },
    { name: "SCHNEIDER", id: "002", country: "FR" },
    { name: "CARRIER", id: "003", country: "US" },
    { name: "DAIKIN", id: "004", country: "JP" },
    { name: "HONEYWELL", id: "005", country: "US" },
    { name: "GRUNDFOS", id: "006", country: "DK" },
    { name: "ABB", id: "007", country: "CH" },
    { name: "MITSUBISHI", id: "008", country: "JP" },
    { name: "LG", id: "009", country: "KR" },
    { name: "SAMSUNG", id: "010", country: "KR" },
    { name: "TRANE", id: "011", country: "US" },
    { name: "YORK", id: "012", country: "US" }
  ];

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-red-50/10 via-white to-blue-50/10 relative overflow-hidden border-y border-gray-200">
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-red-100/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex items-center gap-3 md:gap-6 mb-10 md:mb-16">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent flex-grow"></div>
          <h3 className="text-blue-950 font-black tracking-[0.15em] md:tracking-[0.3em] uppercase text-center text-[10px] md:text-lg px-2 bg-white/80 backdrop-blur-sm py-2 border-2 border-gray-200 shadow-sm">
            {t({ en: 'APPROVED TECHNOLOGY PARTNERS', ar: 'شركاء التكنولوجيا المعتمدون' })}
          </h3>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-red-600 to-transparent flex-grow"></div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {partners.map((partner, i) => (
            <div 
              key={i} 
              className="group relative p-6 md:p-12 border-2 border-gray-200 flex flex-col items-center justify-center hover:bg-blue-950 hover:border-red-600 transition-all duration-500 overflow-hidden min-h-[100px] md:min-h-[140px] shadow-sm hover:shadow-xl"
            >
              {/* Technical Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Partner Name */}
              <span className="text-sm md:text-2xl font-black text-gray-700 group-hover:text-white transition-all duration-500 tracking-tight text-center">
                {partner.name}
              </span>
              
              {/* Background scanning effect */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-red-600/50 -translate-y-full group-hover:translate-y-[400px] transition-all duration-[2s] ease-linear"></div>
            </div>
          ))}
        </div>

        <div className="mt-10 md:mt-16 flex flex-col md:flex-row justify-between items-center text-[7px] md:text-[10px] font-black tracking-wider md:tracking-widest text-gray-400 uppercase gap-3 md:gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500"></span>
            {t({ en: 'ALL SYSTEMS OPERATIONAL', ar: 'جميع الأنظمة تعمل بكفاءة' })}
          </div>
          <div>{t({ en: 'VERIFICATION STATUS: CERTIFIED', ar: 'حالة التحقق: معتمد' })}</div>
          <div className="hidden md:block">{t({ en: 'REF_CODE: ALAMYA_V_2024', ar: 'كود المرجع: العالمية_2024' })}</div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
