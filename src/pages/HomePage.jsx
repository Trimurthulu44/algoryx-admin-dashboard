import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LogoAnimation } from '../components/LogoAnimation';
import {
  ArrowRight,
  BarChart3,
  FolderGit2,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  Server,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Globe,
} from 'lucide-react';
import { Badge } from '../components/ui/Badge';

export function HomePage({ onEnterDashboard, onNavigateTab }) {
  const [autoProgress, setAutoProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-launch progress countdown
  useEffect(() => {
    if (isPaused || autoProgress >= 100) return;

    const interval = setInterval(() => {
      setAutoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(100, prev + 1.25);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [isPaused, autoProgress]);

  // Trigger dashboard transition when progress completes
  useEffect(() => {
    if (autoProgress >= 100) {
      onEnterDashboard();
    }
  }, [autoProgress, onEnterDashboard]);

  const dashboardModules = [
    {
      id: 'overview',
      title: 'Mission Overview',
      desc: 'High-level KPI telemetry, compute load, active nodes, and system pulse.',
      icon: Activity,
      stat: '99.99% Uptime',
      color: 'blue',
    },
    {
      id: 'analytics',
      title: 'Telemetry & Analytics',
      desc: 'Frame-time analysis, shader execution, simulation FPS, and memory throughput.',
      icon: BarChart3,
      stat: '58.4 FPS Avg',
      color: 'emerald',
    },
    {
      id: 'projects',
      title: 'Simulation Pipelines',
      desc: '248 engineering repositories, AGX Dynamics bindings, and WebGPU shaders.',
      icon: FolderGit2,
      stat: '248 Projects',
      color: 'indigo',
    },
    {
      id: 'users',
      title: 'Team & Node Clusters',
      desc: 'Global developer credentials, node authentication, and engineering access.',
      icon: ShieldCheck,
      stat: '38 Active Nodes',
      color: 'purple',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] relative overflow-hidden flex flex-col justify-between selection:bg-blue-100 selection:text-blue-900">
      {/* Background Architectural Engineering Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top Status Bar */}
      <header className="relative z-20 border-b border-gray-200/80 bg-white/80 backdrop-blur-md px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-gray-700 bg-gray-100/80 px-2.5 py-1 rounded-md border border-gray-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>ALGORYX KERNEL v4.8.2-PROD</span>
          </div>
          <span className="hidden sm:inline-block text-xs text-gray-500 font-mono">
            &bull; Stockholm &bull; Frankfurt &bull; Virginia
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onEnterDashboard()}
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <span>Skip Intro</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* Main Hero & Animated Logo Experience - Separated Two-Column Architecture */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12 max-w-6xl mx-auto w-full">
        {/* Top Hero: Left Logo Stage + Right Separated Information & Launch Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Dedicated Stage for Animated Algoryx Logo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 bg-white/70 backdrop-blur-xs border border-gray-200/80 rounded-2xl shadow-xs relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-36 h-36 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-indigo-100/40 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col items-center">
              <LogoAnimation size="md" showControls={true} />
            </div>
          </div>

          {/* Right: Separated Corporate Identity, Specs & Launch Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col justify-center text-left space-y-4"
          >
            {/* Company Tagline */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-800 text-xs font-semibold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                Algoryx Technologies AB
              </span>
              <span className="text-xs text-gray-500 font-mono hidden sm:inline">
                &bull; Physics & Multibody Dynamics
              </span>
            </div>

            {/* Platform Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Simulation Platform
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed max-w-xl">
                Real-time multibody dynamics, constraint solving, and WebGPU CAD digital twin clusters engineered for high-precision simulation.
              </p>
            </div>

            {/* Specifications Highlight Pills */}
            <div className="grid grid-cols-3 gap-3 pt-1">
              <div className="p-2.5 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <div className="text-[11px] font-medium text-gray-500 uppercase font-mono">Nodes</div>
                <div className="text-sm sm:text-base font-bold text-gray-900 mt-0.5">38 Active</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <div className="text-[11px] font-medium text-gray-500 uppercase font-mono">Solve FPS</div>
                <div className="text-sm sm:text-base font-bold text-emerald-600 mt-0.5">58.4 Mean</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-gray-200 shadow-2xs">
                <div className="text-[11px] font-medium text-gray-500 uppercase font-mono">Pipelines</div>
                <div className="text-sm sm:text-base font-bold text-blue-600 mt-0.5">248 Projects</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onEnterDashboard()}
                className="flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-[#1E293B] hover:bg-[#0F172A] rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Enter Control Center</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateTab('projects')}
                className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl shadow-2xs hover:shadow-xs transition-all cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-gray-500" />
                <span>Simulation Pipelines</span>
              </button>
            </div>

            {/* Auto-enter countdown bar */}
            <div className="bg-white/90 border border-gray-200 rounded-lg p-2.5 shadow-2xs flex items-center justify-between text-xs text-gray-500 max-w-lg">
              <div className="flex items-center gap-2 flex-1 pr-3">
                <span className="text-[11px] text-gray-500 font-medium">Auto-entering:</span>
                <div className="flex-1 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-75"
                    style={{ width: `${autoProgress}%` }}
                  />
                </div>
                <span className="font-mono text-[11px] text-gray-600 w-8 text-right">
                  {Math.max(0, Math.ceil((100 - autoProgress) / 20))}s
                </span>
              </div>

              <button
                onClick={() => setIsPaused(!isPaused)}
                className="text-[11px] font-medium text-gray-600 hover:text-gray-900 px-2 py-0.5 rounded border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                {isPaused ? 'Resume' : 'Pause'}
              </button>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Modules Quick Preview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 lg:mt-12 w-full"
        >
          <div className="flex items-center justify-between mb-3 text-left">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Control Center Modules
            </h3>
            <span className="text-xs text-gray-400">Click any module to launch directly</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left">
            {dashboardModules.map((mod) => {
              const Icon = mod.icon;
              return (
                <button
                  key={mod.id}
                  onClick={() => onNavigateTab(mod.id)}
                  className="group relative flex flex-col justify-between p-4 bg-white hover:bg-gray-50/80 border border-gray-200 hover:border-gray-300 rounded-xl shadow-2xs hover:shadow-xs transition-all text-left cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-blue-50 text-gray-700 group-hover:text-blue-600 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                        {mod.stat}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {mod.title}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs font-medium text-gray-500 group-hover:text-blue-600">
                    <span>Open Module</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </main>

      {/* Footer System Specs */}
      <footer className="relative z-20 border-t border-gray-200/80 bg-white/70 backdrop-blur-md px-6 py-3.5 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} Algoryx Technologies AB</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span className="hidden md:inline">Physics Simulation & Multibody Engineering</span>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="text-emerald-600 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            38/38 Nodes Operational
          </span>
          <span className="text-gray-300">&bull;</span>
          <span>Avg Latency: 14.2ms</span>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
