import React from 'react';
import { MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <div className="overflow-hidden group bg-[#050505] w-full border-white/5 border-t relative">
      <div className="pointer-events-none z-0 absolute top-0 right-0 bottom-0 left-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80"></div>
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c087a1e-aa65-42f7-9a89-dc582f5d807a_3840w.webp" className="opacity-20 mix-blend-luminosity w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 blur-sm" alt="Texture" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-0 flex flex-col min-h-[85vh] justify-between">
         <div className="flex flex-col md:flex-row justify-between items-start w-full gap-12 border-b border-white/5 pb-12">
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                    <MessageCircle size={16} className="fill-current" />
                </div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">Get In Touch</span>
            </div>
            <div className="flex flex-wrap gap-8 md:gap-12 text-xs font-semibold tracking-widest uppercase text-neutral-500">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy & Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <span className="text-neutral-700">@2025 Lumina Creative Inc.</span>
            </div>
         </div>

         <div className="flex flex-col gap-6 mt-16 mb-auto relative">
             <div className="group/item relative flex flex-col items-start w-fit">
                <a href="tel:+18005550199" className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-neutral-500 transition-all duration-500">
                    +1 800 555 0199
                </a>
             </div>
             <div className="group/item relative flex flex-col items-start w-fit">
                <a href="mailto:hello@lumina.ai" className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-neutral-500 transition-all duration-500">
                    HELLO@LUMINA.AI
                </a>
             </div>
         </div>

         <div className="relative w-full mt-12 select-none overflow-hidden">
             <h1 className="text-[17vw] leading-[0.75] font-bold tracking-tighter text-center md:text-left text-white mix-blend-overlay opacity-90 pointer-events-none">
                 LUMINA
             </h1>
             <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent"></div>
         </div>
      </div>
    </div>
  );
};

export default Footer;