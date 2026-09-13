import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  Users,
  Layers,
  ShieldCheck,
  DollarSign,
  FolderGit2,
} from 'lucide-react';

const iconMap = {
  DollarSign: DollarSign,
  Users: Users,
  FolderGit2: FolderGit2,
  Layers: Layers,
  ShieldCheck: ShieldCheck,
  TrendingUp: TrendingUp,
};

export function StatCard({
  id,
  label,
  value,
  change,
  trend = 'up',
  supportingText,
  icon = 'TrendingUp',
  sparkline = [40, 50, 60, 55, 70],
}) {
  const IconComponent = iconMap[icon] || TrendingUp;
  const isPositive = trend === 'up';

  // SVG Sparkline calculation
  const minVal = Math.min(...sparkline);
  const maxVal = Math.max(...sparkline);
  const range = maxVal - minVal || 1;
  const height = 28;
  const width = 80;

  const points = sparkline
    .map((val, idx) => {
      const x = (idx / (sparkline.length - 1)) * width;
      const y = height - ((val - minVal) / range) * (height - 6) - 3;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div
      id={`stat-card-${id}`}
      className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between"
    >
      {/* Top row: Label & Icon */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {label}
        </span>
        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
          <IconComponent className="w-4 h-4" />
        </div>
      </div>

      {/* Main value & Change Indicator */}
      <div className="flex items-baseline justify-between gap-2 mb-2">
        <span className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 font-mono">
          {value}
        </span>

        <div className="flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          <TrendingUp className="w-3 h-3" />
          <span>{change}</span>
        </div>
      </div>

      {/* Bottom row: Supporting text & SVG Sparkline */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
        <span className="text-xs text-gray-500 truncate max-w-[140px]">
          {supportingText}
        </span>

        {/* Minimalist SVG Sparkline */}
        <div className="shrink-0" title={`Trend: ${sparkline.join(', ')}`}>
          <svg
            width={width}
            height={height}
            className="overflow-visible"
            aria-hidden="true"
          >
            <polyline
              fill="none"
              stroke="#2563EB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={points}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
export default StatCard;
