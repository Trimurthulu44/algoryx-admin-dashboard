import React, { useState } from 'react';
import { ArrowUpRight, BarChart2 } from 'lucide-react';

export function AnalyticsChart({
  timeRange,
  setTimeRange,
  activeMetricTab,
  setActiveMetricTab,
  chartData,
}) {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  const ranges = ['7D', '30D', '90D', '1Y'];
  const metrics = [
    { id: 'requests', label: 'Requests', unit: '/s' },
    { id: 'users', label: 'Users', unit: '' },
    { id: 'performance', label: 'Latency', unit: 'ms' },
  ];

  const currentDataset = chartData[timeRange] || chartData['7D'];

  // Calculate scales for responsive SVG
  const values = currentDataset.map((d) => d[activeMetricTab] || 0);
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const range = maxVal - minVal || 1;

  const chartHeight = 220;
  const chartWidth = 650;
  const paddingX = 40;
  const paddingY = 25;

  const getX = (idx) => {
    return paddingX + (idx / (currentDataset.length - 1)) * (chartWidth - paddingX * 2);
  };

  const getY = (val) => {
    return chartHeight - paddingY - ((val - minVal) / range) * (chartHeight - paddingY * 2);
  };

  // Build SVG path
  const pathD = currentDataset
    .map((d, i) => `${i === 0 ? 'M' : 'L'} ${getX(i)},${getY(d[activeMetricTab])}`)
    .join(' ');

  // Build Area path
  const areaD = `${pathD} L ${getX(currentDataset.length - 1)},${chartHeight - paddingY} L ${getX(0)},${chartHeight - paddingY} Z`;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs">
      {/* Header with Title and Range Selectors */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-base font-semibold text-gray-900 flex items-center gap-2">
            <span>Platform Performance</span>
            <span className="text-xs px-2 py-0.5 font-medium bg-blue-50 text-blue-700 rounded-full border border-blue-200">
              Live Feed
            </span>
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Real-time throughput, active sessions, and global edge latency.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Metric Selector */}
          <div className="flex bg-gray-100 p-0.5 rounded-lg text-xs font-medium text-gray-600">
            {metrics.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveMetricTab(m.id)}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeMetricTab === m.id
                    ? 'bg-white text-gray-900 shadow-2xs font-semibold'
                    : 'hover:text-gray-900'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* Time Range Tabs */}
          <div className="flex bg-gray-100 p-0.5 rounded-lg text-xs font-medium text-gray-600">
            {ranges.map((r) => (
              <button
                key={r}
                onClick={() => setTimeRange(r)}
                className={`px-2 py-1 rounded-md transition-all ${
                  timeRange === r
                    ? 'bg-blue-600 text-white shadow-2xs font-semibold'
                    : 'hover:text-gray-900'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SVG Chart Area */}
      <div className="relative pt-4 overflow-hidden">
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          className="w-full h-48 sm:h-56 overflow-visible"
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Horizontal Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => {
            const y = chartHeight - paddingY - pct * (chartHeight - paddingY * 2);
            const gridVal = Math.round(minVal + pct * range);
            return (
              <g key={i}>
                <line
                  x1={paddingX}
                  y1={y}
                  x2={chartWidth - paddingX}
                  y2={y}
                  stroke="#E5E7EB"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />
                <text
                  x={paddingX - 8}
                  y={y + 3}
                  textAnchor="end"
                  fill="#9CA3AF"
                  fontSize="10"
                  fontFamily="monospace"
                >
                  {gridVal}
                </text>
              </g>
            );
          })}

          {/* Shaded Area */}
          <path d={areaD} fill="url(#chartGradient)" />

          {/* Primary Trend Line */}
          <path
            d={pathD}
            fill="none"
            stroke="#2563EB"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Interactive Data Points */}
          {currentDataset.map((d, i) => {
            const cx = getX(i);
            const cy = getY(d[activeMetricTab]);
            const isHovered = hoveredPoint?.index === i;

            return (
              <g key={i} className="cursor-pointer">
                {/* Vertical hover guide */}
                {isHovered && (
                  <line
                    x1={cx}
                    y1={paddingY}
                    x2={cx}
                    y2={chartHeight - paddingY}
                    stroke="#93C5FD"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                  />
                )}

                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 5 : 3.5}
                  fill={isHovered ? '#1D4ED8' : '#FFFFFF'}
                  stroke="#2563EB"
                  strokeWidth="2"
                  onMouseEnter={() => setHoveredPoint({ index: i, ...d })}
                  onMouseLeave={() => setHoveredPoint(null)}
                />

                {/* X-axis Labels */}
                <text
                  x={cx}
                  y={chartHeight - 6}
                  textAnchor="middle"
                  fill="#6B7280"
                  fontSize="11"
                  fontWeight="500"
                >
                  {d.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Hover Tooltip Box */}
        {hoveredPoint && (
          <div
            className="absolute top-2 right-4 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-md pointer-events-none flex items-center gap-2"
          >
            <span className="font-semibold text-gray-300">{hoveredPoint.label}:</span>
            <span className="font-mono font-bold text-blue-400">
              {hoveredPoint[activeMetricTab]} {metrics.find((m) => m.id === activeMetricTab)?.unit}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
export default AnalyticsChart;
