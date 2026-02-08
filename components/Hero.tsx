
import React from 'react';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden bg-blue-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover grayscale opacity-40"
          alt="Technical Background"
        />
        <div className="absolute inset-0 bg-grid opacity-10"></div>
      </div>

      <div className="absolute top-20 left-0 w-full h-px bg-white/5 z-10"></div>
      <div className="absolute top-0 left-20 w-px h-full bg-white/5 z-10"></div>

      <div className="container mx-auto px-6 md:px-12 z-20">
        <div className="max-w-5xl border-l-4 border-red-600 pl-6 md:pl-8 rtl:border-l-0 rtl:border-r-4 rtl:pr-6 md:rtl:pr-8 relative">
          {/* Decorative Corner */}
          <div className="absolute -top-4 -left-2 w-8 h-8 border-t-2 border-l-2 border-red-600/50 rtl:-left-auto rtl:-right-2 rtl:border-l-0 rtl:border-r-2"></div>
          <div className="absolute -bottom-4 -left-2 w-8 h-8 border-b-2 border-l-2 border-blue-500/50 rtl:-left-auto rtl:-right-2 rtl:border-l-0 rtl:border-r-2"></div>
          
          <span className="text-red-500 font-black tracking-[0.2em] md:tracking-[0.4em] uppercase mb-3 md:mb-4 block animate-fade-in text-[9px] md:text-xs bg-red-600/10 px-3 py-1 inline-block border border-red-600/30">
            {t({ en: 'Excellence in Engineering', ar: 'التميز في الحلول الهندسية' })}
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight tracking-tighter uppercase">
            {t({ en: 'EL ALAMYA', ar: 'العالمية' })} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 block lg:inline">
              {t({ en: 'ELECTROMECHANICAL', ar: 'للمقاولات الكهروميكانيكية' })}
            </span>
          </h1>
          <p className="text-xs md:text-lg lg:text-xl text-blue-100 max-w-4xl mb-8 md:mb-12 font-light tracking-wide leading-relaxed">
            {t({ 
              en: 'Integrated Electromechanical Solutions for Modern Buildings & Infrastructure', 
              ar: 'حلول كهروميكانيكية متكاملة للمباني الحديثة والبنية التحتية المتطورة' 
            })}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a href="#contact" className="px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-red-600 to-red-700 text-white font-black uppercase tracking-wide md:tracking-widest hover:from-white hover:to-white hover:text-red-600 transition-all border-2 border-red-600 text-[10px] md:text-xs text-center shadow-lg hover:shadow-2xl hover:shadow-red-600/30">
              {t({ en: 'Request Proposal', ar: 'اطلب عرض سعر' })}
            </a>
            <a href="#services" className="px-6 md:px-10 py-3 md:py-5 border-2 border-white/50 bg-white/5 backdrop-blur-sm text-white font-black uppercase tracking-wide md:tracking-widest hover:bg-white hover:text-blue-900 transition-all text-[10px] md:text-xs text-center shadow-lg hover:shadow-2xl">
              {t({ en: 'View Services', ar: 'استكشف خدماتنا' })}
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-20 hidden sm:block">
        <div className="flex flex-col items-end">
          <div className="text-red-600 font-mono text-[8px] tracking-[0.5em] mb-1 uppercase">System_Coordinates</div>
          <div className="text-white font-mono text-[10px] md:text-xs tracking-widest">29.98°N / 31.13°E</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
