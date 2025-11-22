import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Logos from './components/Logos';
import MobileMockup from './components/MobileMockup';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#050505] text-white font-sans antialiased overflow-x-hidden selection:bg-orange-500/30 flex flex-col min-h-screen relative">
      
      {/* --- Background Elements --- */}
      <div className="fixed z-0 top-0 right-0 bottom-0 left-0 pointer-events-none">
        {/* Background Image */}
        <img 
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b5079f4-4ddd-433b-a936-fc8f7dea9df0_3840w.webp" 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-[#050505]/0 to-[#050505]/0"></div>
      </div>

      {/* --- Vertical Grid Lines --- */}
      <div className="fixed inset-0 z-0 pointer-events-none flex w-full max-w-7xl mx-auto border-r border-white/5 opacity-60">
        <div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
          <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">01</span>
        </div>
        <div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
          <div className="absolute top-0 -left-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-1"></div>
          <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">02</span>
        </div>
        <div className="flex-1 border-l border-white/5 h-full flex justify-center relative overflow-hidden">
          <div className="absolute top-0 -left-[1px] w-[1px] h-96 bg-gradient-to-b from-transparent via-orange-500/80 to-transparent animate-beam-2"></div>
          <div className="h-full border-r border-dashed border-orange-500/20 w-px"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-beam-1 delay-1000"></div>
           <div className="absolute bottom-[30%] translate-y-1/2 text-orange-500/80 rotate-90">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 fill-current">
                <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
             </svg>
           </div>
          <span className="absolute bottom-8 text-orange-500/30 text-xs font-mono">03</span>
        </div>
        <div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
          <div className="absolute top-0 -left-[1px] w-[1px] h-48 bg-gradient-to-b from-transparent via-orange-500/60 to-transparent animate-beam-3"></div>
          <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">04</span>
        </div>
        <div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
          <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">05</span>
        </div>
      </div>

      {/* --- Main Content --- */}
      <div className="flex-1 flex flex-col w-full max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <Logos />
      </div>

      <div className="relative z-10">
        <MobileMockup />
        <SuccessStories />
        <Footer />
      </div>

    </div>
  );
};

export default App;