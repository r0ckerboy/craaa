import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Heart, MessageCircle, Share2, Bookmark, ArrowRight } from 'lucide-react';

const MobileMockup: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <div ref={elementRef} className="z-10 relative w-full max-w-7xl mx-auto px-6 md:px-10 py-24 lg:py-32 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: Phone 3D */}
        <div className={`relative flex justify-center lg:justify-start group perspective-1000 opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-orange-500/20 blur-[120px] -z-10 rounded-full opacity-40 pointer-events-none"></div>
            
            <div className="relative w-[340px] h-[680px] bg-[#0a0a0a] border-[6px] border-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50 flex justify-center items-center"></div>
                
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 pt-4 pb-2 text-white text-xs font-medium relative z-40">
                    <span>9:41</span>
                    <div className="flex gap-1.5 items-center">
                        <div className="w-5 h-3 border border-white/30 rounded-[3px] relative"><div className="absolute top-0.5 left-0.5 bottom-0.5 right-1 bg-white rounded-[1px]"></div></div>
                    </div>
                </div>

                {/* App Header */}
                <div className="flex justify-between items-center px-5 py-3 border-b border-white/5 bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-30">
                    <div className="flex items-center gap-1">
                        <span className="font-serif font-bold text-xl tracking-tight text-white">Lumina</span>
                    </div>
                    <div className="flex gap-4 text-white">
                        <Heart size={20} className="text-white/50" />
                        <MessageCircle size={20} className="text-white/50" />
                    </div>
                </div>

                {/* Stories */}
                <div className="flex gap-4 px-5 py-4 overflow-x-hidden border-b border-white/5">
                    {['News', 'Updates', 'Verified', 'Feature'].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-1.5">
                            <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-orange-400 to-pink-600">
                                <div className="w-full h-full rounded-full bg-black flex items-center justify-center border-2 border-black">
                                    <div className="w-6 h-6 rounded-full bg-white/20"></div>
                                </div>
                            </div>
                            <span className="text-[10px] text-neutral-400">{item}</span>
                        </div>
                    ))}
                </div>

                {/* Feed Post */}
                <div className="flex flex-col pb-20">
                    <div className="flex justify-between items-center px-4 py-3">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 bg-neutral-700 rounded-full"></div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-white">Lumina_official</span>
                                <span className="text-[10px] text-neutral-500">Sponsored</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full aspect-square bg-[#111] relative overflow-hidden group">
                        <div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b02f3053-26c7-4f46-a379-f073cacac0f0_800w.webp)] bg-cover absolute inset-0"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-500/30 rounded-full blur-2xl"></div>
                        
                        {/* Abstract Shape */}
                        <div className="absolute inset-0 flex items-center justify-center">
                             <div className="transform group-hover:rotate-6 transition-transform duration-700 bg-white/10 w-24 h-24 rounded-2xl backdrop-blur-md rotate-12"></div>
                             <div className="transform group-hover:-rotate-3 transition-transform duration-700 bg-white/10 w-24 h-24 rounded-2xl absolute backdrop-blur-md translate-x-4 translate-y-4 -rotate-6"></div>
                        </div>

                        <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 backdrop-blur border border-white/10 rounded-full flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
                            <span className="text-[10px] font-medium text-white">AI Generated</span>
                        </div>
                    </div>

                    <div className="flex bg-gradient-to-b from-orange-400 to-orange-600 px-4 py-2.5 items-center justify-between">
                        <span className="text-xs font-semibold text-white">Try Lumina for free</span>
                        <ArrowRight size={14} className="text-white" />
                    </div>

                    <div className="flex justify-between items-center px-4 py-3">
                        <div className="flex gap-4 text-white">
                            <Heart size={24} />
                            <MessageCircle size={24} />
                            <Share2 size={24} />
                        </div>
                        <Bookmark size={24} />
                    </div>
                </div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
            </div>
        </div>

        {/* Right: Stats List */}
        <div className="flex flex-col justify-center gap-2 pl-0 lg:pl-12">
            {[
                { val: '10+', text: 'Industries Transformed' },
                { val: '500 Million', text: 'Assets Generated Annually' },
                { val: '1,800%', text: 'Production Efficiency Lift' },
                { val: '140,000', text: 'Active Creative Teams' },
            ].map((item, i) => (
                <div key={i} className={`flex flex-col gap-2 py-8 ${i !== 3 ? 'border-b border-white/5' : ''} opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: `${0.4 + (i * 0.1)}s` }}>
                    <div className="text-5xl md:text-6xl font-medium text-white tracking-tight">{item.val}</div>
                    <div className="text-lg text-neutral-500 font-medium">{item.text}</div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default MobileMockup;