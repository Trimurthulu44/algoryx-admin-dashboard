import React from 'react';
import {
  LayoutDashboard,
  BarChart3,
  FolderGit2,
  Users,
  Receipt,
  Activity,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  X,
  Sparkles,
  Home,
} from 'lucide-react';
import { Avatar } from './ui/Avatar';
import { AlgoryxLogo } from './AlgoryxLogo';

const navIcons = {
  home: Sparkles,
  overview: LayoutDashboard,
  analytics: BarChart3,
  projects: FolderGit2,
  users: Users,
  orders: Receipt,
  activity: Activity,
  notifications: Bell,
  settings: Settings,
};

export function Sidebar({
  activeTab,
  setActiveTab,
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
  unreadNotificationsCount = 0,
  currentUser,
}) {
  const navItems = [
    { id: 'home', label: 'Home / Intro' },
    { id: 'overview', label: 'Overview' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'projects', label: 'Projects', badge: '248' },
    { id: 'users', label: 'Users' },
    { id: 'orders', label: 'Orders' },
    { id: 'activity', label: 'Activity' },
    { id: 'notifications', label: 'Notifications', badge: unreadNotificationsCount > 0 ? unreadNotificationsCount : null },
    { id: 'settings', label: 'Settings' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    if (mobileOpen) {
      setMobileOpen(false);
    }
  };

  const sidebarContent = (
    <div className="flex h-full flex-col justify-between bg-white border-r border-gray-200">
      {/* Top Branding Section */}
      <div>
        <div className={`flex items-center justify-between border-b border-gray-200 px-4 py-4 ${collapsed ? 'justify-center px-2' : ''}`}>
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 overflow-hidden text-left cursor-pointer focus:outline-hidden group"
            title="Go to Home & Replay Animated Logo"
          >
            {collapsed ? (
              <AlgoryxLogo variant="symbol" size="sm" className="group-hover:scale-105 transition-transform" />
            ) : (
              <AlgoryxLogo variant="horizontal" size="sm" subtitle="Control" />
            )}
          </button>

          {/* Close button on mobile */}
          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-100"
            aria-label="Close Sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = navIcons[item.id] || LayoutDashboard;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors text-left ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-semibold shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 font-normal'
                } ${collapsed ? 'justify-center px-2' : ''}`}
              >
                <Icon
                  className={`w-5 h-5 shrink-0 ${
                    isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                  }`}
                />
                {!collapsed && (
                  <span className="flex-1 truncate">{item.label}</span>
                )}
                {!collapsed && item.badge && (
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      item.id === 'notifications'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section: System Status & User Profile */}
      <div className="border-t border-gray-200 p-3 space-y-3">
        {/* System Status */}
        {!collapsed ? (
          <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-100">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                System Status
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Operational
              </span>
            </div>
            <p className="text-xs text-gray-600 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              99.99% SLA Guaranteed
            </p>
          </div>
        ) : (
          <div className="flex justify-center" title="System Operational (99.99%)">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          </div>
        )}

        {/* User Card */}
        <div
          className={`flex items-center gap-3 p-2 rounded-lg bg-gray-50/50 hover:bg-gray-100 transition-colors cursor-pointer ${
            collapsed ? 'justify-center p-1.5' : ''
          }`}
        >
          <Avatar
            initials={currentUser?.avatar || 'AM'}
            name={currentUser?.name || 'Alex Mercer'}
            size="md"
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {currentUser?.name || 'Alex Mercer'}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {currentUser?.role || 'Frontend Engineer'}
              </p>
            </div>
          )}
        </div>

        {/* Collapse toggle (desktop only) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:flex items-center justify-center w-full py-1.5 text-xs text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <div className="flex items-center gap-1.5">
              <ChevronLeft className="w-4 h-4" />
              <span>Collapse Sidebar</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:block fixed inset-y-0 left-0 z-30 transition-all duration-200 ${
          collapsed ? 'w-18' : 'w-64'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-gray-900/30 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-200 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
}
export default Sidebar;
