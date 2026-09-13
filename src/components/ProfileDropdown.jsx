import React, { useRef, useEffect } from 'react';
import { User, Settings, Sliders, LogOut, Check } from 'lucide-react';
import { Avatar } from './ui/Avatar';

export function ProfileDropdown({
  isOpen,
  onClose,
  currentUser,
  onSelectOption,
}) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Account Settings', icon: Settings },
    { id: 'preferences', label: 'Preferences', icon: Sliders },
  ];

  return (
    <div
      ref={menuRef}
      className="absolute right-4 top-16 z-50 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-2 divide-y divide-gray-100 transform origin-top-right transition-all"
    >
      {/* User Header */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-3">
          <Avatar
            initials={currentUser?.avatar || 'AM'}
            name={currentUser?.name || 'Alex Mercer'}
            size="md"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {currentUser?.name || 'Alex Mercer'}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {currentUser?.email || 'alex.m@algoryx.se'}
            </p>
          </div>
        </div>
        <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Role: Frontend Engineer ({currentUser?.cluster || 'eu-north'})</span>
        </div>
      </div>

      {/* Action links */}
      <div className="py-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => {
                onSelectOption && onSelectOption(item.id);
                onClose();
              }}
              className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left"
            >
              <Icon className="w-4 h-4 text-gray-400" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Sign Out */}
      <div className="py-1">
        <button
          onClick={() => {
            onSelectOption && onSelectOption('signout');
            onClose();
          }}
          className="w-full flex items-center gap-2.5 px-4 py-2 text-xs text-rose-600 hover:bg-rose-50 transition-colors text-left font-medium"
        >
          <LogOut className="w-4 h-4 text-rose-500" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}
export default ProfileDropdown;
