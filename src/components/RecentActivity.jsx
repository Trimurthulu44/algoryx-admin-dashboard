import React from 'react';
import { Search, Filter, ArrowUpDown } from 'lucide-react';
import { Avatar } from './ui/Avatar';
import { Badge } from './ui/Badge';

export function RecentActivity({
  activities,
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
}) {
  const getStatusBadgeVariant = (status) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'In Progress':
        return 'blue';
      case 'Pending':
        return 'warning';
      case 'Failed':
        return 'danger';
      default:
        return 'neutral';
    }
  };

  const statuses = ['All', 'Completed', 'In Progress', 'Pending', 'Failed'];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
      {/* Table Header and Controls */}
      <div className="p-4 sm:p-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-gray-900">Recent Activity</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Audit trail of deployments, pipeline updates, and system events.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Quick Search */}
          <div className="relative w-full sm:w-48">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-gray-400 shrink-0" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-xs bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1.5 text-gray-700 font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
            >
              {statuses.map((st) => (
                <option key={st} value={st}>
                  {st === 'All' ? 'All Statuses' : st}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-gray-50/75 border-b border-gray-100 text-gray-500 uppercase tracking-wider font-semibold">
            <tr>
              <th className="px-5 py-3">User</th>
              <th className="px-5 py-3">Action</th>
              <th className="px-5 py-3">Project</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {activities.length > 0 ? (
              activities.map((act) => (
                <tr
                  key={act.id}
                  className="hover:bg-gray-50/60 transition-colors"
                >
                  {/* User Column */}
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <Avatar
                        initials={act.user.avatar}
                        name={act.user.name}
                        size="sm"
                      />
                      <div>
                        <span className="font-semibold text-gray-900 block">
                          {act.user.name}
                        </span>
                        <span className="text-[11px] text-gray-400 block">
                          {act.user.role}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Action Column */}
                  <td className="px-5 py-3.5 font-medium text-gray-800">
                    {act.action}
                  </td>

                  {/* Project Column */}
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 text-xs font-mono font-medium">
                      {act.project}
                    </span>
                  </td>

                  {/* Status Badge */}
                  <td className="px-5 py-3.5">
                    <Badge variant={getStatusBadgeVariant(act.status)} size="sm">
                      {act.status}
                    </Badge>
                  </td>

                  {/* Timestamp */}
                  <td className="px-5 py-3.5 text-right font-mono text-gray-500 text-[11px]">
                    {act.time}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="px-5 py-8 text-center text-gray-400 text-xs"
                >
                  No activities matching current filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card List View (Strictly prevents horizontal scrolling) */}
      <div className="md:hidden divide-y divide-gray-100">
        {activities.length > 0 ? (
          activities.map((act) => (
            <div key={act.id} className="p-4 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar
                    initials={act.user.avatar}
                    name={act.user.name}
                    size="sm"
                  />
                  <div>
                    <span className="text-xs font-semibold text-gray-900 block">
                      {act.user.name}
                    </span>
                    <span className="text-[10px] text-gray-400 block">
                      {act.user.role}
                    </span>
                  </div>
                </div>
                <Badge variant={getStatusBadgeVariant(act.status)} size="sm">
                  {act.status}
                </Badge>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-gray-700 font-medium">{act.action}</span>
                <span className="font-mono text-gray-500 text-[11px] bg-gray-100 px-1.5 py-0.5 rounded">
                  {act.project}
                </span>
              </div>

              <div className="text-right text-[10px] text-gray-400 font-mono">
                {act.time}
              </div>
            </div>
          ))
        ) : (
          <div className="p-6 text-center text-xs text-gray-400">
            No activities found.
          </div>
        )}
      </div>
    </div>
  );
}
export default RecentActivity;
