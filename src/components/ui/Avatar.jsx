import React from 'react';

export function Avatar({ initials, name, size = 'md', className = '' }) {
  const sizeStyles = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-8 h-8 text-xs font-medium',
    lg: 'w-10 h-10 text-sm font-semibold',
  };

  const getInitials = (n) => {
    if (initials) return initials;
    if (!n) return 'U';
    const parts = n.split(' ');
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return n.slice(0, 2).toUpperCase();
  };

  return (
    <div
      title={name}
      className={`inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-700 border border-blue-200 select-none ${
        sizeStyles[size] || sizeStyles.md
      } ${className}`}
    >
      {getInitials(name)}
    </div>
  );
}
