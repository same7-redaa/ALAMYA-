
import React from 'react';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Partners from './components/Partners';

const MainContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen smooth-scroll bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        
        {/* Technical Showcase Section */}
        <section className="py-16 md:py-24 bg-blue-950 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 pointer-events-none hidden lg:block"></div>
          <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
            <div className="lg:col-span-5 relative z-10">
              <span className="text-red-500 font-black tracking-[0.2em] md:tracking-[0.4em] uppercase text-[10px] md:text-xs mb-3 md:mb-4 block">
                {t({ en: 'Innovation Hub', ar: 'مركز الابتكار' })}
              </span>
              <h2 className="text-2xl md:text-6xl font-black mb-6 md:mb-8 leading-none tracking-tighter uppercase">
                {t({ en: 'Intelligent', ar: 'هندسة' })} <br />
                <span className="text-gray-500">{t({ en: 'Engineering', ar: 'ذكية' })}</span>
              </h2>
              <p className="text-blue-100 mb-6 md:mb-10 text-xs md:text-lg font-light leading-relaxed border-l-2 border-red-600 pl-4 md:pl-8 rtl:border-l-0 rtl:border-r-2 rtl:pr-4 md:rtl:pr-8">
                {t({
                  en: "We don't just build systems; we engineer smart, sustainable environments that stand the test of time.",
                  ar: "نحن لا نبني الأنظمة فحسب؛ بل نصمم بيئات ذكية ومستدامة تصمد أمام اختبار الزمن."
                })}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {[
                  { en: 'Precision Planning', ar: 'تخطيط دقيق' },
                  { en: 'ELV Integration', ar: 'تكامل الأنظمة' },
                  { en: 'Safety Protocols', ar: 'بروتوكولات السلامة' },
                  { en: 'Green Energy', ar: 'الطاقة الخضراء' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 md:gap-3 group">
                    <div className="w-1 h-5 md:h-6 bg-red-600 group-hover:h-6 md:group-hover:h-8 transition-all"></div>
                    <span className="text-xs md:text-sm font-black uppercase tracking-wider md:tracking-widest">{t(item)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-7 relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 border-l-2 border-t-2 border-white/10 hidden lg:block"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Modern Facility"
                className="w-full grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10"
              />
              <div className="absolute bottom-0 right-0 p-4 md:p-6 bg-red-600 text-white font-black uppercase text-[9px] md:text-xs tracking-[0.2em] md:tracking-[0.3em]">
                {t({ en: 'System Status: Active', ar: 'حالة النظام: نشط' })}
              </div>
            </div>
          </div>
        </section>
        
        <Partners />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;
