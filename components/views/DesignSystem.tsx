import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Tooltip } from '../ui/Tooltip';
import { Modal } from '../ui/Modal';
import { useToast } from '../../context/ToastContext';
import { Activity, Bell, Settings, ChevronRight, Zap, AlertCircle, MessageSquare } from 'lucide-react';

export const DesignSystem: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToast } = useToast();

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-4xl font-bold mb-4 text-ink-900">Design System</h1>
        <p className="text-ink-500">Reusable components, patterns, and infrastructure.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Buttons */}
        <section className="space-y-4">
          <h3 className="text-xl font-medium text-ink-800">Buttons</h3>
          <Card className="flex flex-wrap gap-4 items-center min-h-[120px]">
            <Tooltip content="High-impact brand actions (Generative AI, Upgrades)">
              <Button variant="aurora" icon={<Zap size={16}/>}>Action</Button>
            </Tooltip>
            
            <Tooltip content="Primary form submissions and key flows">
              <Button variant="primary">Primary</Button>
            </Tooltip>
            
            <Tooltip content="Secondary actions (Cancel, Back, Filters)">
              <Button variant="secondary">Secondary</Button>
            </Tooltip>
            
            <Tooltip content="Low emphasis or navigational links">
              <Button variant="outline">Outline</Button>
            </Tooltip>
            
            <Tooltip content="Clean text-only actions (Menu items)">
              <Button variant="ghost">Ghost</Button>
            </Tooltip>
          </Card>
        </section>

        {/* Infra Triggers */}
        <section className="space-y-4">
          <h3 className="text-xl font-medium text-ink-800">Feedback & Overlays</h3>
          <Card className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" onClick={() => addToast('success', 'Changes saved successfully.')}>
                Trigger Success Toast
              </Button>
              <Button variant="outline" size="sm" onClick={() => addToast('error', 'Connection failed. Try again.')}>
                Trigger Error Toast
              </Button>
              <Button variant="outline" size="sm" onClick={() => addToast('info', 'New update available.')}>
                Trigger Info Toast
              </Button>
            </div>
            <div className="pt-4 border-t border-ink-100">
               <Button variant="secondary" onClick={() => setIsModalOpen(true)}>Open Demo Modal</Button>
            </div>
          </Card>
        </section>

        {/* Inputs */}
        <section className="space-y-4">
          <h3 className="text-xl font-medium text-ink-800">Form Elements</h3>
          <Card className="space-y-6">
            {/* Default State */}
            <div>
              <label className="block text-sm font-medium text-ink-600 mb-1">Email Address</label>
              <input 
                type="text" 
                placeholder="user@aurorafoundry.com" 
                className="w-full bg-white border border-ink-200 rounded-lg px-4 py-2 text-ink-900 focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 transition-all placeholder-ink-300"
              />
            </div>
            
            {/* Error State */}
            <div>
              <label className="block text-sm font-medium text-coral-600 mb-1">Project Name</label>
              <div className="relative">
                <input 
                  type="text" 
                  defaultValue="Untitled Project"
                  className="w-full bg-coral-50/50 border border-coral-400 rounded-lg px-4 py-2 text-ink-900 focus:outline-none focus:border-coral-500 focus:ring-1 focus:ring-coral-500 transition-all placeholder-coral-300 pr-10"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <AlertCircle size={16} className="text-coral-500" />
                </div>
              </div>
              <p className="mt-1.5 text-xs text-coral-600 font-medium flex items-center gap-1">
                Project name already exists.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-4 h-4 rounded border-ink-300 text-ocean-600 focus:ring-ocean-500" />
              <span className="text-sm text-ink-600">Remember me</span>
            </div>
          </Card>
        </section>

        {/* Cards & Stats */}
        <section className="space-y-4">
          <h3 className="text-xl font-medium text-ink-800">Cards & Content</h3>
          <Card className="relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
               <ChevronRight className="text-ink-400" />
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-ocean-50 rounded-lg text-ocean-600">
                <Activity size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-ink-900">System Status</h4>
                <p className="text-sm text-ink-500 mt-1">All systems operational.</p>
                <div className="mt-3 flex items-center gap-2 text-xs font-mono text-emerald-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  ONLINE
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Alerts & Badges */}
        <section className="space-y-4">
          <h3 className="text-xl font-medium text-ink-800">Feedback Indicators</h3>
          <Card className="space-y-4">
            <div className="flex gap-2">
              <span className="px-2 py-1 rounded text-xs font-medium bg-ocean-100 text-ocean-700 border border-ocean-200">New</span>
              <span className="px-2 py-1 rounded text-xs font-medium bg-coral-100 text-coral-600 border border-coral-200">Beta</span>
              <span className="px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-600 border border-red-200">Error</span>
            </div>
            <div className="p-3 bg-ocean-50 border border-ocean-100 rounded-lg text-sm text-ocean-800 flex items-center gap-3">
              <Bell size={16} className="text-ocean-600"/>
              <span>System update scheduled for 03:00 UTC.</span>
            </div>
          </Card>
        </section>
      </div>

      {/* Demo Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Component Details">
         <div className="space-y-4">
           <div className="p-4 bg-sand-50 rounded-lg border border-ink-100">
             <div className="flex items-center gap-3 mb-2">
               <MessageSquare size={20} className="text-ocean-600"/>
               <h4 className="font-semibold text-ink-900">Modal Content</h4>
             </div>
             <p className="text-ink-600 text-sm">
               This modal uses a React Portal to render outside the DOM hierarchy, ensuring it sits above all other content (z-index: 50).
             </p>
           </div>
           <div className="flex justify-end gap-2">
             <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Close</Button>
             <Button variant="primary" onClick={() => { setIsModalOpen(false); addToast('success', 'Action confirmed.'); }}>Confirm Action</Button>
           </div>
         </div>
      </Modal>
    </div>
  );
};