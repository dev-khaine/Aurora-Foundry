import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Sparkles, Save, Layers, Code2, Cpu } from 'lucide-react';
import { generateCreativeConcept } from '../../services/geminiService';

export const Editor: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeLayer, setActiveLayer] = useState(0);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    setGeneratedContent('Connecting to neural core...');
    
    // Simulate thinking delay for effect
    setTimeout(async () => {
        const result = await generateCreativeConcept(prompt);
        setGeneratedContent(result);
        setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col md:flex-row gap-6 animate-in zoom-in-95 duration-500">
      {/* Sidebar Tools */}
      <div className="w-full md:w-64 flex flex-col gap-4">
        <Card className="flex-1 space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-ink-400 uppercase tracking-wider mb-4">Layers</h3>
            <ul className="space-y-2">
              {['Base Geometry', 'Lighting Rig', 'Texture Map', 'Atmosphere'].map((layer, i) => (
                <li 
                  key={i}
                  onClick={() => setActiveLayer(i)}
                  className={`p-2 rounded-lg cursor-pointer flex items-center gap-3 text-sm transition-colors ${activeLayer === i ? 'bg-ocean-50 text-ocean-700 font-medium' : 'hover:bg-sand-50 text-ink-600'}`}
                >
                  <Layers size={14} />
                  {layer}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="h-px bg-ink-100 my-4"></div>

          <div>
             <h3 className="text-sm font-semibold text-ink-400 uppercase tracking-wider mb-4">Actions</h3>
             <div className="grid grid-cols-2 gap-2">
               <Button variant="secondary" size="sm" icon={<Save size={14}/>}>Save</Button>
               <Button variant="secondary" size="sm" icon={<Code2 size={14}/>}>Export</Button>
             </div>
          </div>
        </Card>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 flex flex-col gap-6">
        <Card className="flex-1 relative bg-white flex items-center justify-center border-dashed border-2 border-ink-200" noPadding>
          <div className="absolute inset-0 bg-[radial-gradient(#0F1724_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]"></div>
          
          {/* Mock Canvas Content */}
          <div className="relative z-10 text-center">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-ocean-200 brand-gradient opacity-10 blur-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative w-64 h-64 border border-ink-100 bg-white shadow-float rounded-xl flex items-center justify-center">
               <Cpu size={48} className="text-ocean-600 animate-pulse" />
            </div>
            <p className="mt-8 text-ink-400 font-mono text-sm">viewport: 1920x1080 :: scale: 100%</p>
          </div>
        </Card>

        {/* AI Prompt Bar */}
        <Card className="p-4 shadow-float">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="text-xs font-semibold text-ocean-600 mb-2 flex items-center gap-2">
                <Sparkles size={12} />
                FOUNDRY AI
              </label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe a material, lighting setup, or geometric concept..."
                  className="flex-1 bg-sand-50 border border-ink-200 rounded-lg px-4 py-2 text-sm text-ink-900 focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 outline-none"
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                />
                <Button 
                  variant="aurora" 
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt}
                  icon={isGenerating ? <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div> : <Sparkles size={16}/>}
                >
                  Generate
                </Button>
              </div>
            </div>
          </div>
          {generatedContent && (
             <div className="mt-4 p-4 bg-ocean-50 rounded-lg border border-ocean-100">
                <p className="text-sm text-ink-700 font-mono leading-relaxed">
                  <span className="text-ocean-600 font-bold mr-2">system_response:</span>
                  {generatedContent}
                </p>
             </div>
          )}
        </Card>
      </div>
    </div>
  );
};