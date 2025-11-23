import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-[#050507]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:scale-105 transition-transform duration-300">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-all duration-300 hover:text-white hover:-translate-y-0.5 relative group ${isActive ? 'text-white' : 'text-slate-400'}`
              }
            >
              {t(`nav.${item.key}`)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <Link to="/contact">
            <Button variant="primary" size="sm" className="shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40">
              {t('nav.startProject')}
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitcher />
          <button 
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#050507] border-b border-white/5 lg:hidden p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5">
          {NAV_ITEMS.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) => 
                `text-lg font-medium p-2 rounded-lg transition-colors ${isActive ? 'bg-white/5 text-indigo-400' : 'text-slate-300 active:bg-white/5'}`
              }
            >
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
             <Button className="w-full">{t('nav.getStarted')}</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
