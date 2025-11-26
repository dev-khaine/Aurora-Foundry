import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  id: string;
  type: ToastType;
  message: string;
  onClose: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ id, type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 5000);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  const variants = {
    success: 'bg-white border-emerald-500 text-emerald-900',
    error: 'bg-white border-coral-500 text-coral-900',
    info: 'bg-white border-ocean-500 text-ocean-900',
    warning: 'bg-white border-yellow-500 text-yellow-900',
  };

  const icons = {
    success: <CheckCircle size={20} className="text-emerald-500" />,
    error: <AlertCircle size={20} className="text-coral-500" />,
    info: <Info size={20} className="text-ocean-500" />,
    warning: <AlertTriangle size={20} className="text-yellow-500" />,
  };

  return (
    <div className={`
      flex items-start gap-3 p-4 rounded-lg shadow-card border-l-4 min-w-[320px] max-w-md
      animate-in slide-in-from-right-full fade-in duration-300 pointer-events-auto
      ${variants[type]}
    `}>
      <div className="flex-shrink-0 mt-0.5">
        {icons[type]}
      </div>
      <div className="flex-1 mr-2">
        <p className="text-sm font-medium leading-relaxed">{message}</p>
      </div>
      <button 
        onClick={() => onClose(id)}
        className="text-ink-400 hover:text-ink-700 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  );
};