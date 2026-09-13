import React from 'react';
import { X, CheckCheck, Bell, CheckCircle2, Info, AlertTriangle } from 'lucide-react';

export function NotificationPanel({
  isOpen,
  onClose,
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
  onClear,
}) {
  if (!isOpen) return null;

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-amber-600" />;
      default:
        return <Info className="w-4 h-4 text-blue-600" />;
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-gray-900/20 backdrop-blur-2xs transition-opacity"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white shadow-xl border-l border-gray-200 flex flex-col transform transition-transform duration-200 ease-out">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bell className="w-4 h-4 text-gray-700" />
            <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
            {notifications.some((n) => !n.read) && (
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                {notifications.filter((n) => !n.read).length} new
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Close notifications panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        <div className="px-4 py-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-xs text-gray-500">
          <button
            onClick={onMarkAllAsRead}
            className="hover:text-blue-600 flex items-center gap-1 font-medium transition-colors"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            Mark all read
          </button>
          <button
            onClick={onClear}
            className="hover:text-rose-600 font-medium transition-colors"
          >
            Clear all
          </button>
        </div>

        {/* Notifications list */}
        <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
          {notifications.length > 0 ? (
            notifications.map((item) => (
              <div
                key={item.id}
                onClick={() => onMarkAsRead(item.id)}
                className={`p-4 transition-colors cursor-pointer hover:bg-gray-50 flex items-start gap-3 ${
                  !item.read ? 'bg-blue-50/40' : ''
                }`}
              >
                <div className="mt-0.5 shrink-0">{getIcon(item.type)}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <h4
                      className={`text-xs font-semibold truncate ${
                        !item.read ? 'text-gray-900 font-bold' : 'text-gray-700'
                      }`}
                    >
                      {item.title}
                    </h4>
                    {!item.read && (
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="text-[10px] text-gray-400 font-mono mt-1 block">
                    {item.time}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-xs text-gray-400">
              No notifications at this time.
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default NotificationPanel;
