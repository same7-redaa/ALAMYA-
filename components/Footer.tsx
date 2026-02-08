
import React from 'react';
import { useLanguage } from './LanguageContext';
import { NAV_ITEMS } from '../constants';
import { Facebook, Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-blue-950 text-white pt-16 md:pt-24 pb-8 md:pb-12 relative border-t border-white/5">
      <div className="absolute top-0 right-1/4 w-px h-full bg-white/5 hidden md:block"></div>
      
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-20">
          {/* Brand */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase leading-none">
              EL ALAMYA <br />
              <span className="text-red-600 text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] block mt-2">ELECTROMECHANICAL</span>
            </h3>
            <p className="text-blue-200 text-xs md:text-sm leading-relaxed opacity-70">
              {t({
                en: 'Pioneering MEP engineering solutions across the region with an unwavering focus on technical integrity.',
                ar: 'ريادة الحلول الهندسية الكهروميكانيكية مع التركيز المستمر على النزاهة الفنية والابتكار.'
              })}
            </p>
            <div className="flex gap-3 md:gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 md:w-10 md:h-10 border-2 border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all shadow-lg">
                  <Icon size={16} className="md:w-[18px] md:h-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-red-600 mb-6 md:mb-8">
              {t({ en: 'Navigation', ar: 'التنقل' })}
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-xs md:text-sm font-bold text-blue-100 hover:text-white hover:translate-x-2 rtl:hover:-translate-x-2 transition-all block">
                    {t(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-red-600 mb-6 md:mb-8">
              {t({ en: 'Division', ar: 'الأقسام' })}
            </h4>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm font-bold text-blue-100">
              <li>HVAC // SYSTEMS</li>
              <li>ELV // INFRASTRUCTURE</li>
              <li>FIRE // PROTECTION</li>
              <li>SMART // AUTOMATION</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-red-600 mb-6 md:mb-8">
              {t({ en: 'Updates', ar: 'التحديثات' })}
            </h4>
            <div className="flex flex-col gap-3 md:gap-4">
              <input 
                type="email" 
                placeholder={t({ en: 'EMAIL ADDRESS', ar: 'البريد الإلكتروني' })} 
                className="bg-transparent border-2 border-white/10 px-3 md:px-4 py-3 md:py-4 text-[9px] md:text-[10px] font-black tracking-wider md:tracking-widest outline-none focus:border-red-600 transition-all uppercase"
              />
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-white hover:to-white hover:text-red-600 px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-xs font-black uppercase tracking-wider md:tracking-widest transition-all border-2 border-red-600 shadow-lg">
                {t({ en: 'SUBSCRIBE', ar: 'اشتراك' })}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 border-t border-white/10 pt-8 md:pt-12">
          <p className="text-[8px] md:text-[10px] font-black uppercase tracking-wider md:tracking-widest opacity-40 text-center md:text-left">
            © {new Date().getFullYear()} EL ALAMYA // MEP ENGINEERING // REGISTERED
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 md:w-12 md:h-12 border border-white/10 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all group"
          >
            <ArrowUp size={18} className="md:w-5 md:h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
