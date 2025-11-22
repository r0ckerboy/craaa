import React, { useState } from 'react';
import { Play, Sparkles, ArrowRight, Video, ScanLine, Download, Check, Quote } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  const { elementRef, isVisible } = useIntersectionObserver();

  // Images for the cards
  const cards = [
    { id: 1, src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b5079f4-4ddd-433b-a936-fc8f7dea9df0_800w.webp", alt: "Import" },
    { id: 2, src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e8af32c-e155-4b33-9e0a-eb91a91debbe_800w.webp", alt: "Processing" },
    { id: 3, src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3337c33-82ae-4ad6-9c83-f9f1a5bdc53c_800w.webp", alt: "Export" },
  ];

  const getCardStyle = (id: number) => {
    if (id === activeStep) {
      return { transform: 'translateY(0px) scale(1)', zIndex: 30, opacity: 1 };
    }
    // Determine relative position for stacking
    const relativePos = (id - activeStep + 3) % 3;
    if (relativePos === 1) {
       // Middle
       return { transform: 'translateY(12px) scale(0.95)', zIndex: 20, opacity: 0.6 };
    }
    // Bottom
    return { transform: 'translateY(24px) scale(0.9)', zIndex: 10, opacity: 0.4 };
  };

  return (
    <div ref={elementRef} className="flex-1 grid grid-cols-1 lg:grid-cols-12 pt-24 pb-10 gap-x-4 gap-y-4 items-center">
      {/* --- Left Column: Content --- */}
      <div className="col-span-1 lg:col-span-6 pl-6 md:pl-10 pt-10 lg:pt-0 flex flex-col justify-center">
        <div className={`inline-flex items-center gap-2 text-orange-500 mb-8 opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.1s' }}>
          <span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-orange-500/80">Creative Suite 2.0</span>
        </div>

        <h1 className={`text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white font-medium mb-6 opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.2s' }}>
          Craft Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">Stories.</span>
        </h1>

        <p className={`leading-relaxed text-lg font-medium text-white/60 max-w-lg opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.35s' }}>
          Transforms raw footage into cinematic masterpieces instantly. Lumina's AI adapts to your unique style, automating the tedious so you can focus on the story.
        </p>

        <div className={`mt-10 flex flex-wrap gap-6 items-center opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.5s' }}>
          <a href="#" className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_10px_rgba(249,115,22,0.45)] bg-gradient-to-b from-white/20 via-white/0 to-white/5 rounded-full relative shadow-[0_0_25px_rgba(249,115,22,0.3),0_8px_40px_rgba(249,115,22,0.15)]">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute inset-[-100%] w-[300%] h-[300%] left-[-100%] top-[-100%] animate-[spin_3s_linear_infinite]" style={{ background: 'conic-gradient(from 0deg, transparent 0deg, transparent 80deg, rgba(253,186,116,0.8) 180deg, transparent 280deg, transparent 360deg)' }}></div>
            </div>
            <div className="absolute inset-[1px] rounded-full backdrop-blur-xl z-0 bg-neutral-950/90"></div>
            <div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-sm font-medium text-white w-full rounded-full pt-3 pr-5 pb-3 pl-4 relative items-center">
              <div className="relative z-20 w-7 h-7 rounded-full bg-gradient-to-b from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/30 ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300">
                <Sparkles size={14} className="text-white fill-white" />
              </div>
              <span className="whitespace-nowrap relative z-10 font-medium tracking-tight text-base text-white/95 group-hover:text-white transition-colors">Start Creating</span>
              <span className="inline-flex items-center justify-center z-10 bg-white/10 w-6 h-6 rounded-full ml-1 relative group-hover:translate-x-0.5 transition-transform text-white/80 group-hover:text-white">
                <ArrowRight size={12} />
              </span>
            </div>
          </a>
          <div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
            <Check size={14} className="text-orange-500" />
            <span>No credit card required</span>
          </div>
        </div>
      </div>

      {/* --- Right Column: Interactive Preview --- */}
      <div className="col-span-1 lg:col-span-6 md:pr-10 flex flex-col lg:pt-20 h-full pt-10 pr-6 items-end justify-center">
        {/* Card Stack */}
        <div className={`relative mb-12 mr-4 w-64 md:w-72 aspect-video group perspective-1000 opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.4s' }}>
            <div className="absolute -inset-8 bg-orange-500/20 blur-3xl -z-10 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <div className="relative w-full h-full">
                {cards.map((card) => (
                    <div 
                        key={card.id}
                        className="absolute inset-0 rounded-lg overflow-hidden border border-white/10 shadow-2xl origin-bottom bg-neutral-900 transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1)"
                        style={getCardStyle(card.id)}
                    >
                        <img src={card.src} className="w-full h-full object-cover opacity-80" alt={card.alt} />
                        <div className="absolute inset-0 bg-black/30"></div>
                        {/* Overlays per card type */}
                        {card.id === 1 && (
                            <div className="flex absolute inset-0 items-center justify-center">
                                <div className="flex bg-gradient-to-br from-white/10 via-white/0 to-white/10 w-12 h-12 rounded-full shadow-2xl backdrop-blur-md items-center justify-center border border-white/20">
                                    <Play size={16} className="text-white fill-white ml-1" />
                                </div>
                            </div>
                        )}
                        {card.id === 2 && (
                            <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-[10px] font-mono text-white/80">Scanning...</span>
                            </div>
                        )}
                        {card.id === 3 && (
                            <div className="absolute top-3 right-3 px-2 py-1 bg-orange-500 text-black text-[10px] font-bold rounded uppercase">
                                4K Ready
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

        {/* Steps Control */}
        <div className="flex flex-col gap-3 w-full max-w-xs mr-0 lg:mr-8">
            {[
                { id: 1, label: "Import Footage", icon: Video },
                { id: 2, label: "AI Scene Detect", icon: ScanLine },
                { id: 3, label: "Export 4K", icon: Download }
            ].map((step, idx) => (
                <div 
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer transition-all duration-300 opacity-0-start ${isVisible ? 'animate-active' : ''} ${activeStep === step.id ? 'bg-white/5 border border-white/10 backdrop-blur-md -translate-x-2 shadow-xl' : 'hover:bg-white/5 border border-transparent'}`}
                    style={{ 
                        animationDelay: `${0.6 + (idx * 0.1)}s`,
                        '--border-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
                        '--border-radius-before': '8px'
                    } as React.CSSProperties}
                    data-border-gradient={activeStep === step.id ? "" : undefined}
                >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors duration-300 ${activeStep === step.id ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20' : 'bg-transparent text-neutral-500'}`}>
                        0{step.id}
                    </div>
                    <span className={`text-sm font-medium transition-colors duration-300 ${activeStep === step.id ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                        {step.label}
                    </span>
                    <step.icon 
                        size={12} 
                        className={`ml-auto transition-all duration-300 ${activeStep === step.id ? 'text-orange-500 opacity-100' : 'text-neutral-600 opacity-0'}`} 
                    />
                </div>
            ))}
        </div>
      </div>

      {/* --- Bottom Area: Testimonial & Subheadline --- */}
      <div className="col-span-12 md:px-10 mt-32 pt-4 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          {/* Testimonial Card */}
          <div className={`col-span-1 lg:col-span-4 relative group opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.2s' }}>
             <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
             <div 
                className="flex flex-col min-h-[180px] transition-transform hover:-translate-y-1 duration-300 text-black bg-gradient-to-b from-orange-400 to-orange-600 rounded-xl p-8 relative shadow-2xl justify-between"
                data-border-gradient="linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))"
                style={{ '--border-radius-before': '12px' } as React.CSSProperties}
             >
                <div className="flex justify-between items-start mb-4">
                    <div className="flex -space-x-2">
                        <img className="w-8 h-8 rounded-full border-2 border-orange-400" src="https://i.pravatar.cc/100?img=12" alt="User" />
                        <img className="w-8 h-8 rounded-full border-2 border-orange-400" src="https://i.pravatar.cc/100?img=32" alt="User" />
                        <div className="w-8 h-8 rounded-full border-2 border-orange-400 bg-black text-white flex items-center justify-center text-[10px] font-bold">+2k</div>
                    </div>
                    <Quote size={20} className="text-black/40 fill-black/20" />
                </div>
                <div>
                    <p className="text-lg font-semibold leading-snug tracking-tight max-w-[80%]">"Lumina changed my entire workflow."</p>
                    <div className="mt-4 pt-4 border-t border-black/10 flex items-center gap-2 text-xs font-medium uppercase tracking-wide opacity-70">
                        <span>Verified Creator</span>
                        <span className="w-1 h-1 bg-black rounded-full"></span>
                        <span>5.0 Rating</span>
                    </div>
                </div>
             </div>
          </div>

          <div className="hidden lg:block col-span-2"></div>

          {/* Subheadline */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-end text-right lg:text-left">
            <div className={`flex items-center gap-2 lg:justify-start justify-end mb-3 text-orange-400 text-xs font-medium uppercase tracking-wider opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.2s' }}>
                <Sparkles size={12} />
                <span>Version 2.0 Available</span>
            </div>
            <h2 className={`text-4xl lg:text-5xl font-normal tracking-tighter text-white opacity-0-start ${isVisible ? 'animate-active' : ''}`} style={{ animationDelay: '0.2s' }}>
                Next generation <span className="text-white/60">creative suite.</span>
            </h2>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Hero;