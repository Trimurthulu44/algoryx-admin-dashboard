import React, { useState } from 'react';

export function Tooltip({ children, content, position = 'top' }) {
  const [isVisible, setIsVisible] = useState(false);

  if (!content) return children;

  const positionStyles = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
  };

  return (
    <div 
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div 
          role="tooltip"
          className={`absolute z-50 px-2 py-1 text-[11px] font-mono text-slate-200 bg-[#0D1320] border border-white/15 rounded shadow-lg whitespace-nowrap pointer-events-none ${positionStyles[position] || positionStyles.top} animate-in fade-in zoom-in-95 duration-150`}
        >
          {content}
        </div>
      )}
    </div>
  );
}
