import React from 'react';
import clsx from 'clsx';

const GlassPanel = ({ className = '', children }) => {
  return (
    <div
      className={clsx(
        'rounded-3xl border border-white/5 bg-white/3 backdrop-blur-xl shadow-[0_20px_60px_rgba(6,6,20,0.35)] transition-colors duration-300',
        'relative overflow-hidden',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/0 opacity-60 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassPanel;

