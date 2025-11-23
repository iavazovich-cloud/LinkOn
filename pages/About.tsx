import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-10 pb-20">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <Reveal width="100%" animation="fade-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">{t('about.title')}</h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </Reveal>
      </div>

      {/* Image Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <Reveal width="100%" animation="zoom-in" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[500px]">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative group">
              <img src="https://picsum.photos/id/435/800/800" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Team meeting" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-lg">Collaborative Spirit</span>
              </div>
            </div>
            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group">
              <img src="https://picsum.photos/id/338/400/400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Office detail" />
            </div>
             <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden group">
              <img src="https://picsum.photos/id/180/400/400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Laptop work" />
            </div>
             <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden relative group">
              <img src="https://picsum.photos/id/1/800/400" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Coding" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-24">
        {['boldness', 'precision', 'local'].map((val, i) => (
          <Reveal key={val} delay={i * 150} animation="fade-up">
            <div className="glass-panel p-8 rounded-2xl border-t border-indigo-500/50 hover:bg-white/5 transition-colors duration-300 h-full group">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{t(`about.values.${val}.title`)}</h3>
              <p className="text-slate-400 leading-relaxed">{t(`about.values.${val}.desc`)}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Team Stats */}
      <div className="border-y border-white/5 bg-white/5 py-16">
        <Reveal width="100%" className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           {[
             { num: "5+", label: "exp" },
             { num: "120+", label: "projects" },
             { num: "25", label: "team" },
             { num: "100%", label: "sat" }
           ].map((stat, i) => (
             <div key={i} className="group cursor-default">
               <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 mb-2 group-hover:from-indigo-400 group-hover:to-pink-400 transition-all duration-300">{stat.num}</div>
               <div className="text-slate-400 font-medium">{t(`about.stats.${stat.label}`)}</div>
             </div>
           ))}
        </Reveal>
      </div>
    </div>
  );
};
