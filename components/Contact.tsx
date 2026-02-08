
import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-blue-50/20 via-white to-red-50/20 bg-grid relative overflow-hidden">
      <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-red-100/15 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tr from-blue-100/15 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-2 border-gray-200 shadow-2xl overflow-hidden">
          {/* Info Side */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden border-r-2 border-red-600/20">
            <div className="absolute top-0 right-0 p-4 border-l border-b border-white/5 text-[8px] font-mono tracking-widest opacity-30">ENCRYPTED_COMMS_V.2</div>
            
            <div>
              <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-6 md:mb-8 uppercase">
                {t({ en: 'Start a Project', ar: 'ابدأ مشروعك الآن' })}
              </h2>
              <p className="text-sm md:text-base text-blue-200 mb-8 md:mb-12 opacity-80 leading-relaxed">
                {t({ 
                  en: 'Connect with our engineering experts to discuss your upcoming infrastructure requirements and custom solutions.',
                  ar: 'تواصل مع خبرائنا الهندسيين لمناقشة متطلبات البنية التحتية القادمة والحلول المخصصة لمشروعك.'
                })}
              </p>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all flex-shrink-0 shadow-lg">
                    <Phone size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] md:text-[10px] font-black tracking-wider md:tracking-widest uppercase opacity-40">{t({ en: 'Direct Line', ar: 'الخط المباشر' })}</span>
                    <p className="text-base md:text-lg font-bold tracking-wider md:tracking-widest">0100 0230028</p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all flex-shrink-0 shadow-lg">
                    <Mail size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] md:text-[10px] font-black tracking-wider md:tracking-widest uppercase opacity-40">{t({ en: 'Official Mail', ar: 'البريد الرسمي' })}</span>
                    <p className="text-sm md:text-lg font-bold break-all">info@mep-innovation.com</p>
                  </div>
                </div>
                <div className="flex gap-4 md:gap-6 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all flex-shrink-0 shadow-lg">
                    <MapPin size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] md:text-[10px] font-black tracking-wider md:tracking-widest uppercase opacity-40">{t({ en: 'Headquarters', ar: 'المقر الرئيسي' })}</span>
                    <p className="text-base md:text-lg font-bold">{t({ en: 'Sheikh Zayed, Egypt', ar: 'الشيخ زايد، مصر' })}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-12 border-t border-white/10 mt-12 flex items-center gap-4 text-[10px] font-black tracking-widest uppercase opacity-50">
              <span className="text-red-500">HQ //</span> {t({ en: 'KANARIA COMPOUND', ar: 'كمبوند كناريا' })}
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 p-6 md:p-12 bg-white relative">
            <form className="space-y-8 md:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="relative group">
                  <label className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-400 mb-2 block">
                    {t({ en: 'FULL NAME', ar: 'الاسم بالكامل' })}
                  </label>
                  <input 
                    type="text" 
                    placeholder={t({ en: 'e.g. John Doe', ar: 'مثال: محمد أحمد' })}
                    className="w-full py-3 md:py-4 bg-transparent border-b-2 border-gray-100 focus:border-red-600 outline-none font-bold placeholder:text-gray-300 transition-all text-xs md:text-sm uppercase" 
                  />
                </div>
                <div className="relative group">
                  <label className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-400 mb-2 block">
                    {t({ en: 'EMAIL ADDRESS', ar: 'البريد الإلكتروني' })}
                  </label>
                  <input 
                    type="email" 
                    placeholder="name@company.com" 
                    className="w-full py-3 md:py-4 bg-transparent border-b-2 border-gray-100 focus:border-red-600 outline-none font-bold placeholder:text-gray-300 transition-all text-xs md:text-sm uppercase" 
                  />
                </div>
              </div>
              <div className="relative group">
                <label className="text-[9px] md:text-[10px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-400 mb-2 block">
                  {t({ en: 'YOUR REQUIREMENTS', ar: 'متطلباتك الهندسية' })}
                </label>
                <textarea 
                  rows={4} 
                  placeholder={t({ en: 'TELL US ABOUT YOUR PROJECT...', ar: 'أخبرنا المزيد عن مشروعك...' })}
                  className="w-full py-3 md:py-4 bg-transparent border-b-2 border-gray-100 focus:border-red-600 outline-none font-bold placeholder:text-gray-300 transition-all resize-none text-xs md:text-sm uppercase"
                ></textarea>
              </div>
              <button className="w-full md:w-auto px-8 md:px-12 py-4 md:py-6 bg-blue-950 text-white font-black uppercase tracking-wider md:tracking-widest hover:bg-red-600 transition-all flex items-center justify-center gap-3 md:gap-4 group text-xs md:text-sm">
                {t({ en: 'Submit Request', ar: 'إرسال الطلب الآن' })}
                <ArrowRight size={20} className="group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
