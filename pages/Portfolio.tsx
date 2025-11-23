import React from 'react';
import { Button } from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';
import { Link } from 'react-router-dom';

const PROJECTS = [
  { id: '1', client: 'UzbekAir', category: 'Branding', title: 'Reimagining National Travel', image: 'https://picsum.photos/id/1039/600/600', result: '40% Increase in Brand Awareness' },
  { id: '2', client: 'Navoi Mining', category: 'Web', title: 'Digital Transformation Platform', image: 'https://picsum.photos/id/1033/600/600', result: 'Modernized Stakeholder Hub' },
  { id: '3', client: 'Tashkent City', category: 'Video', title: 'Heart of the Silk Road', image: 'https://picsum.photos/id/1047/600/600', result: '1M+ Views on YouTube' },
  { id: '4', client: 'PayMe', category: 'Advertising', title: 'Cashless Generation Campaign', image: 'https://picsum.photos/id/1060/600/600', result: '25% App Install Growth' },
  { id: '5', client: 'Korzinka', category: 'Social', title: 'Daily Fresh Content', image: 'https://picsum.photos/id/1080/600/600', result: '3x Engagement Rate' },
  { id: '6', client: 'Texnomart', category: 'Strategy', title: 'E-commerce Expansion', image: 'https://picsum.photos/id/1075/600/600', result: '15% Revenue Uplift' },
];

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = React.useState('All');

  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal width="100%" className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('portfolio.title')}</h1>
            <p className="text-xl text-slate-400 max-w-xl">
              {t('portfolio.subtitle')}
            </p>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
             {['All', 'Branding', 'Web', 'Video', 'Social', 'Advertising', 'Strategy'].map(cat => (
               <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${cat === filter ? 'bg-white text-black font-semibold scale-105' : 'glass-panel text-slate-300 hover:bg-white/10 hover:text-white'}`}
               >
                 {cat}
               </button>
             ))}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 100} animation="fade-up">
              <div className="group cursor-pointer h-full">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5 shadow-lg shadow-black/50">
                  <div className="absolute inset-0 bg-indigo-900/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-mono border border-white/20 translate-y-[-10px] group-hover:translate-y-0">
                    {project.category}
                  </div>
                  {/* Overlay Result */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                     <p className="text-indigo-400 text-sm font-bold">{project.result}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.client}</h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed">{project.title}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal width="100%" delay={300} className="mt-20">
          <div className="p-12 glass-panel rounded-3xl text-center border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h2 className="text-3xl font-bold mb-6 relative z-10">{t('portfolio.ctaTitle')}</h2>
            <Link to="/contact" className="relative z-10">
              <Button size="lg" className="shadow-xl shadow-indigo-500/20">{t('portfolio.ctaButton')}</Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
