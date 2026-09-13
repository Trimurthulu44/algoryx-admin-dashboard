import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RotateCw, CheckCircle2 } from 'lucide-react';

export function LogoAnimation({
  size = 'lg',
  onComplete,
  autoPlay = true,
  showControls = true,
  className = '',
}) {
  const [animationKey, setAnimationKey] = useState(0);

  const restartAnimation = () => {
    setAnimationKey((prev) => prev + 1);
  };

  // Dimensions based on size
  const dimensions = {
    sm: { width: 220, height: 180, scale: 0.7 },
    md: { width: 320, height: 260, scale: 0.9 },
    lg: { width: 440, height: 350, scale: 1.1 },
    xl: { width: 520, height: 410, scale: 1.3 },
  }[size] || { width: 440, height: 350, scale: 1.1 };

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Background radial glow effect */}
      <motion.div
        key={`glow-${animationKey}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute w-72 h-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
      />

      {/* Hexagonal Technical Grid Accent Lines */}
      <motion.div
        key={`ring-${animationKey}`}
        initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
        animate={{ opacity: 0.4, scale: 1, rotate: 0 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute w-80 h-80 rounded-full border border-gray-300/40 border-dashed pointer-events-none"
      />

      <svg
        key={`svg-${animationKey}`}
        viewBox="0 0 400 320"
        width={dimensions.width}
        height={dimensions.height}
        className="relative z-10 drop-shadow-sm overflow-visible"
        aria-label="Algoryx Animated Emblem"
      >
        <defs>
          {/* Specular highlights and shading */}
          <linearGradient id="animFacetHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#F1F5F9" />
            <stop offset="70%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          <linearGradient id="animFacetMid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          <linearGradient id="animFacetDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <linearGradient id="animFacetDeep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748B" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          {/* Shimmer Sweep Filter */}
          <linearGradient id="specularSheen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g transform="translate(200, 130)">
          {/* 1. Outer Charcoal Hexagonal Frame Path (Drawn sequentially) */}
          <motion.path
            d="M -72,-20 L -72,32 L 0,78 L 72,32 L 72,-20"
            fill="none"
            stroke="#2D323A"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />

          <motion.path
            d="M -72,-36 L -66,-66 L 0,-102 L 66,-66 L 72,-36"
            fill="none"
            stroke="#2D323A"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeInOut' }}
          />

          {/* 2. Inner Chevron Accents */}
          <motion.path
            d="M -24,36 L 0,52 L 24,36"
            fill="none"
            stroke="#363D47"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          />

          <motion.path
            d="M -60,-52 L -34,-34"
            fill="none"
            stroke="#5A6472"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
          />

          <motion.path
            d="M 60,-52 L 34,-34"
            fill="none"
            stroke="#5A6472"
            strokeWidth="3.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5, ease: 'easeOut' }}
          />

          {/* 3. 3D Faceted A / Star Monogram Elements */}
          {/* Upper Apex Left Specular */}
          <motion.polygon
            points="0,-102 -22,-10 0,-22"
            fill="url(#animFacetHighlight)"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Upper Apex Right Shadow */}
          <motion.polygon
            points="0,-102 0,-22 22,-10"
            fill="url(#animFacetDark)"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Left Wing Blade */}
          <motion.polygon
            points="-66,-34 0,-22 -32,6"
            fill="url(#animFacetHighlight)"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Right Wing Blade */}
          <motion.polygon
            points="66,-34 32,6 0,-22"
            fill="url(#animFacetMid)"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Lower Left Foot */}
          <motion.polygon
            points="-64,60 -20,20 -35,-6"
            fill="url(#animFacetDark)"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.polygon
            points="-64,60 -42,10 -35,-6"
            fill="url(#animFacetHighlight)"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Lower Right Foot */}
          <motion.polygon
            points="64,60 35,-6 20,20"
            fill="url(#animFacetMid)"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.polygon
            points="64,60 35,-6 42,10"
            fill="url(#animFacetDeep)"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.67, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Center Intersection Specular Diamonds */}
          <motion.polygon
            points="0,-22 -32,6 0,24 32,6"
            fill="#CBD5E1"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.72, ease: 'backOut' }}
          />
          <motion.polygon
            points="0,24 -18,3 0,-12"
            fill="url(#animFacetHighlight)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.78 }}
          />
          <motion.polygon
            points="0,24 0,-12 18,3"
            fill="url(#animFacetDark)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          />
        </g>

        {/* Wordmark Animation: Smooth Tracking and Fade In */}
        <motion.text
          x="200"
          y="274"
          textAnchor="middle"
          fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="800"
          fontSize="28"
          letterSpacing="11"
          fill="#707784"
          initial={{ opacity: 0, y: 285, letterSpacing: '4px' }}
          animate={{ opacity: 1, y: 274, letterSpacing: '11px' }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          onAnimationComplete={() => {
            if (onComplete) onComplete();
          }}
        >
          ALGORYX
        </motion.text>
      </svg>

      {/* Replay Trigger */}
      {showControls && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          onClick={restartAnimation}
          className="mt-2 inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 px-3 py-1 rounded-full shadow-2xs transition-all cursor-pointer"
          title="Replay brand animation"
        >
          <RotateCw className="w-3 h-3 text-gray-500" />
          <span>Replay Intro</span>
        </motion.button>
      )}
    </div>
  );
}

export default LogoAnimation;
