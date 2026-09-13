import React from 'react';
import { Activity, Cpu, HardDrive, Zap } from 'lucide-react';

export function SystemPulse({ metrics }) {
  const { apiLatency, cpuUsage, memoryUsage, requestsPerSec } = metrics;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-600" />
          <h3 className="text-sm font-semibold text-gray-900">System Pulse</h3>
        </div>
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Optimal SLA
        </span>
      </div>

      {/* Metrics List */}
      <div className="space-y-4 pt-4">
        {/* API Latency */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-gray-500 font-medium flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-gray-400" />
              API Latency
            </span>
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-semibold text-gray-900">
                {apiLatency.value} {apiLatency.unit}
              </span>
              <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded font-medium">
                {apiLatency.target}
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${Math.min(apiLatency.percentage, 100)}%` }}
            />
          </div>
        </div>

        {/* CPU Usage */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-gray-500 font-medium flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-gray-400" />
              CPU Usage
            </span>
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-semibold text-gray-900">
                {cpuUsage.value}%
              </span>
              <span className="text-[10px] text-gray-400 font-mono">
                32 Cores
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${cpuUsage.percentage}%` }}
            />
          </div>
        </div>

        {/* Memory Usage */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-gray-500 font-medium flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-gray-400" />
              Memory Usage
            </span>
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-semibold text-gray-900">
                {memoryUsage.value}%
              </span>
              <span className="text-[10px] text-gray-500">
                {memoryUsage.used} / {memoryUsage.total}
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-indigo-600 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${memoryUsage.percentage}%` }}
            />
          </div>
        </div>

        {/* Requests / sec */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-gray-500 font-medium flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-gray-400" />
              Requests/sec
            </span>
            <div className="flex items-center gap-1.5">
              <span className="font-mono font-semibold text-gray-900">
                {requestsPerSec.value}
              </span>
              <span className="text-[10px] text-gray-400">
                {requestsPerSec.unit}
              </span>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-blue-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${requestsPerSec.percentage}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SystemPulse;
