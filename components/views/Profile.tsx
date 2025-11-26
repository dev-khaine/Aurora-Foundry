import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useToast } from '../../context/ToastContext';
import { User, Mail, MapPin, Camera, Bell, Shield, CreditCard, Check, Globe } from 'lucide-react';

export const Profile: React.FC = () => {
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Alex Designer',
    title: 'Senior Product Architect',
    location: 'San Francisco, CA',
    email: 'alex@aurorafoundry.com',
    bio: 'Obsessed with pixel perfection and generative design systems. Building the future of UI at Aurora.'
  });

  const handleSave = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      addToast('success', 'Profile updated successfully.');
    }, 1000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-ink-900">Account Settings</h1>
          <p className="text-ink-500 mt-1">Manage your personal information and preferences.</p>
        </div>
        <div className="flex gap-3">
            <Button variant="secondary">Cancel</Button>
            <Button 
                variant="primary" 
                onClick={handleSave}
                disabled={isLoading}
            >
                {isLoading ? 'Saving...' : 'Save Changes'}
            </Button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Avatar & Bio */}
        <div className="md:col-span-1 space-y-6">
            <Card className="text-center">
                <div className="relative inline-block mb-4 group cursor-pointer">
                    <div className="w-32 h-32 rounded-full p-1 border-2 border-ocean-100 mx-auto overflow-hidden">
                        <img src="https://picsum.photos/id/64/300/300" alt="Profile" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-ink-900/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Camera className="text-white" size={24} />
                    </div>
                    <button className="absolute bottom-0 right-2 bg-ocean-600 text-white p-2 rounded-full shadow-md hover:bg-ocean-700 transition-colors">
                        <Camera size={14} />
                    </button>
                </div>
                <h3 className="text-lg font-bold text-ink-900">{formData.name}</h3>
                <p className="text-sm text-ink-500">{formData.title}</p>
                
                <div className="mt-6 text-left">
                    <label className="text-xs font-semibold text-ink-400 uppercase tracking-wider mb-2 block">Bio</label>
                    <textarea 
                        className="w-full text-sm text-ink-700 bg-sand-50 border border-ink-200 rounded-lg p-3 focus:outline-none focus:border-ocean-500 transition-colors h-24 resize-none"
                        value={formData.bio}
                        onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    />
                </div>
            </Card>

            <Card className="space-y-4">
                <div className="flex items-center gap-3 text-ink-700">
                    <Globe size={18} className="text-ink-400" />
                    <span className="text-sm">aurorafoundry.com/alex</span>
                </div>
                <div className="flex items-center gap-3 text-ink-700">
                    <Mail size={18} className="text-ink-400" />
                    <span className="text-sm">{formData.email}</span>
                </div>
            </Card>
        </div>

        {/* Right Column: Forms */}
        <div className="md:col-span-2 space-y-6">
            
            {/* Personal Information */}
            <Card>
                <div className="flex items-center gap-2 mb-6 border-b border-ink-100 pb-4">
                    <User size={20} className="text-ocean-600" />
                    <h3 className="font-semibold text-lg text-ink-900">Personal Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-ink-700 mb-1.5">Full Name</label>
                        <input 
                            type="text" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-white border border-ink-200 rounded-lg px-4 py-2.5 text-ink-900 focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-ink-700 mb-1.5">Job Title</label>
                        <input 
                            type="text" 
                            value={formData.title}
                            onChange={(e) => setFormData({...formData, title: e.target.value})}
                            className="w-full bg-white border border-ink-200 rounded-lg px-4 py-2.5 text-ink-900 focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-ink-700 mb-1.5">Email Address</label>
                        <div className="relative">
                            <input 
                                type="email" 
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full bg-white border border-ink-200 rounded-lg px-4 py-2.5 pl-10 text-ink-900 focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 transition-all"
                            />
                            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-ink-700 mb-1.5">Location</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                value={formData.location}
                                onChange={(e) => setFormData({...formData, location: e.target.value})}
                                className="w-full bg-white border border-ink-200 rounded-lg px-4 py-2.5 pl-10 text-ink-900 focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 transition-all"
                            />
                            <MapPin size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
                        </div>
                    </div>
                </div>
            </Card>

            {/* Notifications */}
            <Card>
                <div className="flex items-center gap-2 mb-6 border-b border-ink-100 pb-4">
                    <Bell size={20} className="text-coral-500" />
                    <h3 className="font-semibold text-lg text-ink-900">Notifications</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-ink-900">Product Updates</p>
                            <p className="text-sm text-ink-500">Receive news about new features and improvements.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-ink-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ocean-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ocean-600"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-ink-900">Security Alerts</p>
                            <p className="text-sm text-ink-500">Get notified about login attempts and password changes.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-ink-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ocean-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-ocean-600"></div>
                        </label>
                    </div>
                </div>
            </Card>

             {/* Subscription */}
             <Card>
                <div className="flex items-center gap-2 mb-6 border-b border-ink-100 pb-4">
                    <CreditCard size={20} className="text-emerald-600" />
                    <h3 className="font-semibold text-lg text-ink-900">Subscription</h3>
                </div>
                <div className="bg-ocean-50 rounded-lg p-4 border border-ocean-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-white rounded-full text-ocean-600 shadow-sm">
                            <Shield size={24} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h4 className="font-bold text-ink-900">Pro Plan</h4>
                                <span className="text-xs font-bold text-ocean-600 bg-white px-2 py-0.5 rounded border border-ocean-200">ACTIVE</span>
                            </div>
                            <p className="text-sm text-ink-500">Billed annually. Next payment on Nov 24, 2024.</p>
                        </div>
                    </div>
                    <Button variant="secondary" size="sm">Manage Billing</Button>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-ink-600">
                        <Check size={16} className="text-emerald-500" />
                        <span>Unlimited Projects</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-ink-600">
                        <Check size={16} className="text-emerald-500" />
                        <span>AI Generator Access</span>
                    </div>
                </div>
            </Card>

        </div>
      </div>
    </div>
  );
};