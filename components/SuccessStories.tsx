import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ArrowUpRight } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-32 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
        <h2 className={`text-5xl md:text-6xl font-medium tracking-tighter text-white opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.2s' }}>Success Stories</h2>
        <div className={`flex items-center gap-2 text-sm font-medium text-neutral-500 mb-1 opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.3s' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
            <span className="uppercase tracking-widest text-xs">Case Studies</span>
        </div>
      </div>

      <div className="flex flex-col w-full border-t border-white/5">
        {[
            { industry: 'Fintech', name: 'Midday Financial' },
            { industry: 'Infrastructure', name: 'Vercel' },
            { industry: 'Database', name: 'Supabase' }
        ].map((story, i) => (
            <div key={i} className="group relative border-b border-white/5 transition-colors duration-300 hover:bg-white/[0.02] cursor-pointer">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-8 pb-8 gap-x-6 gap-y-6 items-center">
                    <div className="col-span-1 md:col-span-3">
                        <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors">{story.industry}</span>
                    </div>
                    <div className="col-span-1 md:col-span-8 flex items-center gap-3">
                        <span className="text-lg font-semibold tracking-tight text-white">{story.name}</span>
                    </div>
                    <div className="col-span-1 flex justify-end">
                        <ArrowUpRight className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors" />
                    </div>
                </div>
            </div>
        ))}

        {/* Expanded Highlight */}
        <div className="border-white/5 border-b relative">
             <div className="grid grid-cols-1 md:grid-cols-12 cursor-pointer pt-8 pb-8 gap-x-6 gap-y-6 items-start">
                 <div className="col-span-1 md:col-span-3 flex flex-col gap-1">
                     <span className="text-xs font-semibold tracking-widest uppercase text-orange-500">Productivity</span>
                     <span className="text-[10px] font-medium text-neutral-500">48 Workflows Optimized</span>
                 </div>
                 <div className="col-span-1 md:col-span-8 flex items-center gap-3">
                     <span className="text-lg font-semibold tracking-tight text-white">Linear Systems</span>
                 </div>
                 <div className="col-span-1 flex justify-end">
                     <ArrowUpRight className="w-6 h-6 text-white rotate-45" />
                 </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6 pb-12 gap-x-8 gap-y-8">
                 <div className="hidden md:block col-span-3 relative">
                     <div className="absolute right-8 top-0 bottom-4 w-px bg-gradient-to-b from-white/10 to-transparent"></div>
                 </div>
                 <div className="col-span-1 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8 pr-4 pl-4 md:pl-0">
                     {[
                         { title: 'Challenge', text: <>Internal fragmentation led to <span className="text-white font-medium">siloed decision-making</span> and slower release cycles.</> },
                         { title: 'Solution', text: <>Deployed Lumina's engine to synchronize <span className="text-white font-medium">asset pipelines</span> and automate status reporting.</> },
                         { title: 'Result', text: <>Achieved a <span className="text-orange-400 font-semibold">40% reduction</span> in meeting times and doubled velocity.</> },
                     ].map((item, i) => (
                         <div key={i} className="flex flex-col gap-3">
                             <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">{item.title}</span>
                             <p className="text-sm leading-relaxed text-neutral-300">{item.text}</p>
                         </div>
                     ))}
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;