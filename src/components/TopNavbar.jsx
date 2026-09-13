import React from 'react';
import {
  Menu,
  Search,
  Bell,
  RotateCw,
  ChevronRight,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { Avatar } from './ui/Avatar';
import { AlgoryxLogo } from './AlgoryxLogo';

export function TopNavbar({
  activeTab,
  onNavigateTab,
  onOpenMobileMenu,
  onOpenSearch,
  onToggleNotifications,
  unreadCount = 0,
  currentUser,
  isProfileOpen,
  setIsProfileOpen,
  onRefresh,
  isRefreshing,
  lastRefreshed,
}) {
  const getTabLabel = (id) => {
    const labels = {
      home: 'Home / Portal',
      overview: 'Overview',
      analytics: 'Analytics',
      projects: 'Projects',
      users: 'Users',
      orders: 'Orders',
      activity: 'Activity',
      notifications: 'Notifications',
      settings: 'Settings',
    };
    return labels[id] || 'Overview';
  };

  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/95 px-4 sm:px-6 backdrop-blur-xs">
      {/* Left side: Mobile menu toggle + Breadcrumbs */}
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={onOpenMobileMenu}
          className="md:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
          aria-label="Open navigation menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center text-sm">
          <button
            onClick={() => onNavigateTab && onNavigateTab('home')}
            className="font-semibold text-gray-900 hover:text-blue-600 flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Go to Home / Animated Logo"
          >
            <AlgoryxLogo variant="symbol" size="xs" className="shrink-0" />
            <span>Algoryx</span>
          </button>
          <ChevronRight className="w-4 h-4 text-gray-400 mx-1.5" />
          <span className="text-gray-600 font-medium">
            {getTabLabel(activeTab)}
          </span>
        </nav>
      </div>

      {/* Right side: Search, Status, Refresh, Notifications, Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Global Search Trigger */}
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 border border-gray-200 rounded-lg transition-colors w-36 sm:w-56 justify-between"
          aria-label="Quick search (Ctrl+K)"
        >
          <div className="flex items-center gap-2 truncate">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <span className="truncate">Search platform...</span>
          </div>
          <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-gray-500 bg-white border border-gray-200 rounded shadow-2xs">
            ⌘K
          </kbd>
        </button>

        {/* System status pill (hidden on small mobile) */}
        <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-medium text-emerald-800">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>All systems operational</span>
        </div>

        {/* Manual Refresh Trigger */}
        <button
          onClick={onRefresh}
          title="Refresh dashboard metrics"
          className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Refresh telemetry data"
        >
          <RotateCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-blue-600' : ''}`} />
        </button>

        {/* Notifications Icon with Badge */}
        <button
          onClick={onToggleNotifications}
          className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label={`Notifications (${unreadCount} unread)`}
        >
          <Bell className="w-5 h-5" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-xs">
              {unreadCount}
            </span>
          )}
        </button>

        {/* User Profile trigger */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-2.5 p-1 pl-1.5 sm:pr-2.5 rounded-lg hover:bg-gray-100 transition-colors"
            aria-expanded={isProfileOpen}
            aria-haspopup="true"
          >
            <Avatar
              initials={currentUser?.avatar || 'AM'}
              name={currentUser?.name || 'Alex Mercer'}
              size="sm"
            />
            <div className="hidden sm:block text-left">
              <span className="text-xs font-semibold text-gray-900 block leading-tight">
                {currentUser?.name || 'Alex Mercer'}
              </span>
              <span className="text-[11px] text-gray-500 block leading-tight">
                Developer
              </span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
export default TopNavbar;
