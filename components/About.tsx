
import React from 'react';
import { useLanguage } from './LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-red-50/20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
              <span className="w-6 md:w-12 h-1 bg-gradient-to-r from-red-600 to-blue-600"></span>
              <span className="text-red-600 font-black tracking-[0.15em] md:tracking-[0.3em] uppercase text-[9px] md:text-xs bg-red-50 px-3 py-1 border border-red-200">{t({ en: 'Company Profile', ar: 'ملف الشركة' })}</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-blue-950 mb-5 md:mb-8 tracking-tighter uppercase leading-tight relative">
              <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-blue-600/20"></div>
              Engineering <br />
              Integrity & <br />
              <span className="text-gray-400">Innovation</span>
            </h2>
            <p className="text-xs md:text-base text-gray-700 mb-6 md:mb-10 leading-relaxed border-l-2 border-gray-100 pl-4 md:pl-8 rtl:border-l-0 rtl:border-r-2 rtl:pr-4 md:rtl:pr-8">
              {t({
                en: 'A leading MEP company specialized in delivering integrated electromechanical solutions through a highly qualified multidisciplinary team.',
                ar: 'نحن شركة رائدة في مجال الحلول الكهروميكانيكية المتكاملة، نقدم حلولًا شاملة عبر فريق متخصص وعالي التأهيل.'
              })}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-white p-5 md:p-6 group hover:bg-gradient-to-br hover:from-red-600 hover:to-red-700 transition-all duration-500 border-2 border-blue-100 hover:border-red-600 shadow-sm hover:shadow-xl">
                <h3 className="text-xs md:text-base font-black mb-2 text-blue-950 group-hover:text-white transition-colors uppercase">Our Vision</h3>
                <p className="text-[10px] md:text-xs text-gray-600 group-hover:text-red-100 transition-colors leading-relaxed">Achieving global excellence in engineering standards.</p>
              </div>
              <div className="bg-gradient-to-br from-white to-blue-50 p-5 md:p-6 group hover:bg-gradient-to-br hover:from-blue-900 hover:to-blue-950 transition-all duration-500 border-2 border-blue-100 hover:border-blue-600 shadow-sm hover:shadow-xl">
                <h3 className="text-xs md:text-base font-black mb-2 text-blue-950 group-hover:text-white transition-colors uppercase">Our Mission</h3>
                <p className="text-[10px] md:text-xs text-gray-600 group-hover:text-blue-100 transition-colors leading-relaxed">Lighting the path to the future through technical mastery.</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative min-h-[280px] md:min-h-[400px]">
            <div className="absolute inset-0 p-2 md:p-4 bg-gradient-to-br from-gray-100 to-blue-50 border-2 border-gray-300 shadow-lg">
              <img 
                src="https://i.postimg.cc/rsp1zDRh/587784598-18083924261100635-3056021088851178702-n.jpg" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white"
                alt="Profile"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-950 to-blue-900 text-white p-5 md:p-8 min-w-[120px] md:min-w-[160px] text-center border-t-4 border-red-600 shadow-2xl">
                <span className="text-3xl md:text-5xl font-black block mb-1">10+</span>
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] opacity-60">Years of Mastery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
