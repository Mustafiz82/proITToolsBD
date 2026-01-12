import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import Button from '@/ui/Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      
      {/* 1. Add these custom keyframes for the floating effect */}
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Background Glow Effects */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-125 h-125 bg-purple-900/50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-1/5 w-125 h-125 bg-blue-900/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        

        <div className="flex flex-col flex-1 items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Zap className="w-4 h-4 text-blue-400 fill-blue-400" />
                <span className="text-xs font-semibold text-blue-300 tracking-wide uppercase">Instant Access After Payment</span>
            </div>
            <h1 className="text-5xl lg:text-[55px] font-bold text-white leading-[1.4] mb-6">
                Unlock Premium Tools <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500">Without High Cost.</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                Access ChatGPT Plus, Canva Pro, Perplexity, and 20+ other creative tools for a fraction of the price. 
                <span className="text-gray-200"> 100% Warranty. Secure Dashboard Access.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10">
            <Button label='Browse Shop' />
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7 Support</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Secure Payment</span>
                <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-500" /> Active Now</span>
            </div>
        </div>

        <div className="relative h-125 w-full hidden lg:block perspective-[1000px]">
            
            {/* Card 1: ChatGPT (Slow Float) */}
            <div className="absolute top-28 right-12 rotate-20 z-10 hover:z-50 transition-all duration-500">
                <div style={{ animation: 'float-slow 6s ease-in-out infinite' }} className="w-48 p-6 rounded-xl border border-white/10 bg-linear-to-br from-white/30 to-white/20 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.2)] hover:scale-105 duration-500 transition-all">
                    <img src="/Home/chatgpt-log.jpg" className='w-12 h-12 mb-1 rounded-2xl' alt="" />
                    <h3 className="text-white font-bold text-xl">ChatGPT Plus</h3>
                    <p className="text-green-400 text-sm mt-1">Official Plus Access</p>
                </div>
            </div>

            {/* Card 2: Canva (Medium Float - No Rotation on parent to keep it straight, or slight tilt) */}
            <div className="absolute top-52 left-48 -rotate-10 z-30 hover:z-50 transition-all duration-500">
                <div style={{ animation: 'float-medium 5s ease-in-out infinite 0.5s' }} className="w-48 p-6 rounded-xl border border-white/10 bg-linear-to-br from-white/30 to-white/20 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.2)] hover:scale-105 duration-500 transition-all">
                    <img src="/Home/canva-logo.png" className='w-12 h-12 mb-1 rounded-2xl' alt="" />
                    <h3 className="text-white font-bold text-xl">Canva Pro</h3>
                    <p className="text-teal-400 text-sm mt-1">Pro Design Tools</p>
                </div>
            </div>

            {/* Card 3: Freepik (Fast Float) */}
            <div className="absolute bottom-16 right-12 rotate-20 z-20 hover:z-50 transition-all duration-500">
                 <div style={{ animation: 'float-fast 7s ease-in-out infinite 1s' }} className="w-48 p-6 rounded-xl border border-white/10 bg-linear-to-br from-white/30 to-white/20 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.2)] hover:scale-105">
                    <img src="/Home/freepik.jpeg" className='w-12 h-12 mb-1 rounded-2xl' alt="" />
                    <h3 className="text-white font-bold text-xl">Freepik Pro</h3>
                    <p className="text-blue-400 text-sm mt-1">Unlimited Downloads</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;



