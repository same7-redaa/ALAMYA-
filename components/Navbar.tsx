
import React, { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { NAV_ITEMS } from '../constants';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoTop = "https://i.postimg.cc/ncRdKJH3/logo-ELALAMYA-png.png";
  const logoScrolled = "https://i.postimg.cc/fLDjn2zT/logo-ELALAMYA-PNG-aswd.png";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 py-1' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center group">
          <img 
            src={isScrolled ? logoScrolled : logoTop} 
            alt="EL ALAMYA Logo" 
            className="h-10 md:h-14 w-auto object-contain transition-all duration-300"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={`text-[11px] uppercase font-bold tracking-widest hover:text-red-600 transition-colors relative group py-2 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              {t(item.label)}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')} className={`px-4 py-2 border text-[11px] font-black tracking-widest transition-all ${
            isScrolled ? 'border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white' : 'border-white text-white hover:bg-white hover:text-blue-900'
          }`}>
            {language === 'en' ? 'العربية' : 'ENGLISH'}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={isScrolled ? 'text-blue-900' : 'text-white'}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 ${language === 'ar' ? 'left-0' : 'right-0'} h-full w-[280px] bg-blue-950 z-40 transition-transform duration-300 transform ${
        isMobileMenuOpen ? 'translate-x-0' : (language === 'ar' ? '-translate-x-full' : 'translate-x-full')
      } md:hidden flex flex-col pt-20 px-6 shadow-2xl`}>
        <div className="flex flex-col space-y-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-bold text-white hover:text-red-400 uppercase tracking-wider border-b border-white/10 pb-4 transition-colors"
            >
              {t(item.label)}
            </a>
          ))}
          <button 
            onClick={() => { setLanguage(language === 'en' ? 'ar' : 'en'); setIsMobileMenuOpen(false); }}
            className="px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors mt-4"
          >
            {language === 'en' ? 'العربية' : 'ENGLISH'}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
