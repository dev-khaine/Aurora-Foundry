import React, { ReactNode } from 'react';

interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom';
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  return (
    <div className="group relative inline-flex">
      {children}
      <div className={`
        absolute left-1/2 -translate-x-1/2 z-50 w-max max-w-[200px]
        px-2.5 py-1.5 bg-ink-900 text-white text-xs font-medium rounded-md shadow-lg shadow-ink-900/10
        opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none transform group-hover:translate-y-0
        ${position === 'top' ? 'bottom-full mb-2 translate-y-1' : 'top-full mt-2 -translate-y-1'}
      `}>
        {content}
        {/* Triangle Arrow */}
        <div className={`
          absolute left-1/2 -translate-x-1/2 border-4 border-transparent
          ${position === 'top' ? 'top-full border-t-ink-900' : 'bottom-full border-b-ink-900'}
        `}></div>
      </div>
    </div>
  );
};