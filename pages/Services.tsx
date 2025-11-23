import React from 'react';
import { SERVICE_ICONS } from '../constants';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%" className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-xl text-slate-400">
            {t('services.subtitle')}
          </p>
        </Reveal>

        <div className="space-y-32">
          {Object.entries(SERVICE_ICONS).map(([key, Icon], idx) => {
            const service = t(`services.items.${key}`);
            return (
              <Reveal key={key} width="100%">
                <div className={`flex flex-col gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center group`}>
                  
                  <div className="flex-1 space-y-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-indigo-500/10">
                      <Icon size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold group-hover:text-indigo-300 transition-colors duration-300">{service.title}</h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                      {service.desc}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      {service.features.map((feature: string, fIdx: number) => (
                        <div key={fIdx} className="flex items-center gap-3 p-4 rounded-xl glass-panel hover:bg-white/10 transition-colors duration-300 cursor-default">
                           <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                             <Check size={14} className="text-indigo-400" />
                           </div>
                           <span className="font-medium text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6">
                      <Link to="/contact">
                        <Button variant="outline" className="hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition-all">{t('nav.startProject')}</Button>
                      </Link>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass-panel p-2 group-hover:shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500">
                      <img 
                        src={`https://picsum.photos/800/600?random=${idx}`} 
                        alt={service.title}
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Decorative Elements */}
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500 blur-[60px] opacity-40 pointer-events-none group-hover:opacity-60 transition-opacity" />
                      <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-500 blur-[60px] opacity-40 pointer-events-none group-hover:opacity-60 transition-opacity" />
                    </div>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* FAQ Section */}
        <Reveal width="100%" delay={200} className="mt-32 max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">FAQ</h3>
          <div className="space-y-4">
            {[
              { q: "Do you work with international clients?", a: "Yes, we tailor our solutions to fit your specific needs. Contact us for a detailed proposal based on your requirements." },
              { q: "What is your pricing model?", a: "We offer both project-based and retainer models depending on your long-term goals." },
              { q: "How long does a branding project take?", a: "Typically 4-6 weeks for a complete identity system." },
            ].map((item, i) => (
              <details key={i} className="group glass-panel rounded-xl hover:bg-white/5 transition-colors">
                <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-lg select-none">
                  {item.q}
                  <span className="transition-transform duration-300 group-open:rotate-180 text-indigo-400">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="group-open:animate-fadeIn px-6 pb-6 text-slate-400 leading-relaxed">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};
