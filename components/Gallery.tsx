
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { GALLERY_ITEMS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const categories = [
    { id: 'all', label: { en: 'ALL PROJECTS', ar: 'كل المشاريع' } },
    { id: 'hvac', label: { en: 'HVAC', ar: 'التكييف' } },
    { id: 'electrical', label: { en: 'ELECTRICAL', ar: 'الكهرباء' } },
    { id: 'plumbing', label: { en: 'PLUMBING', ar: 'السباكة' } },
  ];

  const filtered = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(i => i.type === filter);

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % filtered.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-blue-950 text-white relative">
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-8">
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-red-600/30"></div>
            <span className="text-red-500 font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-[10px] mb-2 block bg-red-600/10 px-3 py-1 inline-block border border-red-600/30 relative z-10">
              {t({ en: 'Case Studies', ar: 'دراسات الحالة' })}
            </span>
            <h2 className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-none relative z-10">
              {t({ en: 'PROJECT', ar: 'سجل' })}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-red-500">
                {t({ en: 'ARCHIVE', ar: 'المشاريع' })}
              </span>
            </h2>
          </div>
          
          <div className="flex flex-wrap border-2 border-white/10 p-0.5 md:p-1 w-full md:w-auto gap-1 md:gap-0 bg-blue-900/30 backdrop-blur-sm shadow-lg">
            {categories.map(c => (
              <button 
                key={c.id} 
                onClick={() => { setFilter(c.id); setSelectedIndex(0); }}
                className={`flex-1 md:flex-none px-3 md:px-4 py-2 md:py-2.5 text-[8px] md:text-[9px] font-black tracking-wider md:tracking-widest transition-all border border-transparent ${
                  filter === c.id ? 'bg-gradient-to-r from-red-600 to-red-700 text-white border-red-500 shadow-md' : 'hover:bg-white/10 hover:border-white/30'
                }`}
              >
                {t(c.label)}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Gallery View - Large Image + Thumbnails */}
        <div className="grid grid-cols-1 lg:hidden gap-4 md:gap-6">
          {/* Large Image */}
          <div className="relative group">
            <div className="relative overflow-hidden bg-gray-900 border-4 border-white/20 aspect-video shadow-2xl">
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-red-600 z-10"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-red-600 z-10"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500 z-10"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500 z-10"></div>
              
              <img 
                src={filtered[selectedIndex]?.image} 
                alt={t(filtered[selectedIndex]?.title)}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-2 border-white/30 flex items-center justify-center transition-all group/btn shadow-xl z-20"
              >
                <ChevronLeft size={24} className="group-hover/btn:scale-125 transition-transform" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 border-2 border-white/30 flex items-center justify-center transition-all group/btn shadow-xl z-20"
              >
                <ChevronRight size={24} className="group-hover/btn:scale-125 transition-transform" />
              </button>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-950 via-blue-950/95 to-transparent border-t-2 border-red-600/30">
                <span className="text-red-500 text-[9px] font-black tracking-[0.3em] uppercase mb-2 block bg-red-600/20 px-2 py-1 inline-block border border-red-600/50">{filtered[selectedIndex]?.type}</span>
                <h4 className="text-base font-black leading-none uppercase mb-2">{t(filtered[selectedIndex]?.title)}</h4>
                <div className="flex justify-between items-center text-[9px] font-mono opacity-60 border-t border-white/10 pt-2">
                  <span className="bg-blue-900/50 px-2 py-1">REF_M_2024_{selectedIndex}</span>
                  <span className="bg-red-900/50 px-2 py-1">{selectedIndex + 1} / {filtered.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex flex-row gap-3 overflow-x-auto pb-2 custom-scrollbar">
            {filtered.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => setSelectedIndex(idx)}
                className={`relative flex-shrink-0 w-32 h-24 overflow-hidden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl ${
                  idx === selectedIndex 
                    ? 'border-4 border-red-600 shadow-2xl shadow-red-600/40 scale-105' 
                    : 'border-2 border-white/20 hover:border-white/50'
                }`}
              >
                <img 
                  src={item.image} 
                  alt={t(item.title)}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    idx === selectedIndex ? 'grayscale-0' : 'grayscale opacity-60'
                  }`}
                />
                
                {/* Thumbnail Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${idx === selectedIndex ? 'from-blue-950/90' : 'from-blue-950/80'} to-transparent flex items-end p-2 transition-all`}>
                  <div className="w-full">
                    <span className={`text-[7px] font-black uppercase block mb-1 tracking-wider px-1 ${idx === selectedIndex ? 'text-white bg-red-600' : 'text-red-500'}`}>{item.type}</span>
                    <h5 className="text-[9px] font-bold uppercase leading-tight line-clamp-2">{t(item.title)}</h5>
                  </div>
                </div>

                {/* Active Indicator */}
                {idx === selectedIndex && (
                  <>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-lg shadow-red-600/50 z-10"></div>
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Gallery View - Grid Layout */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-3">
          {filtered.map((item, idx) => (
            <div 
              key={item.id} 
              className={`group relative overflow-hidden bg-gray-900 border-2 border-white/10 hover:border-red-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:z-10 ${
                idx === 0 ? 'sm:col-span-2 sm:row-span-2' : 
                idx === 3 ? 'sm:col-span-2 sm:row-span-1' : ''
              }`}
            >
              <img 
                src={item.image} 
                alt={t(item.title)}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              
              <div className="absolute top-4 left-4 border-l border-t border-white/30 w-6 h-6 group-hover:border-red-600 transition-colors"></div>
              <div className="absolute bottom-4 right-4 border-r border-b border-white/30 w-6 h-6 group-hover:border-red-600 transition-colors"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-red-500 text-[9px] font-black tracking-[0.3em] uppercase mb-1">{item.type}</span>
                <h4 className="text-lg font-black leading-none uppercase">{t(item.title)}</h4>
                <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                  <span className="text-[9px] font-mono opacity-50 tracking-tighter">REF_M_2024_{idx}</span>
                  <span className="text-[10px] font-black hover:text-red-500 transition-colors uppercase tracking-widest">{t({ en: 'DETAILS', ar: 'التفاصيل' })} +</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

