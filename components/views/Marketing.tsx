import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ChevronRight, Play, Sparkles, Command, Check, Zap, User, CreditCard, Bell, Loader2, Twitter, Linkedin, Facebook, Star, ArrowRight, Code, Layers, BarChart, Globe } from 'lucide-react';

interface MarketingProps {
  onStartBuilding: () => void;
}

export const Marketing: React.FC<MarketingProps> = ({ onStartBuilding }) => {
  const [prompt, setPrompt] = useState('');
  const [activePreview, setActivePreview] = useState<'empty' | 'profile' | 'pricing' | 'alert'>('empty');
  const [isLoading, setIsLoading] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [targetText, setTargetText] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing effect simulation
  useEffect(() => {
    if (targetText && typingIndex < targetText.length) {
      const timeout = setTimeout(() => {
        setPrompt((prev) => prev + targetText[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, targetText]);

  const runDemo = (type: 'profile' | 'pricing' | 'alert', text: string) => {
    setPrompt('');
    setTargetText(text);
    setTypingIndex(0);
    setActivePreview('empty');
    
    // Start generating after typing finishes
    setTimeout(() => {
      setIsLoading(true);
      setTimeout(() => {
        setActivePreview(type);
        setIsLoading(false);
      }, 1500); // Processing time
    }, text.length * 30 + 500);
  };

  const handleShare = (platform: string) => {
    const url = "https://aurorafoundry.com"; 
    const text = "Check out Aurora Foundry - The future of AI-powered interface design.";
    let shareUrl = "";

    switch(platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans">
      
      {/* Background Ambience */}
      <div className="fixed top-0 left-0 right-0 h-screen -z-10 overflow-hidden pointer-events-none">
         {/* Organic blobs for light mode */}
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-ocean-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-coral-200/30 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-sand-200/60 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-ink-100 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                        <path d="M30 80V50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50V80" stroke="#0B4F6C" strokeWidth="16" strokeLinecap="round" />
                        <circle cx="50" cy="58" r="10" fill="#FF8A6B" />
                    </svg>
                </div>
                <span className="font-bold text-lg text-ink-900 tracking-tight">Aurora Foundry</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-sm font-medium text-ink-600 hover:text-ocean-600 transition-colors">Features</a>
                <a href="#pricing" className="text-sm font-medium text-ink-600 hover:text-ocean-600 transition-colors">Pricing</a>
                <a href="#testimonials" className="text-sm font-medium text-ink-600 hover:text-ocean-600 transition-colors">Customers</a>
            </div>
            <div className="flex items-center gap-4">
                <button onClick={onStartBuilding} className="hidden md:block text-sm font-medium text-ink-600 hover:text-ink-900 transition-colors">Sign In</button>
                <Button variant="primary" size="sm" onClick={onStartBuilding}>Get Started</Button>
            </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ocean-200 bg-white/80 backdrop-blur shadow-sm text-ocean-700 text-sm font-medium mb-8 hover:bg-white transition-colors cursor-pointer animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-ocean-500 animate-pulse"></span>
                v2.0 Now Available with GenUI
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-ink-900 animate-fade-in-up stagger-1 leading-[1.1]">
            Forge the Future with <br/>
            <span className="brand-text-gradient">Intelligent Design</span>
            </h1>
            
            <p className="text-xl text-ink-500 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up stagger-2">
            The all-in-one interface design platform powered by neural intelligence. 
            Build, prototype, and deploy industrial-grade UI at the speed of light.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-3">
            <Button 
                variant="aurora" 
                size="lg" 
                onClick={onStartBuilding}
                className="group shadow-xl shadow-coral-500/20 hover:shadow-coral-500/30 px-8 h-14 text-lg"
            >
                Start Building Free
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="secondary" size="lg" className="h-14 px-8 text-lg" icon={<Play size={20} fill="currentColor" />}>
                Watch Showreel
            </Button>
            </div>
        </div>

        {/* Interactive Demo Wrapper */}
        <div className="mt-24 max-w-6xl mx-auto animate-fade-in-up stagger-4">
             <div className="bg-white rounded-2xl shadow-2xl shadow-ocean-900/10 border border-ink-100 overflow-hidden flex flex-col md:flex-row min-h-[500px] transition-shadow hover:shadow-float duration-500">
              
              {/* Left: Controls */}
              <div className="w-full md:w-2/5 p-8 border-b md:border-b-0 md:border-r border-ink-100 bg-sand-50 flex flex-col">
                <div className="mb-8">
                   <h3 className="text-lg font-bold text-ink-900 flex items-center gap-2">
                     <Sparkles size={18} className="text-ocean-600"/>
                     AI Component Generator
                   </h3>
                   <p className="text-sm text-ink-500 mt-2">Describe the UI element you need, and Aurora will construct it instantly.</p>
                </div>

                <div className="space-y-6 flex-1">
                  <div>
                    <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider mb-2 block">Prompt</label>
                    <div className="relative">
                      <textarea 
                        value={prompt}
                        readOnly
                        placeholder="Waiting for input..."
                        className="w-full h-32 p-4 rounded-lg border border-ink-200 bg-white text-ink-900 text-sm focus:outline-none focus:ring-2 focus:ring-ocean-500 resize-none font-mono shadow-sm"
                      />
                      {isLoading && (
                        <div className="absolute bottom-4 right-4">
                          <Loader2 size={16} className="animate-spin text-ocean-600" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider mb-3 block">Try a Preset</label>
                    <div className="flex flex-col gap-2">
                      <button 
                        onClick={() => runDemo('profile', 'Generate a clean user profile card with a coral accent button.')}
                        disabled={isLoading || typingIndex > 0}
                        className="p-3 rounded-lg border border-ink-200 bg-white hover:border-ocean-300 hover:shadow-md transition-all flex items-center gap-3 text-sm text-ink-700 disabled:opacity-50 disabled:cursor-not-allowed text-left hover:-translate-y-0.5"
                      >
                        <div className="p-2 bg-ocean-50 rounded text-ocean-600"><User size={16}/></div>
                        <span>User Profile Card</span>
                      </button>
                      <button 
                        onClick={() => runDemo('pricing', 'Create a premium enterprise pricing tier card with checkmarks.')}
                        disabled={isLoading || typingIndex > 0}
                        className="p-3 rounded-lg border border-ink-200 bg-white hover:border-ocean-300 hover:shadow-md transition-all flex items-center gap-3 text-sm text-ink-700 disabled:opacity-50 disabled:cursor-not-allowed text-left hover:-translate-y-0.5"
                      >
                         <div className="p-2 bg-coral-50 rounded text-coral-600"><CreditCard size={16}/></div>
                        <span>Pricing Tier</span>
                      </button>
                      <button 
                         onClick={() => runDemo('alert', 'Design a success notification toast with icon.')}
                         disabled={isLoading || typingIndex > 0}
                         className="p-3 rounded-lg border border-ink-200 bg-white hover:border-ocean-300 hover:shadow-md transition-all flex items-center gap-3 text-sm text-ink-700 disabled:opacity-50 disabled:cursor-not-allowed text-left hover:-translate-y-0.5"
                      >
                         <div className="p-2 bg-emerald-50 rounded text-emerald-600"><Bell size={16}/></div>
                        <span>Success Notification</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Preview Canvas */}
              <div className="w-full md:w-3/5 bg-ink-950 relative flex items-center justify-center p-8 overflow-hidden">
                 {/* Grid Background */}
                 <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                 
                 {/* Content Container */}
                 <div className="relative z-10 w-full max-w-md">
                    {isLoading ? (
                      <div className="flex flex-col items-center justify-center text-white/50 gap-4">
                        <div className="w-12 h-12 border-4 border-ocean-500/30 border-t-ocean-500 rounded-full animate-spin"></div>
                        <p className="font-mono text-sm animate-pulse">Synthesizing UI...</p>
                      </div>
                    ) : activePreview === 'empty' ? (
                      <div className="text-center text-white/30 border-2 border-dashed border-white/10 rounded-xl p-12">
                        <Command size={48} className="mx-auto mb-4 opacity-50"/>
                        <p className="font-mono text-sm">Select a preset to generate component</p>
                      </div>
                    ) : (
                      <div className="animate-scale-in origin-center">
                        {/* Render generated components */}
                        
                        {activePreview === 'profile' && (
                          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                             <div className="h-24 bg-ocean-600 relative overflow-hidden">
                               <div className="absolute inset-0 bg-gradient-to-r from-ocean-600 to-ocean-400"></div>
                               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2">
                                 <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg">
                                    <img src="https://picsum.photos/id/1027/200/200" className="w-full h-full rounded-full object-cover" alt="Profile" />
                                 </div>
                               </div>
                             </div>
                             <div className="pt-10 pb-6 px-6 text-center">
                               <h3 className="font-bold text-ink-900 text-lg">Sarah Jenkins</h3>
                               <p className="text-ink-500 text-sm mb-4">Product Designer</p>
                               <div className="flex gap-2 justify-center">
                                 <button className="px-4 py-2 bg-coral-500 text-white rounded-lg text-sm font-medium hover:bg-coral-600 transition-colors shadow-md shadow-coral-500/20">Follow</button>
                                 <button className="px-4 py-2 bg-sand-100 text-ink-700 rounded-lg text-sm font-medium hover:bg-sand-200 transition-colors">Message</button>
                                </div>
                             </div>
                          </div>
                        )}

                        {activePreview === 'pricing' && (
                          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-t-4 border-ocean-600">
                             <div className="p-6">
                               <span className="text-xs font-bold text-ocean-600 uppercase tracking-wider bg-ocean-50 px-2 py-1 rounded">Enterprise</span>
                               <h3 className="mt-4 text-3xl font-bold text-ink-900">$49<span className="text-lg text-ink-400 font-normal">/mo</span></h3>
                               <p className="text-ink-500 text-sm mt-2">Perfect for growing teams and startups.</p>
                               
                               <ul className="mt-6 space-y-3">
                                 {[1,2,3,4].map(i => (
                                   <li key={i} className="flex items-center gap-3 text-sm text-ink-700">
                                     <div className="p-0.5 bg-emerald-100 rounded-full text-emerald-600"><Check size={12}/></div>
                                     <span>Advanced analytics feature</span>
                                   </li>
                                 ))}
                               </ul>

                               <button className="w-full mt-8 py-3 bg-ocean-600 text-white rounded-xl font-medium shadow-lg shadow-ocean-600/20 hover:bg-ocean-700 transition-all hover:scale-[1.02]">
                                 Get Started
                               </button>
                             </div>
                          </div>
                        )}

                        {activePreview === 'alert' && (
                          <div className="bg-white rounded-xl shadow-2xl p-4 flex items-start gap-4 border-l-4 border-emerald-500 animate-slide-up">
                             <div className="p-2 bg-emerald-50 rounded-full text-emerald-600 shrink-0">
                               <Check size={20} />
                             </div>
                             <div className="flex-1">
                               <h4 className="font-bold text-ink-900 text-sm">Deployment Successful</h4>
                               <p className="text-ink-500 text-xs mt-1">Your changes have been deployed to the production server.</p>
                             </div>
                             <button className="text-ink-400 hover:text-ink-600">×</button>
                          </div>
                        )}
                        
                        {/* Simulated Code Tag */}
                        <div className="absolute -bottom-8 right-0 bg-black/80 backdrop-blur text-white text-[10px] px-2 py-1 rounded font-mono flex items-center gap-1 animate-pulse">
                          <Zap size={10} className="text-yellow-400"/>
                          Generated in 0.4s
                        </div>
                      </div>
                    )}
                 </div>
              </div>
           </div>
        </div>

        {/* Social Proof */}
        <div className="mt-24 pt-10 text-center">
            <p className="text-sm font-semibold text-ink-400 uppercase tracking-widest mb-10">Trusted by visionaries at</p>
            <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-12 md:gap-20">
               
               {/* Nebula */}
               <div className="group flex flex-col items-center gap-2 cursor-pointer">
                  <div className="h-12 w-12 text-ink-300 group-hover:text-ocean-600 transition-colors duration-500">
                    <svg viewBox="0 0 40 40" fill="currentColor">
                      <path d="M20 5L23 15L33 18L24 24L26 35L20 28L14 35L16 24L7 18L17 15L20 5Z" />
                    </svg>
                  </div>
                  <span className="font-bold text-lg text-ink-300 group-hover:text-ink-800 transition-colors duration-500">NEBULA</span>
               </div>

               {/* Velocity */}
               <div className="group flex flex-col items-center gap-2 cursor-pointer">
                  <div className="h-12 w-12 text-ink-300 group-hover:text-coral-500 transition-colors duration-500">
                     <svg viewBox="0 0 40 40" fill="currentColor">
                       <path d="M5 20L25 5V15H35L15 35V25H5L5 20Z" />
                     </svg>
                  </div>
                  <span className="font-bold text-lg italic text-ink-300 group-hover:text-ink-800 transition-colors duration-500">Velocity</span>
               </div>

               {/* Tesseract */}
               <div className="group flex flex-col items-center gap-2 cursor-pointer">
                  <div className="h-12 w-12 text-ink-300 group-hover:text-ocean-500 transition-colors duration-500">
                    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3">
                      <rect x="8" y="8" width="24" height="24" rx="4" />
                      <rect x="14" y="14" width="12" height="12" rx="2" />
                    </svg>
                  </div>
                   <span className="font-bold text-lg text-ink-300 group-hover:text-ink-800 transition-colors duration-500">Tesseract</span>
               </div>

               {/* Vertex */}
               <div className="group flex flex-col items-center gap-2 cursor-pointer">
                  <div className="h-12 w-12 text-ink-300 group-hover:text-emerald-500 transition-colors duration-500">
                    <svg viewBox="0 0 40 40" fill="currentColor">
                       <circle cx="10" cy="30" r="5" />
                       <circle cx="30" cy="30" r="5" />
                       <circle cx="20" cy="10" r="5" />
                       <path d="M10 30L20 10L30 30" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <span className="font-bold text-lg text-ink-300 group-hover:text-ink-800 transition-colors duration-500 tracking-wider">VERTEX</span>
               </div>

               {/* Polaris */}
               <div className="group flex flex-col items-center gap-2 cursor-pointer">
                  <div className="h-12 w-12 text-ink-300 group-hover:text-purple-500 transition-colors duration-500">
                    <svg viewBox="0 0 40 40" fill="currentColor">
                       <path d="M20 0L24 16L40 20L24 24L20 40L16 24L0 20L16 16L20 0Z" />
                    </svg>
                  </div>
                  <span className="font-bold text-lg text-ink-300 group-hover:text-ink-800 transition-colors duration-500">POLARIS</span>
               </div>

            </div>
        </div>
      </section>

      {/* Feature Deep Dive 1 */}
      <section id="features" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div>
                  <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center text-coral-500 mb-6">
                      <Code size={24} />
                  </div>
                  <h2 className="text-4xl font-bold text-ink-900 mb-6">Generative UI Systems</h2>
                  <p className="text-lg text-ink-600 mb-8 leading-relaxed">
                      Stop building components from scratch. Our neural engine understands design intent and generates accessible, theme-aware React components in milliseconds.
                  </p>
                  <ul className="space-y-4 mb-8">
                      {['Context-aware code generation', 'Tailwind & CSS Modules support', 'Accessibility audit built-in'].map((item) => (
                          <li key={item} className="flex items-center gap-3 text-ink-700">
                              <Check size={20} className="text-coral-500" />
                              {item}
                          </li>
                      ))}
                  </ul>
                  <Button variant="outline" icon={<ArrowRight size={16} />}>Explore Documentation</Button>
              </div>
              <div className="relative">
                  <div className="absolute inset-0 bg-coral-200/20 rounded-3xl transform rotate-3 scale-105"></div>
                  <Card className="relative shadow-xl border-ink-100 p-8 bg-sand-50">
                      <div className="space-y-4 font-mono text-sm">
                          <div className="flex gap-2">
                              <span className="text-purple-600">const</span>
                              <span className="text-blue-600">Button</span>
                              <span className="text-ink-600">=</span>
                              <span className="text-ink-600">({'{'} children {'}'})</span>
                              <span className="text-purple-600">=&gt;</span>
                              <span className="text-ink-600">{'{'}</span>
                          </div>
                          <div className="pl-4 text-ink-500">
                              // AI Generated Logic
                          </div>
                          <div className="pl-4">
                              <span className="text-purple-600">return</span> (
                              <br/>
                              &nbsp;&nbsp;&lt;<span className="text-red-500">button</span> <span className="text-orange-600">className</span>="<span className="text-green-600">bg-coral-500 text-white rounded-lg...</span>"&gt;
                              <br/>
                              &nbsp;&nbsp;&nbsp;&nbsp;{'{'}children{'}'}
                              <br/>
                              &nbsp;&nbsp;&lt;/<span className="text-red-500">button</span>&gt;
                              <br/>
                              )
                          </div>
                          <div className="text-ink-600">{'}'}</div>
                      </div>
                  </Card>
              </div>
          </div>
      </section>

      {/* Feature Deep Dive 2 */}
      <section className="py-24 bg-sand-50 relative">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                  <div className="absolute inset-0 bg-ocean-200/20 rounded-3xl transform -rotate-3 scale-105"></div>
                  <Card className="relative shadow-xl border-ink-100" noPadding>
                       <img src="https://picsum.photos/seed/design/800/600" className="w-full rounded-xl" alt="Design System" />
                       <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur rounded-lg shadow-sm">
                           <div className="flex items-center gap-3">
                               <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                               <span className="font-semibold text-ink-900">System Synced</span>
                               <span className="text-xs text-ink-500 ml-auto">Just now</span>
                           </div>
                       </div>
                  </Card>
              </div>
              <div className="order-1 md:order-2">
                  <div className="w-12 h-12 bg-ocean-50 rounded-xl flex items-center justify-center text-ocean-600 mb-6">
                      <Layers size={24} />
                  </div>
                  <h2 className="text-4xl font-bold text-ink-900 mb-6">Automated Governance</h2>
                  <p className="text-lg text-ink-600 mb-8 leading-relaxed">
                      Keep your design system pure. Aurora monitors usage, flags detached components, and automatically updates documentation when tokens change.
                  </p>
                   <ul className="space-y-4 mb-8">
                      {['Visual regression testing', 'Token alias management', 'Figma bi-directional sync'].map((item) => (
                          <li key={item} className="flex items-center gap-3 text-ink-700">
                              <Check size={20} className="text-ocean-600" />
                              {item}
                          </li>
                      ))}
                  </ul>
                  <Button variant="outline" icon={<ArrowRight size={16} />}>Learn about Governance</Button>
              </div>
          </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-ink-900 mb-4">Loved by Product Teams</h2>
                  <p className="text-ink-500">Don't take our word for it. Here is what the community is building.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      {
                          text: "Aurora cut our design-to-code time by 60%. The AI suggestions are surprisingly accurate to our brand guidelines.",
                          author: "Elena R.",
                          role: "Staff Engineer @ TechFlow",
                          avatar: "https://picsum.photos/id/1011/100/100"
                      },
                      {
                          text: "Finally, a tool that respects the nuance of token-based design systems. The governance features are a lifesaver.",
                          author: "Marcus J.",
                          role: "Design Lead @ Untitled",
                          avatar: "https://picsum.photos/id/1012/100/100"
                      },
                      {
                          text: "The generated components are production-ready. I rarely have to touch the CSS. It's like having a senior dev on call.",
                          author: "Sarah L.",
                          role: "CTO @ StartUp",
                          avatar: "https://picsum.photos/id/1013/100/100"
                      }
                  ].map((t, i) => (
                      <Card key={i} className="bg-sand-50/50 hover:bg-white transition-colors duration-300">
                          <div className="flex gap-1 mb-4">
                              {[1,2,3,4,5].map(star => <Star key={star} size={16} className="text-yellow-400 fill-current" />)}
                          </div>
                          <p className="text-ink-700 mb-6 leading-relaxed">"{t.text}"</p>
                          <div className="flex items-center gap-3">
                              <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full" />
                              <div>
                                  <p className="font-bold text-ink-900 text-sm">{t.author}</p>
                                  <p className="text-xs text-ink-500">{t.role}</p>
                              </div>
                          </div>
                      </Card>
                  ))}
              </div>
          </div>
      </section>

      {/* Pricing - Holographic Edition */}
      <section id="pricing" className="py-32 bg-ink-950 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(#0B4F6C_1px,transparent_1px)] [background-size:40px_40px] opacity-10"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ocean-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-coral-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="text-center max-w-3xl mx-auto mb-20">
                  <h2 className="text-4xl font-bold mb-4 text-white">Simple, Transparent Pricing</h2>
                  <p className="text-ink-300 text-lg">Choose the perfect plan for your creative journey.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center">
                  
                  {/* Free Plan */}
                  <div className="relative group">
                      <div className="absolute inset-0 bg-ink-800 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-ink-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors">
                        <h3 className="text-xl font-bold mb-2 text-white">Starter</h3>
                        <p className="text-ink-400 text-sm mb-6">For hobbyists and experiments.</p>
                        <div className="text-4xl font-bold mb-8 text-white">$0<span className="text-lg text-ink-500 font-normal">/mo</span></div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-sm text-ink-300"><Check size={16} className="text-ink-500"/> 1 Project</li>
                            <li className="flex items-center gap-3 text-sm text-ink-300"><Check size={16} className="text-ink-500"/> Basic AI Generation</li>
                            <li className="flex items-center gap-3 text-sm text-ink-300"><Check size={16} className="text-ink-500"/> Community Support</li>
                        </ul>
                        <Button variant="glass" className="w-full">Start Free</Button>
                      </div>
                  </div>

                   {/* Pro Plan (Holographic Highlight) */}
                  <div className="relative transform md:-translate-y-4">
                      {/* Glow Behind */}
                      <div className="absolute inset-0 bg-gradient-to-r from-ocean-500 via-coral-500 to-ocean-500 rounded-2xl blur-lg opacity-40 animate-pulse"></div>
                      
                      {/* Gradient Border Container */}
                      <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-white/20 to-white/5 overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-r from-ocean-500/20 via-coral-500/20 to-ocean-500/20 opacity-50"></div>
                         
                         {/* Card Content */}
                         <div className="relative bg-ink-900/90 backdrop-blur-xl rounded-2xl p-8 h-full">
                            <div className="absolute top-0 right-0 bg-gradient-to-l from-ocean-500 to-ocean-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-lg shadow-lg">POPULAR</div>
                            
                            <h3 className="text-xl font-bold mb-2 text-white flex items-center gap-2">
                                Pro <Sparkles size={16} className="text-coral-400"/>
                            </h3>
                            <p className="text-ocean-200 text-sm mb-6">For professional designers.</p>
                            <div className="text-5xl font-bold mb-8 text-white tracking-tight">$29<span className="text-lg text-ink-400 font-normal">/mo</span></div>
                            
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm text-white font-medium"><div className="p-1 rounded bg-ocean-500/20 text-ocean-300"><Check size={12}/></div> Unlimited Projects</li>
                                <li className="flex items-center gap-3 text-sm text-white font-medium"><div className="p-1 rounded bg-ocean-500/20 text-ocean-300"><Check size={12}/></div> Advanced AI Models</li>
                                <li className="flex items-center gap-3 text-sm text-white font-medium"><div className="p-1 rounded bg-ocean-500/20 text-ocean-300"><Check size={12}/></div> Export to React/Vue</li>
                                <li className="flex items-center gap-3 text-sm text-white font-medium"><div className="p-1 rounded bg-ocean-500/20 text-ocean-300"><Check size={12}/></div> Priority Support</li>
                            </ul>
                            
                            <Button variant="aurora" className="w-full h-12 text-base shadow-lg shadow-ocean-500/20" onClick={onStartBuilding}>Get Started</Button>
                         </div>
                      </div>
                  </div>

                   {/* Enterprise Plan */}
                   <div className="relative group">
                      <div className="absolute inset-0 bg-ink-800 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-ink-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-colors">
                        <h3 className="text-xl font-bold mb-2 text-white">Enterprise</h3>
                        <p className="text-ink-400 text-sm mb-6">For large scale organizations.</p>
                        <div className="text-4xl font-bold mb-8 text-white">Custom</div>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-sm text-ink-300"><Check size={16} className="text-ink-500"/> SSO & Advanced Security</li>
                            <li className="flex items-center gap-3 text-sm text-ink-300"><Check size={16} className="text-ink-500"/> Dedicated Success Manager</li>
                            <li className="flex items-center gap-3 text-sm text-ink-300"><Check size={16} className="text-ink-500"/> On-premise Deployment</li>
                        </ul>
                        <Button variant="glass" className="w-full">Contact Sales</Button>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto relative group">
          {/* Glow Effect behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-ocean-400 via-coral-400 to-ocean-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-ink-900 rounded-[2rem] p-8 md:p-16 overflow-hidden border border-ink-800 shadow-2xl">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-20">
              <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
              </svg>
            </div>

            {/* Decorative Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-ocean-500/30 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-coral-500/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ocean-500/30 bg-ocean-500/10 text-ocean-300 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm">
                 <Sparkles size={12} />
                 Limited Time Access
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-300 to-coral-300">accelerate</span> your workflow?
              </h2>
              
              <p className="text-lg text-ink-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join a community of 10,000+ designers and engineers building the next generation of digital products with Aurora Foundry.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  variant="aurora" 
                  size="lg" 
                  className="h-14 px-8 text-lg w-full sm:w-auto shadow-lg shadow-coral-500/20"
                  onClick={onStartBuilding}
                >
                  Start Building Free
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button 
                  variant="glass" 
                  size="lg" 
                  className="h-14 px-8 text-lg w-full sm:w-auto"
                >
                  Schedule Demo
                </Button>
              </div>

              {/* Mini Social Proof */}
              <div className="mt-12 pt-8 border-t border-white/5 w-full max-w-lg flex items-center justify-between text-ink-400 text-sm">
                <div className="flex -space-x-3">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-ink-900 bg-ink-800 flex items-center justify-center text-xs overflow-hidden">
                       <img src={`https://picsum.photos/id/${100+i}/50/50`} alt="User" />
                     </div>
                   ))}
                   <div className="w-8 h-8 rounded-full border-2 border-ink-900 bg-ink-800 flex items-center justify-center text-xs font-medium text-white">
                     +2k
                   </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                     {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <span>4.9/5 from users</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-ink-100 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
              <div className="col-span-2 lg:col-span-2">
                  <div className="flex items-center gap-2 mb-4">
                        <div className="w-6 h-6">
                            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                                <path d="M30 80V50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50V80" stroke="#0B4F6C" strokeWidth="16" strokeLinecap="round" />
                                <circle cx="50" cy="58" r="10" fill="#FF8A6B" />
                            </svg>
                        </div>
                        <span className="font-bold text-lg text-ink-900">Aurora Foundry</span>
                  </div>
                  <p className="text-ink-500 text-sm max-w-xs mb-6">
                      Empowering the next generation of digital creators with AI-driven design infrastructure.
                  </p>
                  <div className="flex gap-4">
                      <button onClick={() => handleShare('twitter')} className="p-2 bg-sand-50 rounded-full text-ink-500 hover:text-ocean-600 hover:bg-ocean-50 transition-colors">
                          <Twitter size={18} />
                      </button>
                      <button onClick={() => handleShare('linkedin')} className="p-2 bg-sand-50 rounded-full text-ink-500 hover:text-ocean-600 hover:bg-ocean-50 transition-colors">
                          <Linkedin size={18} />
                      </button>
                      <button onClick={() => handleShare('facebook')} className="p-2 bg-sand-50 rounded-full text-ink-500 hover:text-ocean-600 hover:bg-ocean-50 transition-colors">
                          <Facebook size={18} />
                      </button>
                  </div>
              </div>
              
              <div>
                  <h4 className="font-bold text-ink-900 mb-4">Product</h4>
                  <ul className="space-y-2 text-sm text-ink-600">
                      <li><a href="#" className="hover:text-ocean-600">Features</a></li>
                      <li><a href="#" className="hover:text-ocean-600">Pricing</a></li>
                      <li><a href="#" className="hover:text-ocean-600">Changelog</a></li>
                      <li><a href="#" className="hover:text-ocean-600">Documentation</a></li>
                  </ul>
              </div>

              <div>
                  <h4 className="font-bold text-ink-900 mb-4">Company</h4>
                  <ul className="space-y-2 text-sm text-ink-600">
                      <li><a href="#" className="hover:text-ocean-600">About</a></li>
                      <li><a href="#" className="hover:text-ocean-600">Careers</a></li>
                      <li><a href="#" className="hover:text-ocean-600">Blog</a></li>
                      <li><a href="#" className="hover:text-ocean-600">Contact</a></li>
                  </ul>
              </div>

              <div>
                  <h4 className="font-bold text-ink-900 mb-4">Legal</h4>
                  <ul className="space-y-2 text-sm text-ink-600">
                      <li><a href="#" className="hover:text-ocean-600">Privacy Policy</a></li>
                      <li><a href="#" className="hover:text-ocean-600">Terms of Service</a></li>
                      <li><a href="#" className="hover:text-ocean-600">Cookie Policy</a></li>
                  </ul>
              </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-ink-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink-400">
              <p>&copy; 2024 Aurora Foundry Inc. All rights reserved.</p>
              <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  System Operational
              </div>
          </div>
      </footer>
    </div>
  );
};