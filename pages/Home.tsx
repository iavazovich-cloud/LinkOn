import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowRight, CheckCircle2, PlayCircle, Star } from 'lucide-react';
import { SERVICE_ICONS } from '../constants';
import { Reveal } from '../components/Reveal';
import { useLanguage } from '../context/LanguageContext';

const OrbitVisual: React.FC = () => {
  return (
    <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center hover:scale-105 transition-transform duration-700">
      {/* Center Content */}
      <div className="absolute z-20 text-center animate-float">
        <div className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          20k+
        </div>
        <div className="text-sm sm:text-base text-slate-400 mt-2">Specialists Reached</div>
      </div>

      {/* Orbit Rings */}
      <div className="absolute w-[100%] h-[100%] rounded-full border border-white/5 orbit-ring">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center border border-white/10 shadow-lg shadow-indigo-500/20 overflow-hidden orbit-item-reverse hover:scale-125 transition-transform cursor-pointer">
           <img src="https://picsum.photos/id/64/100/100" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" alt="Avatar" />
        </div>
      </div>
      
      <div className="absolute w-[70%] h-[70%] rounded-full border border-white/10 orbit-ring-reverse">
         <div className="absolute bottom-[10%] right-[10%] w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/40 orbit-item hover:scale-125 transition-transform cursor-pointer">
            <Star size={20} fill="white" className="text-white" />
         </div>
      </div>

      <div className="absolute w-[45%] h-[45%] rounded-full border border-white/5 orbit-ring">
         <div className="absolute top-[30%] -left-[5%] w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30 orbit-item-reverse hover:scale-125 transition-transform cursor-pointer">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
         </div>
      </div>

      {/* Glow */}
      <div className="absolute w-full h-full bg-indigo-500/5 blur-[80px] rounded-full z-0 animate-pulse" />
    </div>
  );
};

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-10">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
          
          <Reveal animation="slide-in" className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 hover:bg-white/10 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              {t('hero.badge')}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              {t('hero.titleLine1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">{t('hero.titleHighlight')}</span> <br />
              {t('hero.titleLine2')} <br />
              {t('hero.titleLine3')}
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="group shadow-indigo-500/20 shadow-lg">
                  {t('hero.ctaPrimary')} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="group">
                  {t('hero.ctaSecondary')}
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-4 text-slate-500 text-sm">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <img key={i} src={`https://picsum.photos/id/${100+i}/50/50`} alt="Client" className="w-10 h-10 rounded-full border-2 border-[#050507] hover:scale-110 hover:z-10 transition-transform duration-300" />
                 ))}
              </div>
              <p>{t('hero.trustedBy')}</p>
            </div>
          </Reveal>

          <Reveal animation="fade-in" delay={300} className="flex justify-center lg:justify-end">
            <OrbitVisual />
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <Reveal width="100%" className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-slate-400">{t('services.subtitle')}</p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SERVICE_ICONS).map(([key, Icon], index) => {
             const item = t(`services.items.${key}`);
             return (
              <Reveal key={key} delay={index * 100} animation="fade-up">
                <Link to="/services" className="block h-full">
                  <div className="glass-panel glass-panel-hover p-8 rounded-2xl transition-all duration-300 group h-full border border-transparent hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-300 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                      {item.desc}
                    </p>
                    <ul className="space-y-2">
                      {item.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-center text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 group-hover:scale-125 transition-transform" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <Reveal width="100%" className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">{t('portfolio.title')}</h2>
            <p className="text-slate-400">{t('portfolio.subtitle')}</p>
          </div>
          <Link to="/portfolio" className="hidden md:block text-indigo-400 hover:text-indigo-300 transition-colors hover:translate-x-1 duration-300">{t('portfolio.viewAll')} &rarr;</Link>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
           <Reveal delay={100} className="w-full">
             <Link to="/portfolio">
               <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer">
                  <img src="https://picsum.photos/id/201/800/600" alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-indigo-400 text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Branding</span>
                    <h3 className="text-2xl font-bold group-hover:text-white transition-colors">Tashkent Coffee Roasters</h3>
                  </div>
               </div>
             </Link>
           </Reveal>
           <Reveal delay={200} className="w-full">
             <Link to="/portfolio">
               <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer">
                  <img src="https://picsum.photos/id/392/800/600" alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-pink-400 text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Social Media</span>
                    <h3 className="text-2xl font-bold group-hover:text-white transition-colors">Urban Fashion Week</h3>
                  </div>
               </div>
             </Link>
           </Reveal>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link to="/portfolio" className="text-indigo-400 hover:text-indigo-300">{t('portfolio.viewAll')} &rarr;</Link>
        </div>
      </section>

      {/* Studio CTA */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <Reveal width="100%" animation="zoom-in">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-white/10 p-8 md:p-16 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-pink-500/30 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('studio.title')}</h2>
                 <p className="text-slate-300 mb-8 text-lg">
                   {t('studio.desc')}
                 </p>
                 <ul className="grid grid-cols-2 gap-4 mb-8">
                   {t('studio.features').map((item: string, i: number) => (
                     <li key={i} className="flex items-center gap-2 text-slate-400">
                       <CheckCircle2 size={16} className="text-indigo-400" /> {item}
                     </li>
                   ))}
                 </ul>
                 <Link to="/studio">
                   <Button variant="secondary" className="shadow-lg hover:shadow-white/20">{t('studio.cta')}</Button>
                 </Link>
              </div>
              <div className="relative">
                <Link to="/studio">
                  <div className="w-full md:w-[400px] aspect-video rounded-xl bg-black/50 overflow-hidden border border-white/10 flex items-center justify-center group cursor-pointer shadow-2xl">
                     <img src="https://picsum.photos/id/453/800/500" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" alt="Studio" />
                     <PlayCircle size={64} className="text-white relative z-10 opacity-80 group-hover:scale-110 group-hover:text-indigo-400 transition-all duration-300" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
};
