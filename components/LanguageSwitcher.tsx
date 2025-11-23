import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'uz', label: 'UZ' },
    { code: 'ru', label: 'RU' }
  ];

  return (
    <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/10">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`
            px-3 py-1 text-xs font-bold rounded-full transition-all duration-300
            ${language === lang.code 
              ? 'bg-indigo-600 text-white shadow-lg' 
              : 'text-slate-400 hover:text-white hover:bg-white/10'
            }
          `}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
