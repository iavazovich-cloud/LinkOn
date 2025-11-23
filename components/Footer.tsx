import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Reveal';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 bg-[#050507] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <Logo />
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('footer.tagline')}
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-600 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/30">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/30">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-6">{t('footer.services')}</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors hover:pl-2 duration-300 block">{t('services.items.branding.title')}</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors hover:pl-2 duration-300 block">{t('services.items.smm.title')}</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors hover:pl-2 duration-300 block">{t('services.items.production.title')}</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors hover:pl-2 duration-300 block">{t('services.items.ads.title')}</Link></li>
                <li><Link to="/services" className="hover:text-indigo-400 transition-colors hover:pl-2 duration-300 block">{t('services.items.web.title')}</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-white mb-6">{t('footer.company')}</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><Link to="/about" className="hover:text-indigo-400 transition-colors hover:pl-2 duration-300 block">{t('nav.about')}</Link></li>
                <li><Link to="/portfolio" className="hover:text-indigo-400 transition-colors hover:pl-2 duration-300 block">{t('nav.portfolio')}</Link></li>
                <li><Link to="/blog" className="hover:text-indigo-400 transition-colors hover:pl-2 duration-300 block">{t('nav.blog')}</Link></li>
                <li><Link to="/contact" className="hover:text-indigo-400 transition-colors hover:pl-2 duration-300 block">{t('nav.startProject')}</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white mb-6">{t('footer.contact')}</h3>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3 group cursor-pointer">
                  <MapPin size={18} className="text-indigo-500 shrink-0 mt-0.5 group-hover:animate-bounce" />
                  <span className="group-hover:text-white transition-colors">{t('footer.address')}</span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <Phone size={18} className="text-indigo-500 shrink-0 group-hover:rotate-12 transition-transform" />
                  <span className="group-hover:text-white transition-colors">+998 90 123 45 67</span>
                </li>
                <li className="flex items-center gap-3 group cursor-pointer">
                  <Mail size={18} className="text-indigo-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="group-hover:text-white transition-colors">hello@linkon.uz</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {t('footer.rights')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
