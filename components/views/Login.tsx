import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { useToast } from '../../context/ToastContext';
import { ArrowRight, Lock, Mail } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      addToast('success', 'Welcome back, Architect.');
      onLogin();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-ocean-100/50 rounded-full blur-[100px] mix-blend-multiply animate-blob"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-coral-100/40 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-2000"></div>

      <div className="w-full max-w-md relative z-10 animate-in fade-in zoom-in-95 duration-500">
        <div className="text-center mb-8">
           <div className="w-16 h-16 mx-auto mb-4">
             <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
               <path d="M30 80V50C30 38.9543 38.9543 30 50 30C61.0457 30 70 38.9543 70 50V80" stroke="#0B4F6C" strokeWidth="12" strokeLinecap="round" />
               <circle cx="50" cy="58" r="9" fill="#FF8A6B" />
             </svg>
           </div>
           <h1 className="text-2xl font-bold text-ink-900">Sign in to Foundry</h1>
           <p className="text-ink-500 mt-2">Enter your credentials to access the workspace.</p>
        </div>

        <Card className="shadow-float">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-ink-500 uppercase tracking-wider mb-1.5">Email</label>
              <div className="relative">
                <input 
                  type="email" 
                  defaultValue="demo@aurorafoundry.com"
                  className="w-full pl-10 pr-4 py-2.5 bg-sand-50 border border-ink-200 rounded-lg text-ink-900 text-sm focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 transition-all"
                />
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ink-500 uppercase tracking-wider mb-1.5">Password</label>
              <div className="relative">
                <input 
                  type="password" 
                  defaultValue="password123"
                  className="w-full pl-10 pr-4 py-2.5 bg-sand-50 border border-ink-200 rounded-lg text-ink-900 text-sm focus:outline-none focus:border-ocean-500 focus:ring-1 focus:ring-ocean-500 transition-all"
                />
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-ink-300 text-ocean-600 focus:ring-ocean-500" />
                <span className="text-sm text-ink-500">Remember me</span>
              </label>
              <a href="#" className="text-sm font-medium text-ocean-600 hover:text-ocean-700">Forgot password?</a>
            </div>

            <Button 
              variant="aurora" 
              className="w-full mt-2" 
              size="lg"
              disabled={isLoading}
              icon={isLoading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <ArrowRight size={18} />}
            >
              {isLoading ? 'Authenticating...' : 'Sign In'}
            </Button>
          </form>
        </Card>

        <p className="text-center mt-6 text-sm text-ink-500">
          Don't have an account? <button className="text-ocean-600 font-medium hover:underline">Request Access</button>
        </p>
      </div>
    </div>
  );
};