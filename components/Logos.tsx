import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Logos: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className={`mt-24 px-6 md:px-10 pb-24 opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.6s' }}>
      <p className="text-lg font-medium mb-8 uppercase tracking-widest text-center md:text-left text-neutral-500">
        Trusted by industry leaders
      </p>
      <div className="flex flex-wrap gap-8 md:gap-12 hover:grayscale-0 transition-all duration-500 opacity-60 grayscale items-center justify-between">
         {/* Simple SVG Placeholders mimicking the original monotone logos */}
         <svg className="h-8 w-auto fill-white" viewBox="0 0 100 25"><path d="M10 20 L20 5 L30 20 Z" /></svg>
         <svg className="h-8 w-auto fill-white" viewBox="0 0 100 25"><rect x="0" y="5" width="20" height="15" /></svg>
         <svg className="h-8 w-auto fill-white" viewBox="0 0 100 25"><circle cx="15" cy="12" r="8" /></svg>
         <svg className="h-8 w-auto fill-white" viewBox="0 0 100 25"><path d="M5 12 L15 5 L25 12 L15 19 Z" /></svg>
         <svg className="h-8 w-auto fill-white" viewBox="0 0 100 25"><rect x="5" y="5" width="10" height="15" /><rect x="20" y="5" width="10" height="15" /></svg>
      </div>
    </div>
  );
};

export default Logos;