import React from 'react';

/**
 * Official Algoryx Company Logo Component
 * Recreates the exact corporate branding:
 * - Geometric dark charcoal hexagonal frame with precision technical notch cutouts
 * - Stylized 3D faceted metallic silver/titanium 'A' star monogram with highlights and shadow planes
 * - Clean, wide-tracked geometric 'ALGORYX' wordmark
 *
 * Variants:
 * - 'full' / 'stacked': Emblem stacked on top, 'ALGORYX' wordmark underneath (exact user reference)
 * - 'horizontal': Emblem on left, 'ALGORYX' wordmark on right (ideal for headers/navbars)
 * - 'symbol': Emblem only (ideal for collapsed sidebar, mobile icons, favicons)
 */
export function AlgoryxLogo({
  variant = 'full',
  size = 'md',
  className = '',
  showWordmark = true,
  showCompanyName = false,
  subtitle,
}) {
  // Dimension maps based on variant and size
  const getDimensions = () => {
    if (variant === 'symbol') {
      switch (size) {
        case 'xs':
          return { width: 20, height: 20 };
        case 'sm':
          return { width: 28, height: 28 };
        case 'md':
          return { width: 36, height: 36 };
        case 'lg':
          return { width: 48, height: 48 };
        case 'xl':
          return { width: 64, height: 64 };
        default:
          return { width: 36, height: 36 };
      }
    }

    if (variant === 'horizontal') {
      switch (size) {
        case 'xs':
          return { height: 22, symbolWidth: 22 };
        case 'sm':
          return { height: 28, symbolWidth: 28 };
        case 'md':
          return { height: 34, symbolWidth: 34 };
        case 'lg':
          return { height: 44, symbolWidth: 44 };
        default:
          return { height: 32, symbolWidth: 32 };
      }
    }

    // Stacked 'full' variant
    switch (size) {
      case 'xs':
        return { width: 80, height: 70 };
      case 'sm':
        return { width: 110, height: 92 };
      case 'md':
        return { width: 140, height: 116 };
      case 'lg':
        return { width: 180, height: 148 };
      case 'xl':
        return { width: 240, height: 198 };
      default:
        return { width: 130, height: 108 };
    }
  };

  const dim = getDimensions();

  // SVG Elements for the official Algoryx Hexagon Emblem
  const renderEmblem = (scale = 1, cx = 100, cy = 82) => (
    <g transform={`translate(${cx}, ${cy}) scale(${scale})`}>
      {/* Outer Hexagon Outline */}
      {/* Lower half and vertical sides */}
      <path
        d="M -48,-14 L -48,22 L 0,52 L 48,22 L 48,-14"
        fill="none"
        stroke="#33383F"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Upper angled roof with tech notches */}
      <path
        d="M -48,-24 L -44,-44 L 0,-68 L 44,-44 L 48,-24"
        fill="none"
        stroke="#33383F"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Interior bottom chevron accent */}
      <path
        d="M -16,24 L 0,35 L 16,24"
        fill="none"
        stroke="#3E454F"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Interior upper shoulder accents */}
      <path
        d="M -40,-34 L -23,-23"
        fill="none"
        stroke="#596270"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 40,-34 L 23,-23"
        fill="none"
        stroke="#596270"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* 3D Faceted A / Star Symbol */}
      {/* 1. Upper vertical peak */}
      {/* Left facet (bright silver highlight) */}
      <polygon
        points="0,-68 -15,-6 0,-15"
        fill="url(#algoryxFacetHighlight)"
      />
      {/* Right facet (medium steel shade) */}
      <polygon
        points="0,-68 0,-15 15,-6"
        fill="url(#algoryxFacetDark)"
      />

      {/* 2. Upper horizontal wings / angled blades */}
      <polygon
        points="-44,-22 0,-15 -21,4"
        fill="url(#algoryxFacetHighlight)"
      />
      <polygon
        points="44,-22 21,4 0,-15"
        fill="url(#algoryxFacetMid)"
      />

      {/* 3. Lower left leg */}
      <polygon
        points="-43,40 -14,14 -24,-4"
        fill="url(#algoryxFacetDark)"
      />
      <polygon
        points="-43,40 -28,7 -24,-4"
        fill="url(#algoryxFacetHighlight)"
      />

      {/* 4. Lower right leg */}
      <polygon
        points="43,40 24,-4 14,14"
        fill="url(#algoryxFacetMid)"
      />
      <polygon
        points="43,40 24,-4 28,7"
        fill="url(#algoryxFacetDark)"
      />

      {/* 5. Center intersecting star blades */}
      <polygon
        points="0,-15 -21,4 0,16 21,4"
        fill="#CBD5E1"
      />
      <polygon
        points="0,16 -12,2 0,-8"
        fill="url(#algoryxFacetHighlight)"
      />
      <polygon
        points="0,16 0,-8 12,2"
        fill="url(#algoryxFacetDark)"
      />
    </g>
  );

  // Gradient definitions
  const defs = (
    <defs>
      <linearGradient id="algoryxFacetHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="40%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>

      <linearGradient id="algoryxFacetMid" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D1D5DB" />
        <stop offset="60%" stopColor="#9CA3AF" />
        <stop offset="100%" stopColor="#6B7280" />
      </linearGradient>

      <linearGradient id="algoryxFacetDark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#94A3B8" />
        <stop offset="60%" stopColor="#64748B" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
    </defs>
  );

  // 1. Symbol Only Variant
  if (variant === 'symbol') {
    return (
      <svg
        viewBox="0 0 120 130"
        width={dim.width}
        height={dim.height}
        className={`inline-block select-none shrink-0 ${className}`}
        aria-label="Algoryx Symbol"
      >
        {defs}
        {renderEmblem(0.85, 60, 68)}
      </svg>
    );
  }

  // 2. Horizontal Variant (Emblem on Left, Wordmark on Right)
  if (variant === 'horizontal') {
    return (
      <div
        className={`inline-flex items-center gap-2.5 select-none ${className}`}
        style={{ height: dim.height }}
      >
        <svg
          viewBox="0 0 120 130"
          width={dim.symbolWidth}
          height={dim.symbolWidth}
          className="shrink-0"
          aria-hidden="true"
        >
          {defs}
          {renderEmblem(0.85, 60, 68)}
        </svg>

        <div className="flex flex-col justify-center min-w-0">
          <div className="flex items-center gap-1.5">
            <span
              className="font-bold tracking-[0.24em] text-gray-800 uppercase leading-none"
              style={{
                fontSize:
                  size === 'xs'
                    ? '11px'
                    : size === 'sm'
                    ? '13px'
                    : size === 'lg'
                    ? '18px'
                    : '15px',
                fontFamily:
                  "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              ALGORYX
            </span>
            {subtitle && (
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider pl-1.5 border-l border-gray-200">
                {subtitle}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 3. Full / Stacked Variant (Exact User Reference: Emblem above, ALGORYX below)
  return (
    <div
      className={`inline-flex flex-col items-center select-none ${className}`}
      style={{ width: dim.width, height: dim.height }}
    >
      <svg
        viewBox="0 0 200 185"
        width="100%"
        height="100%"
        className="overflow-visible"
        aria-label="Algoryx Logo"
      >
        {defs}
        {renderEmblem(0.9, 100, 78)}

        {showWordmark && (
          <>
            <text
              x="100"
              y="172"
              textAnchor="middle"
              fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              fontWeight="750"
              fontSize="18"
              letterSpacing="6.5"
              fill="#6B7280"
            >
              ALGORYX
            </text>
            {showCompanyName && (
              <text
                x="100"
                y="190"
                textAnchor="middle"
                fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                fontWeight="500"
                fontSize="8.5"
                letterSpacing="2"
                fill="#94A3B8"
              >
                ALGORYX SIMULATION
              </text>
            )}
          </>
        )}
      </svg>
    </div>
  );
}

export default AlgoryxLogo;
