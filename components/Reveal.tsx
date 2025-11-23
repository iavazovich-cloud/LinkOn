import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-in' | 'zoom-in';
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = 'fit-content', 
  delay = 0, 
  className = "",
  animation = 'fade-up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    switch(animation) {
      case 'fade-up': return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16';
      case 'fade-in': return isVisible ? 'opacity-100' : 'opacity-0';
      case 'slide-in': return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16';
      case 'zoom-in': return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90';
      default: return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16';
    }
  };

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-1000 ease-out ${getAnimationClass()}`}
      style={{ width, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
