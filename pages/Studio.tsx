import React from 'react';
import { Button } from '../components/Button';
import { Mic, Camera, Monitor, Zap } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import { Link } from 'react-router-dom';

export const Studio: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%" className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">LinkOn Studio</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('studio.desc')}
          </p>
        </Reveal>

        {/* Feature Image */}
        <Reveal width="100%" animation="zoom-in" className="rounded-3xl overflow-hidden aspect-[21/9] mb-20 relative group">
          <img src="https://picsum.photos/id/452/1600/800" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Studio Wide" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20">
            <h2 className="text-3xl font-bold mb-2 text-white">Main Cyclorama Hall</h2>
            <p className="text-slate-300">Available for booking 24/7</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            { icon: Mic, title: "Podcast Station", desc: "Shure SM7B Mics, Rodecaster Pro." },
            { icon: Camera, title: "Photo/Video", desc: "Sony FX3 Cinema Line, Godox Light." },
            { icon: Monitor, title: "Editing Suite", desc: "Mac Studio M2 Ultra workstations." },
            { icon: Zap, title: "Live Streaming", desc: "High-speed fiber dedicated for streams." },
          ].map((item, i) => (
             <Reveal key={i} delay={i * 100} animation="fade-up" className="h-full">
               <div className="glass-panel p-6 rounded-2xl h-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 border border-white/5 hover:border-indigo-500/30">
                 <item.icon className="text-indigo-400 mb-4" size={32} />
                 <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                 <p className="text-sm text-slate-400">{item.desc}</p>
               </div>
             </Reveal>
          ))}
        </div>

        <Reveal width="100%" className="text-center">
          <Link to="/contact">
            <Button size="lg" className="shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40">{t('studio.cta')}</Button>
          </Link>
        </Reveal>
      </div>
    </div>
  );
};
