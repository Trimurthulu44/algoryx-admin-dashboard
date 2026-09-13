import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useDashboard } from './hooks/useDashboard';
import { Sidebar } from './components/Sidebar';
import { TopNavbar } from './components/TopNavbar';
import { Dashboard } from './pages/Dashboard';
import { HomePage } from './pages/HomePage';
import { NotificationPanel } from './components/NotificationPanel';
import { SearchBar } from './components/SearchBar';
import { ProfileDropdown } from './components/ProfileDropdown';
import { ProjectCard } from './components/ProjectCard';
import { RecentActivity } from './components/RecentActivity';
import { Badge } from './components/ui/Badge';
import { Avatar } from './components/ui/Avatar';
import {
  FolderGit2,
  Users,
  Receipt,
  Settings as SettingsIcon,
  Shield,
  Key,
  Server,
  Terminal,
} from 'lucide-react';

export function App() {
  const {
    currentUser,
    activeTab,
    setActiveTab,
    sidebarCollapsed,
    setSidebarCollapsed,
    mobileMenuOpen,
    setMobileMenuOpen,
    isSearchOpen,
    setIsSearchOpen,
    searchQuery,
    setSearchQuery,
    isNotificationsOpen,
    setIsNotificationsOpen,
    notifications,
    unreadCount,
    markNotificationAsRead,
    markAllNotificationsAsRead,
    clearNotifications,
    isProfileOpen,
    setIsProfileOpen,
    timeRange,
    setTimeRange,
    activeMetricTab,
    setActiveMetricTab,
    activitySearch,
    setActivitySearch,
    activityStatusFilter,
    setActivityStatusFilter,
    filteredActivities,
    isRefreshing,
    lastRefreshed,
    handleManualRefresh,
    metricsData,
    performanceChartData,
    systemPulseMetrics,
    activeProjects,
  } = useDashboard();

  // Render content based on activeTab
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            onEnterDashboard={() => setActiveTab('overview')}
            onNavigateTab={(tabId) => setActiveTab(tabId)}
          />
        );

      case 'overview':
        return (
          <Dashboard
            metricsData={metricsData}
            performanceChartData={performanceChartData}
            timeRange={timeRange}
            setTimeRange={setTimeRange}
            activeMetricTab={activeMetricTab}
            setActiveMetricTab={setActiveMetricTab}
            systemPulseMetrics={systemPulseMetrics}
            activeProjects={activeProjects}
            filteredActivities={filteredActivities}
            activitySearch={activitySearch}
            setActivitySearch={setActivitySearch}
            activityStatusFilter={activityStatusFilter}
            setActivityStatusFilter={setActivityStatusFilter}
            onNavigateToProjects={() => setActiveTab('projects')}
          />
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h1 className="text-xl font-bold text-gray-900">
                Analytics & Telemetry
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Detailed telemetry breakdown across simulation nodes, WebGPU pipelines, and global API edge nodes.
              </p>
            </div>

            <Dashboard
              metricsData={metricsData}
              performanceChartData={performanceChartData}
              timeRange={timeRange}
              setTimeRange={setTimeRange}
              activeMetricTab={activeMetricTab}
              setActiveMetricTab={setActiveMetricTab}
              systemPulseMetrics={systemPulseMetrics}
              activeProjects={activeProjects}
              filteredActivities={filteredActivities}
              activitySearch={activitySearch}
              setActivitySearch={setActivitySearch}
              activityStatusFilter={activityStatusFilter}
              setActivityStatusFilter={setActivityStatusFilter}
              onNavigateToProjects={() => setActiveTab('projects')}
            />
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200 pb-4">
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Engineering Projects
                </h1>
                <p className="text-xs text-gray-500 mt-1">
                  Active physics, CAD integration, and graphics pipelines managed under Algoryx Control Center.
                </p>
              </div>
              <Badge variant="blue" size="md">
                248 Total Repositories
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {activeProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h1 className="text-xl font-bold text-gray-900">Team & Users</h1>
              <p className="text-xs text-gray-500 mt-1">
                Active developers and systems engineers with access to Algoryx deployment clusters.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 shadow-xs">
              {[
                { name: 'Elena Rostova', role: 'Graphics Engineer', email: 'elena.r@algoryx.se', cluster: 'eu-north-01', status: 'Active' },
                { name: 'Marcus Vance', role: 'Infrastructure Lead', email: 'marcus.v@algoryx.se', cluster: 'us-east-02', status: 'Active' },
                { name: 'Sofia Chen', role: 'Research Scientist', email: 'sofia.c@algoryx.se', cluster: 'eu-west-01', status: 'Active' },
                { name: 'Alex Mercer', role: 'Frontend Engineer', email: 'alex.m@algoryx.se', cluster: 'eu-north-prod', status: 'Active' },
                { name: 'Lucas Dupont', role: 'Developer Relations', email: 'lucas.d@algoryx.se', cluster: 'ap-south-01', status: 'Active' },
              ].map((user, idx) => (
                <div key={idx} className="p-4 flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar name={user.name} size="md" />
                    <div>
                      <span className="text-sm font-semibold text-gray-900 block">{user.name}</span>
                      <span className="text-xs text-gray-500">{user.email} &bull; {user.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-600">{user.cluster}</span>
                    <Badge variant="success" size="sm">{user.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'orders':
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h1 className="text-xl font-bold text-gray-900">Orders & Subscriptions</h1>
              <p className="text-xs text-gray-500 mt-1">
                Enterprise billing and telemetry throughput plans.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Current Plan: Enterprise Simulation Cloud</h3>
                  <p className="text-xs text-gray-500">Dedicated 32-core physics compute clusters with real-time CAD synchronization.</p>
                </div>
                <span className="text-xl font-mono font-bold text-gray-900">₹84,240 / mo</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-600 pt-2">
                <span>Next billing date: 1st of next month</span>
                <Badge variant="success" size="sm">Active &bull; Auto-renew</Badge>
              </div>
            </div>
          </div>
        );

      case 'activity':
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h1 className="text-xl font-bold text-gray-900">Audit Trail & Activity Log</h1>
              <p className="text-xs text-gray-500 mt-1">
                Complete historical record of deployments, configuration changes, and cluster actions.
              </p>
            </div>

            <RecentActivity
              activities={filteredActivities}
              searchQuery={activitySearch}
              setSearchQuery={setActivitySearch}
              statusFilter={activityStatusFilter}
              setStatusFilter={setActivityStatusFilter}
            />
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <h1 className="text-xl font-bold text-gray-900">Platform Notifications</h1>
                <p className="text-xs text-gray-500 mt-1">
                  System alerts, deployment notifications, and security events.
                </p>
              </div>
              <button
                onClick={markAllNotificationsAsRead}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700"
              >
                Mark all as read
              </button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 shadow-xs">
              {notifications.map((notif) => (
                <div key={notif.id} className="p-4 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">{notif.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{notif.description}</p>
                    <span className="text-[11px] font-mono text-gray-400 mt-1 block">{notif.time}</span>
                  </div>
                  {!notif.read && <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />}
                </div>
              ))}
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h1 className="text-xl font-bold text-gray-900">Platform Settings</h1>
              <p className="text-xs text-gray-500 mt-1">
                Configure cluster environment, API access keys, and display preferences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-semibold text-gray-900">Cluster Configuration</h3>
                </div>
                <p className="text-xs text-gray-500">
                  Primary Node: <span className="font-mono text-gray-800">eu-north-prod-01 (Stockholm)</span>
                </p>
                <div className="pt-2">
                  <Badge variant="success" size="sm">Healthy &bull; Low Latency (42ms)</Badge>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-blue-600" />
                  <h3 className="text-sm font-semibold text-gray-900">API Access Tokens</h3>
                </div>
                <p className="text-xs text-gray-500">
                  Active production token: <span className="font-mono text-gray-800">alg_live_••••••••8492</span>
                </p>
                <div className="pt-2">
                  <Badge variant="neutral" size="sm">Valid until Dec 2026</Badge>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      {activeTab === 'home' ? (
        <motion.div
          key="home-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.99, filter: 'blur(2px)' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="w-full"
        >
          <HomePage
            onEnterDashboard={() => setActiveTab('overview')}
            onNavigateTab={(tabId) => setActiveTab(tabId)}
          />
        </motion.div>
      ) : (
        <motion.div
          key="dashboard-workspace"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="min-h-screen bg-[#F7F8FA] text-[#111827] flex flex-col selection:bg-blue-100 selection:text-blue-900"
        >
          {/* Sidebar (Desktop fixed + Mobile drawer) */}
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            collapsed={sidebarCollapsed}
            setCollapsed={setSidebarCollapsed}
            mobileOpen={mobileMenuOpen}
            setMobileOpen={setMobileMenuOpen}
            unreadNotificationsCount={unreadCount}
            currentUser={currentUser}
          />

          {/* Main Layout Container */}
          <div
            className={`flex-1 flex flex-col transition-all duration-200 ${
              sidebarCollapsed ? 'md:pl-18' : 'md:pl-64'
            }`}
          >
            {/* Top Navbar */}
            <TopNavbar
              activeTab={activeTab}
              onNavigateTab={setActiveTab}
              onOpenMobileMenu={() => setMobileMenuOpen(true)}
              onOpenSearch={() => setIsSearchOpen(true)}
              onToggleNotifications={() => setIsNotificationsOpen(!isNotificationsOpen)}
              unreadCount={unreadCount}
              currentUser={currentUser}
              isProfileOpen={isProfileOpen}
              setIsProfileOpen={setIsProfileOpen}
              onRefresh={handleManualRefresh}
              isRefreshing={isRefreshing}
              lastRefreshed={lastRefreshed}
            />

            {/* Main Content Area */}
            <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
              {renderContent()}
            </main>
          </div>

          {/* Slide-out Notification Panel */}
          <NotificationPanel
            isOpen={isNotificationsOpen}
            onClose={() => setIsNotificationsOpen(false)}
            notifications={notifications}
            onMarkAsRead={markNotificationAsRead}
            onMarkAllAsRead={markAllNotificationsAsRead}
            onClear={clearNotifications}
          />

          {/* Global Quick Search Modal (Ctrl+K) */}
          <SearchBar
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            projects={activeProjects}
            activities={filteredActivities}
            onNavigate={(type, id) => {
              if (type === 'project') setActiveTab('projects');
              if (type === 'activity') setActiveTab('activity');
            }}
          />

          {/* User Profile Dropdown */}
          <ProfileDropdown
            isOpen={isProfileOpen}
            onClose={() => setIsProfileOpen(false)}
            currentUser={currentUser}
            onSelectOption={(optionId) => {
              if (optionId === 'profile' || optionId === 'settings' || optionId === 'preferences') {
                setActiveTab('settings');
              }
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default App;
