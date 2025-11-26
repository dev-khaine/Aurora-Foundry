import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'aurora' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ocean-500/50 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-ocean-600 text-white hover:bg-ocean-700 shadow-md shadow-ocean-600/20",
    secondary: "bg-white text-ink-900 border border-ink-200 hover:bg-sand-50 hover:border-ink-300 shadow-sm",
    ghost: "bg-transparent text-ink-600 hover:text-ocean-700 hover:bg-ocean-50",
    outline: "bg-transparent text-ocean-600 border border-ocean-200 hover:border-ocean-400 hover:bg-ocean-50",
    aurora: "brand-gradient text-white border border-transparent hover:opacity-90 shadow-lg shadow-coral-400/20",
    glass: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-sm shadow-sm",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};