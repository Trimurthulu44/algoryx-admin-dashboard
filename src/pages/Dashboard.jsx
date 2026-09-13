import React from 'react';
import { ShieldCheck, Plus, ExternalLink } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { AnalyticsChart } from '../components/AnalyticsChart';
import { SystemPulse } from '../components/SystemPulse';
import { ProjectCard } from '../components/ProjectCard';
import { RecentActivity } from '../components/RecentActivity';

export function Dashboard({
  metricsData,
  performanceChartData,
  timeRange,
  setTimeRange,
  activeMetricTab,
  setActiveMetricTab,
  systemPulseMetrics,
  activeProjects,
  filteredActivities,
  activitySearch,
  setActivitySearch,
  activityStatusFilter,
  setActivityStatusFilter,
  onNavigateToProjects,
}) {
  return (
    <div className="space-y-6">
      {/* Dashboard Top Greeting Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-1">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            Good morning, Developer.
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Here&apos;s what&apos;s happening across your platform today.
          </p>
        </div>

        {/* Operational Status Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg shadow-2xs self-start sm:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-gray-800">
            All systems operational
          </span>
          <span className="text-[11px] text-gray-400 font-mono pl-1 border-l border-gray-200">
            99.99% SLA
          </span>
        </div>
      </div>

      {/* 4 Professional Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {metricsData.map((metric) => (
          <StatCard
            key={metric.id}
            id={metric.id}
            label={metric.label}
            value={metric.value}
            change={metric.change}
            trend={metric.trend}
            supportingText={metric.supportingText}
            icon={metric.icon}
            sparkline={metric.sparkline}
          />
        ))}
      </div>

      {/* Analytics Section & System Pulse Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Platform Performance Chart (2 columns on lg) */}
        <div className="lg:col-span-2">
          <AnalyticsChart
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            activeMetricTab={activeMetricTab}
            setActiveMetricTab={setActiveMetricTab}
            chartData={performanceChartData}
          />
        </div>

        {/* System Pulse Panel (1 column on lg) */}
        <div className="lg:col-span-1">
          <SystemPulse metrics={systemPulseMetrics} />
        </div>
      </div>

      {/* Active Projects Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-semibold text-gray-900">
              Active Projects
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Live engineering initiatives and physics simulation pipelines.
            </p>
          </div>
          <button
            onClick={onNavigateToProjects}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
          >
            View all projects
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activeProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Recent Activity Audit Table */}
      <div>
        <RecentActivity
          activities={filteredActivities}
          searchQuery={activitySearch}
          setSearchQuery={setActivitySearch}
          statusFilter={activityStatusFilter}
          setStatusFilter={setActivityStatusFilter}
        />
      </div>
    </div>
  );
}
export default Dashboard;
