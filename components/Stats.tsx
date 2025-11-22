import React from 'react';
import { Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Stats: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className="z-10 flex flex-col md:px-10 lg:py-32 w-full max-w-7xl border-white/5 border-t mx-auto pt-24 pr-6 pb-24 pl-6 relative">
      {/* Badge */}
      <div className={`flex justify-start mb-12 opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.2s' }}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-orange-400 text-sm font-medium tracking-wide uppercase hover:bg-white/10 transition-colors cursor-default">
          <Zap size={16} className="fill-orange-400/50" />
          <span>About Us</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className={`relative opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.3s' }}>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-orange-500/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
         <h3 className="leading-[1.05] md:text-6xl lg:text-7xl text-5xl font-medium text-white/40 tracking-tight max-w-6xl">
           <span className="text-white">We are a creative intelligence engine</span> dedicated to transforming how the world <span className="text-white">visualizes stories.</span> With a team of researchers, engineers, and artists, we build tools that empower <span className="text-white">ambitious creators</span> to design, animate, and ship cinematic experiences at the speed of thought.
         </h3>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 mt-24 pt-12 border-t border-white/5">
        {[
            { val: '$500M', label: 'Creator Revenue' },
            { val: '99%', label: 'Client Satisfaction' },
            { val: '2M+', label: 'Videos Generated' },
            { val: '4.9', label: 'Average Rating' }
        ].map((stat, i) => (
            <div key={i} className={`flex flex-col gap-2 opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: `${0.4 + (i * 0.1)}s` }}>
                <div className="md:text-7xl lg:text-8xl leading-none text-6xl font-light text-white tracking-tighter">
                    {stat.val}
                </div>
                <div className="text-xl font-medium pl-1 text-neutral-500">
                    {stat.label}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;