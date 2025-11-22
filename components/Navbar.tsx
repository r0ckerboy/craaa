import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Navbar: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <nav 
      ref={elementRef}
      className={`flex justify-between items-center py-8 px-6 md:px-10 opacity-0-start ${isVisible ? 'animate-active' : ''}`}
      style={{ animationDelay: '0.1s' }}
    >
      <div className="flex items-center gap-3 group cursor-pointer">
        <div 
          className="flex bg-gradient-to-tr from-orange-500 to-amber-500 w-8 h-8 rounded-full items-center justify-center relative"
          data-border-gradient="linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))"
          style={{ '--border-radius-before': '9999px' } as React.CSSProperties}
        >
          <div 
            className="w-2.5 h-2.5 bg-black rounded-full relative"
            data-border-gradient="linear-gradient(180deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))"
            style={{ '--border-radius-before': '9999px' } as React.CSSProperties}
          ></div>
        </div>
        <span className="text-lg font-semibold tracking-tight text-white">Lumina</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {['Workflow', 'Resources', 'Pricing'].map((item) => (
          <a key={item} href="#" className="text-xs font-medium tracking-widest uppercase hover:text-white transition-colors text-neutral-400">
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <a href="#" className="text-sm font-medium hover:text-white transition-colors text-neutral-400">Log In</a>
        <button className="relative inline-flex items-center justify-center overflow-hidden transition-all duration-200 bg-[radial-gradient(65.28%_65.28%_at_50%_100%,rgba(251,191,36,0.8)_0%,rgba(251,191,36,0)_100%),linear-gradient(0deg,#ea580c,#ea580c)] border-none rounded-full px-6 py-2.5 min-h-[44px] scale-95 hover:scale-100 group">
          {/* Inner Glare */}
          <div className="absolute inset-[1px] rounded-full bg-gradient-to-b from-white/30 to-transparent z-0"></div>
          <div className="absolute inset-[2px] rounded-full bg-[radial-gradient(65.28%_65.28%_at_50%_100%,rgba(251,191,36,0.8)_0%,rgba(251,191,36,0)_100%),linear-gradient(0deg,#ea580c,#ea580c)] z-0"></div>
          
          {/* Floating Points */}
          <div className="points_wrapper overflow-hidden w-full h-full pointer-events-none absolute z-10 top-0 left-0">
             {[1,2,3,4].map((i) => (
               <i key={i} className="point" style={{ left: `${20 * i}%`, animationDelay: `${i * 0.2}s` }}></i>
             ))}
          </div>

          <span className="relative z-20 font-medium text-sm text-white">Get Access</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;