import React from 'react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <Reveal animation="slide-in">
            <h1 className="text-5xl font-bold mb-6">{t('contact.title')}</h1>
            <p className="text-xl text-slate-400 mb-12">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/30">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-indigo-400 transition-colors">{t('contact.visit')}</h3>
                  <p className="text-slate-400">{t('footer.address')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-pink-500/30">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-pink-400 transition-colors">{t('contact.emailUs')}</h3>
                  <p className="text-slate-400">hello@linkon.uz<br/>careers@linkon.uz</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center shrink-0 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/30">
                   <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-indigo-400 transition-colors">{t('contact.call')}</h3>
                  <p className="text-slate-400">+998 90 123 45 67<br/>Mon-Fri, 9am - 6pm</p>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 w-full rounded-2xl overflow-hidden glass-panel grayscale hover:grayscale-0 transition-all duration-700 border border-white/10 group">
              {/* Simulated Map */}
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-500 bg-[url('https://picsum.photos/id/10/800/400')] bg-cover bg-center">
                 <div className="bg-black/70 px-4 py-2 rounded-lg backdrop-blur text-sm border border-white/20 group-hover:scale-110 transition-transform">
                    LinkOn HQ - Tashkent
                 </div>
              </div>
            </div>
          </Reveal>

          {/* Form Side */}
          <Reveal animation="fade-in" delay={200} className="h-full">
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 bg-black/20 h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[50px] pointer-events-none" />
              
              <h2 className="text-2xl font-bold mb-6">{t('contact.formTitle')}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">{t('contact.name')}</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">{t('contact.phone')}</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all" placeholder="+998" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">{t('contact.email')}</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">{t('contact.interest')}</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all appearance-none cursor-pointer">
                    <option className="bg-[#050507]">{t('services.items.branding.title')}</option>
                    <option className="bg-[#050507]">{t('services.items.smm.title')}</option>
                    <option className="bg-[#050507]">{t('services.items.web.title')}</option>
                    <option className="bg-[#050507]">{t('services.items.studio.title')}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">{t('contact.details')}</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:bg-white/10 transition-all" placeholder="..."></textarea>
                </div>

                <Button size="lg" className="w-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40">{t('contact.submit')}</Button>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
};
