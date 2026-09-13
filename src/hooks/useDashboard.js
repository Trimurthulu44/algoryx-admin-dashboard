import { useState, useCallback, useEffect, useMemo } from 'react';
import {
  metricsData,
  performanceChartData,
  systemPulseMetrics,
  activeProjects,
  recentActivities,
  notificationsList,
  currentUser,
} from '../data/dashboardData';

export function useDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Search
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Notifications
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState(notificationsList);

  // Profile Dropdown
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Analytics Chart State
  const [timeRange, setTimeRange] = useState('7D');
  const [activeMetricTab, setActiveMetricTab] = useState('requests');

  // Activity Table State
  const [activitySearch, setActivitySearch] = useState('');
  const [activityStatusFilter, setActivityStatusFilter] = useState('All');
  const [activitySortOrder, setActivitySortOrder] = useState('newest');

  // Refresh
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(new Date());

  // Global Keyboard shortcuts (Ctrl+K or Cmd+K for search, Escape to close modals)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setIsNotificationsOpen(false);
        setIsProfileOpen(false);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleManualRefresh = useCallback(() => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastRefreshed(new Date());
    }, 650);
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, read: true } : item))
    );
  }, []);

  const markAllNotificationsAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const unreadCount = useMemo(() => {
    return notifications.filter((n) => !n.read).length;
  }, [notifications]);

  // Filtered recent activities
  const filteredActivities = useMemo(() => {
    return recentActivities.filter((act) => {
      const matchesSearch =
        act.user.name.toLowerCase().includes(activitySearch.toLowerCase()) ||
        act.action.toLowerCase().includes(activitySearch.toLowerCase()) ||
        act.project.toLowerCase().includes(activitySearch.toLowerCase());

      const matchesStatus =
        activityStatusFilter === 'All' || act.status === activityStatusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [activitySearch, activityStatusFilter]);

  return {
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
    activitySortOrder,
    setActivitySortOrder,
    filteredActivities,
    isRefreshing,
    lastRefreshed,
    handleManualRefresh,
    metricsData,
    performanceChartData,
    systemPulseMetrics,
    activeProjects,
  };
}
