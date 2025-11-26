import React from 'react';
import { Card } from '../ui/Card';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

export const Socials: React.FC = () => {
  return (
    <div className="space-y-8">
      <header className="text-center max-w-2xl mx-auto opacity-0 animate-fade-in-up">
        <h1 className="text-4xl font-bold mb-4 text-ink-900">Social Presence</h1>
        <p className="text-ink-500">
          Visualizing the brand across external platforms. Consistently maintaining the "Sand & Ocean" aesthetic.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Instagram Post */}
        <div className="flex flex-col gap-4 opacity-0 animate-fade-in-up stagger-1">
            <h3 className="text-center text-sm font-semibold text-ink-400">INSTAGRAM</h3>
            <Card className="max-w-sm mx-auto border-ink-100 shadow-lg hover:-translate-y-2 transition-transform duration-500" noPadding>
            <div className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-ink-100 flex items-center justify-center bg-white overflow-hidden p-1">
                   <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                     <path d="M30 80V50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50V80" stroke="#0B4F6C" strokeWidth="16" strokeLinecap="round" />
                     <circle cx="50" cy="58" r="10" fill="#FF8A6B" />
                   </svg>
                </div>
                <span className="text-sm font-semibold text-ink-900">aurora_foundry</span>
                </div>
                <MoreHorizontal size={20} className="text-ink-500" />
            </div>
            <div className="aspect-square bg-sand-100 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Abstract Art */}
                    <div className="w-40 h-40 bg-ocean-600 rounded-full mix-blend-multiply opacity-80 animate-blob"></div>
                    <div className="w-40 h-40 bg-coral-400 rounded-full mix-blend-multiply opacity-80 -ml-12 mt-12 animate-blob animation-delay-2000"></div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur rounded-lg shadow-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-xs text-ink-800">New design system dropped. #UI #Design</p>
                </div>
            </div>
            <div className="p-3">
                <div className="flex gap-4 mb-2 text-ink-800">
                <Heart size={24} className="hover:text-coral-500 transition-colors cursor-pointer hover:scale-110" />
                <MessageCircle size={24} className="cursor-pointer hover:text-ocean-600" />
                <Share2 size={24} className="cursor-pointer hover:text-ocean-600" />
                </div>
                <p className="text-sm text-ink-800"><span className="font-semibold">aurora_foundry</span> Shaping the future of digital interfaces.</p>
            </div>
            </Card>
        </div>

        {/* Twitter/X Post */}
        <div className="flex flex-col gap-4 opacity-0 animate-fade-in-up stagger-2">
            <h3 className="text-center text-sm font-semibold text-ink-400">TWITTER / X</h3>
            <Card className="max-w-sm mx-auto border-ink-100 shadow-lg hover:-translate-y-2 transition-transform duration-500" noPadding>
                <div className="p-6">
                    <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full border border-ink-100 bg-white flex items-center justify-center overflow-hidden p-1 flex-shrink-0">
                           <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                             <path d="M30 80V50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50V80" stroke="#0B4F6C" strokeWidth="16" strokeLinecap="round" />
                             <circle cx="50" cy="58" r="10" fill="#FF8A6B" />
                           </svg>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-ink-900">Aurora Foundry</span>
                                <span className="text-ink-500 text-sm">@aurorafoundry · 2h</span>
                            </div>
                            <p className="mt-2 text-base leading-relaxed text-ink-800">
                                We've just updated our core color tokens. The new 'Coral' adds a human touch to the industrial precision we are known for.
                                <br/><br/>
                                Check the docs. 👇
                            </p>
                            <div className="mt-4 rounded-xl overflow-hidden border border-ink-100 h-48 bg-sand-50 relative flex items-center justify-center group cursor-pointer">
                                <div className="w-20 h-20 bg-coral-400 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center font-mono text-ink-900 bg-white/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    #FF8A6B
                                </div>
                            </div>
                            <div className="mt-4 flex justify-between text-ink-500 text-sm">
                                <span className="flex items-center gap-1 hover:text-ocean-600 cursor-pointer"><MessageCircle size={16}/> 12</span>
                                <span className="flex items-center gap-1 hover:text-green-600 cursor-pointer"><Share2 size={16}/> 45</span>
                                <span className="flex items-center gap-1 hover:text-coral-500 cursor-pointer"><Heart size={16}/> 182</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </div>

        {/* LinkedIn Post */}
        <div className="flex flex-col gap-4 opacity-0 animate-fade-in-up stagger-3">
             <h3 className="text-center text-sm font-semibold text-ink-400">LINKEDIN</h3>
             <Card className="max-w-sm mx-auto bg-white text-ink-900 shadow-lg hover:-translate-y-2 transition-transform duration-500" noPadding>
                <div className="p-4 border-b border-ink-100">
                    <div className="flex gap-2">
                         <div className="w-10 h-10 rounded-sm border border-ink-100 bg-white flex items-center justify-center overflow-hidden p-1">
                             <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                               <path d="M30 80V50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50V80" stroke="#0B4F6C" strokeWidth="16" strokeLinecap="round" />
                               <circle cx="50" cy="58" r="10" fill="#FF8A6B" />
                             </svg>
                         </div>
                         <div>
                             <h4 className="font-bold text-sm">Aurora Foundry</h4>
                             <p className="text-xs text-ink-500">12,408 followers</p>
                         </div>
                    </div>
                    <p className="mt-3 text-sm">We are thrilled to announce our Series A funding led by Visionary Ventures. We are scaling our AI-driven design tools to the next level.</p>
                </div>
                <div className="h-48 bg-sand-200 flex items-center justify-center bg-[url('https://picsum.photos/400/200?grayscale')] bg-cover relative group cursor-pointer">
                    <div className="absolute inset-0 bg-ocean-900/0 group-hover:bg-ocean-900/10 transition-colors duration-300"></div>
                    <div className="bg-white/95 p-4 rounded shadow-xl backdrop-blur group-hover:scale-105 transition-transform duration-300">
                        <h2 className="text-xl font-bold text-ocean-700">Series A Secured</h2>
                    </div>
                </div>
                <div className="p-3 bg-sand-50 flex justify-between text-ink-500 text-sm">
                    <span className="cursor-pointer hover:text-ocean-700">Like</span>
                    <span className="cursor-pointer hover:text-ocean-700">Comment</span>
                    <span className="cursor-pointer hover:text-ocean-700">Share</span>
                </div>
             </Card>
        </div>

      </div>
    </div>
  );
};