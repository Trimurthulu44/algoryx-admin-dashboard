import React from 'react';

export function Button({
  children,
  variant = 'secondary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  id,
  'aria-label': ariaLabel,
}) {
  const baseStyles = 'relative inline-flex items-center justify-center font-medium transition-all duration-200 select-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070D] active:scale-[0.98] cursor-pointer';

  const variantStyles = {
    primary: 'bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-sm glow-cyan-sm border border-cyan-400/30 rounded-lg',
    secondary: 'bg-[#0D1320] hover:bg-[#131C2E] text-slate-200 hover:text-white border border-white/10 hover:border-white/20 rounded-lg shadow-xs',
    outline: 'bg-transparent hover:bg-white/[0.04] text-slate-300 hover:text-white border border-white/15 hover:border-cyan-400/40 rounded-lg',
    ghost: 'bg-transparent hover:bg-white/[0.06] text-slate-400 hover:text-slate-100 rounded-lg',
    danger: 'bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 hover:text-rose-200 border border-rose-500/30 rounded-lg',
    icon: 'p-2 text-slate-400 hover:text-slate-200 hover:bg-white/[0.06] rounded-lg transition-colors border border-transparent hover:border-white/10',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-1.5 gap-1.5 h-8',
    md: 'text-xs px-3.5 py-2 gap-2 h-9',
    lg: 'text-sm px-4 py-2.5 gap-2.5 h-10',
    icon: 'h-9 w-9 p-0',
  };

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.secondary} ${size !== 'icon' && variant !== 'icon' ? sizeStyles[size] : sizeStyles.icon} ${className}`}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={`shrink-0 ${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={`shrink-0 ${size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
      )}
    </button>
  );
}
