import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from '../components/Reveal';

const POSTS = [
  { title: "Why TikTok is Crucial for Uzbek Brands in 2024", date: "Oct 12, 2023", category: "social", img: "https://picsum.photos/id/2/600/400" },
  { title: "The Rise of Minimalist Branding", date: "Sep 28, 2023", category: "branding", img: "https://picsum.photos/id/3/600/400" },
  { title: "Behind the Scenes: Tashkent Fashion Week", date: "Sep 15, 2023", category: "events", img: "https://picsum.photos/id/4/600/400" },
];

export const Blog: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal animation="slide-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-12">{t('blog.title')}</h1>
        </Reveal>
        
        <div className="grid md:grid-cols-3 gap-8">
          {POSTS.map((post, i) => (
            <Reveal key={i} delay={i * 100} animation="fade-up">
              <article className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
                  <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/20 transition-colors duration-300 z-10" />
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                  <span className="text-indigo-400 font-semibold uppercase tracking-wider">{t(`blog.categories.${post.category}`)}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold group-hover:text-indigo-300 transition-colors duration-300">{post.title}</h2>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};
