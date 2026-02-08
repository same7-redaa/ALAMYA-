
import React from 'react';
import { useLanguage } from './LanguageContext';
import { SERVICES } from '../constants';
import { Wind, Zap, Droplets, Flame, Cpu, FileCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  wind: <Wind size={28} />,
  zap: <Zap size={28} />,
  droplets: <Droplets size={28} />,
  flame: <Flame size={28} />,
  cpu: <Cpu size={28} />,
  'file-check': <FileCheck size={28} />,
};

const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-white via-red-50/20 to-blue-50/30 bg-grid relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-red-200/10 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-8">
          <div className="max-w-2xl relative">
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-red-600/30"></div>
            <h2 className="text-2xl md:text-5xl font-black text-blue-950 mb-3 tracking-tighter uppercase relative z-10">
              {t({ en: 'ENGINEERING SOLUTIONS', ar: 'الحلول الهندسية' })}
            </h2>
            <div className="h-1.5 w-24 md:w-32 bg-gradient-to-r from-red-600 to-blue-600"></div>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] text-[9px] md:text-[10px]">
            SECTION // 02
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id} 
              className={`p-6 md:p-8 transition-all duration-300 group hover:bg-blue-950 relative border-2 border-gray-200 hover:border-red-600 ${
                idx % 3 !== 2 ? 'md:border-r-0' : ''
              } ${idx < 3 ? 'md:border-b-0' : ''} border-b last:border-b-2 md:border-b-0 shadow-sm hover:shadow-xl hover:z-10`}
            >
              <div className="text-red-600 mb-6 group-hover:text-white group-hover:scale-110 transition-transform flex justify-between items-start">
                <div className="p-3 border-2 border-red-600/30 group-hover:border-white/30 transition-colors">
                  {iconMap[service.icon]}
                </div>
                <span className="text-2xl md:text-3xl font-black opacity-5 group-hover:opacity-10 text-blue-900 group-hover:text-white transition-opacity">0{idx + 1}</span>
              </div>
              <h3 className="text-base font-black mb-3 text-blue-950 group-hover:text-white uppercase tracking-tight">
                {t(service.title)}
              </h3>
              <p className="text-gray-500 group-hover:text-blue-100 text-xs leading-relaxed mb-6">
                {t(service.description)}
              </p>
              <div className="pt-3 border-t border-gray-50 group-hover:border-white/5">
                <span className="text-[9px] font-black uppercase tracking-widest text-red-600 group-hover:text-white">
                  Technical Docs // 2024
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
