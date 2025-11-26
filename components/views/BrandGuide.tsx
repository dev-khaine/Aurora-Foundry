import React from 'react';
import { Card } from '../ui/Card';

const PaletteSample = ({ color, name, hex, delay }: { color: string, name: string, hex: string, delay: string }) => (
  <div className={`flex flex-col gap-3 group opacity-0 animate-fade-in-up ${delay}`}>
    <div className={`h-28 w-full rounded-xl shadow-sm border border-black/5 ${color} transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-lg`}></div>
    <div className="flex flex-col">
      <span className="text-sm font-bold text-ink-900">{name}</span>
      <span className="text-xs text-ink-400 font-mono uppercase">{hex}</span>
    </div>
  </div>
);

// Reusable Logo Components
const LogoMark = ({ size = 100, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Soft Arch (The 'A') */}
    <path d="M30 80V50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50V80" stroke="#0B4F6C" strokeWidth="14" strokeLinecap="round" />
    {/* Rising Sun (The Crossbar/Core) */}
    <circle cx="50" cy="58" r="9" fill="#FF8A6B" />
  </svg>
);

const LogoLockup = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <LogoMark size={48} />
    <div className="flex flex-col justify-center">
      <span className="font-bold text-2xl tracking-tight text-ink-900 leading-none">Aurora</span>
      <span className="font-medium text-sm tracking-widest text-ink-500 uppercase leading-none mt-1">Foundry</span>
    </div>
  </div>
);

export const BrandGuide: React.FC = () => {
  return (
    <div className="space-y-12">
      <header className="opacity-0 animate-fade-in-up">
        <h1 className="text-4xl font-bold mb-4 text-ink-900">Brand Identity</h1>
        <p className="text-ink-500 max-w-2xl text-lg">
          A visual language grounded in clarity and structural elegance. 
          Combining the warmth of <span className="text-ink-900 font-semibold">Sand</span>, the depth of <span className="text-ocean-600 font-semibold">Ocean</span>, and the vibrant energy of <span className="text-coral-500 font-semibold">Coral</span>.
        </p>
      </header>

      {/* Logomark Section */}
      <section className="opacity-0 animate-fade-in-up stagger-1">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-ink-800">
          <span className="w-1.5 h-8 bg-ocean-600 rounded-full"></span>
          Logomark
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Primary Mark */}
          <div className="lg:col-span-1 flex flex-col gap-4">
             <h3 className="text-sm font-semibold text-ink-400 uppercase tracking-wider">Primary Mark</h3>
             <Card className="flex-1 flex items-center justify-center min-h-[240px] bg-sand-50 relative overflow-hidden group">
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0B4F6C_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <LogoMark size={140} className="drop-shadow-2xl transition-transform duration-500 group-hover:scale-110" />
             </Card>
             <p className="text-xs text-ink-500">
               The "Sunrise A". A soft arch represents the structural foundation (Foundry), while the floating coral sphere signifies the rise of new ideas (Aurora).
             </p>
          </div>

          {/* Horizontal Lockup */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-ink-400 uppercase tracking-wider">Horizontal Lockup</h3>
            <Card className="flex-1 flex items-center justify-center min-h-[240px] bg-white group">
              <LogoLockup className="transition-transform duration-300 group-hover:scale-105"/>
            </Card>
             <p className="text-xs text-ink-500">
               Used for headers, partnerships, and official documentation. The wordmark pairs Inter Bold (Aurora) with Inter Medium Uppercase (Foundry).
             </p>
          </div>

          {/* Icon Variations */}
          <div className="lg:col-span-3">
             <h3 className="text-sm font-semibold text-ink-400 uppercase tracking-wider mb-4">Icon Usage</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center gap-2">
                   <div className="w-24 h-24 rounded-2xl bg-white shadow-card flex items-center justify-center border border-ink-50 hover:-translate-y-1 transition-transform duration-300">
                     <LogoMark size={64} />
                   </div>
                   <span className="text-xs text-ink-400">App Icon (Light)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-24 h-24 rounded-2xl bg-ocean-600 shadow-card flex items-center justify-center hover:-translate-y-1 transition-transform duration-300">
                     <svg width="64" height="64" viewBox="0 0 100 100" fill="none">
                        <path d="M30 80V50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50V80" stroke="white" strokeWidth="14" strokeLinecap="round" />
                        <circle cx="50" cy="58" r="9" fill="#FF8A6B" />
                     </svg>
                   </div>
                   <span className="text-xs text-ink-400">App Icon (Dark)</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                   <div className="w-24 h-24 rounded-full bg-sand-100 flex items-center justify-center border border-sand-200 hover:-translate-y-1 transition-transform duration-300">
                     <LogoMark size={48} />
                   </div>
                   <span className="text-xs text-ink-400">Social Profile</span>
                </div>
             </div>
          </div>

        </div>
      </section>

      <section className="opacity-0 animate-fade-in-up stagger-2">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-ink-800">
          <span className="w-1.5 h-8 bg-coral-400 rounded-full"></span>
          Color System
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <PaletteSample color="bg-[#F7F3EE]" name="Sand Base" hex="#F7F3EE" delay="delay-100" />
          <PaletteSample color="bg-[#FFFFFF]" name="Surface" hex="#FFFFFF" delay="delay-200" />
          <PaletteSample color="bg-[#0B4F6C]" name="Deep Ocean" hex="#0B4F6C" delay="delay-300" />
          <PaletteSample color="bg-[#FF8A6B]" name="Coral Accent" hex="#FF8A6B" delay="delay-400" />
          <PaletteSample color="bg-[#0F1724]" name="Ink Dark" hex="#0F1724" delay="delay-500" />
        </div>
        <div className="mt-8">
           <h3 className="text-sm font-semibold text-ink-400 uppercase tracking-wider mb-4">Brand Gradient</h3>
           <div className="h-24 w-full rounded-2xl brand-gradient shadow-lg shadow-ocean-600/10 flex items-center justify-center hover:shadow-xl hover:scale-[1.01] transition-all duration-300">
             <span className="font-bold text-white tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded backdrop-blur-md border border-white/20">Aurora Master Gradient</span>
           </div>
        </div>
      </section>

      <section className="opacity-0 animate-fade-in-up stagger-3">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-ink-800">
          <span className="w-1.5 h-8 bg-ink-900 rounded-full"></span>
          Typography
        </h2>
        <Card className="space-y-8">
          <div className="border-b border-ink-100 pb-8">
            <span className="text-xs text-ocean-600 font-bold uppercase tracking-wider mb-2 block">Display / Inter Bold</span>
            <h1 className="text-5xl font-bold text-ink-900 tracking-tight">The quick brown fox.</h1>
          </div>
          <div className="border-b border-ink-100 pb-8">
            <span className="text-xs text-ocean-600 font-bold uppercase tracking-wider mb-2 block">Heading / Inter Semibold</span>
            <h2 className="text-3xl font-semibold text-ink-800">Jumps over the lazy dog.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <span className="text-xs text-ocean-600 font-bold uppercase tracking-wider mb-2 block">Body / Inter Regular</span>
              <p className="text-ink-600 leading-relaxed">
                Typography in the Aurora system is utilitarian but spacious. 
                We use <strong>Inter</strong> for UI elements to ensure maximum legibility at small sizes.
                The high contrast between Ink-900 and Sand-100 creates a crisp reading experience.
              </p>
            </div>
            <div>
              <span className="text-xs text-ocean-600 font-bold uppercase tracking-wider mb-2 block">Code / Fira Code</span>
              <code className="bg-ink-900 p-4 rounded-lg text-sm text-sand-100 block w-full shadow-inner font-mono">
                import &#123; Future &#125; from '@aurora/foundry';<br/>
                <span className="text-coral-400">const</span> <span className="text-ocean-300">vision</span> = <span className="text-emerald-400">new</span> Brand();
              </code>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
};