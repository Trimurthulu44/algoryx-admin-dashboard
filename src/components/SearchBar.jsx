import React, { useEffect, useRef } from 'react';
import { Search, X, FolderGit2, Activity, ArrowRight, LayoutDashboard } from 'lucide-react';

export function SearchBar({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  projects = [],
  activities = [],
  onNavigate,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const query = searchQuery.trim().toLowerCase();

  // Filter projects
  const matchingProjects = query
    ? projects.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    : projects.slice(0, 3);

  // Filter activities
  const matchingActivities = query
    ? activities.filter(
        (a) =>
          a.action.toLowerCase().includes(query) ||
          a.project.toLowerCase().includes(query) ||
          a.user.name.toLowerCase().includes(query)
      )
    : activities.slice(0, 3);

  const handleSelect = (actionType, id) => {
    onNavigate && onNavigate(actionType, id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-gray-900/30 backdrop-blur-2xs">
      <div
        className="w-full max-w-xl bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, deployments, team members, or navigation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-sm bg-transparent border-none outline-none text-gray-900 placeholder-gray-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="p-1 text-gray-400 hover:text-gray-600 rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 text-xs font-mono px-2 py-1 bg-gray-100 text-gray-500 rounded border border-gray-200 hover:bg-gray-200"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          {/* Projects Group */}
          <div>
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-2 block mb-1">
              Projects & Repositories
            </span>
            <div className="space-y-1">
              {matchingProjects.length > 0 ? (
                matchingProjects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => handleSelect('project', proj.id)}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <FolderGit2 className="w-4 h-4 text-blue-600" />
                      <div>
                        <span className="text-xs font-semibold text-gray-900 block group-hover:text-blue-700">
                          {proj.name}
                        </span>
                        <span className="text-[11px] text-gray-500 line-clamp-1">
                          {proj.description}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-400 px-2 py-1">
                  No projects matching &ldquo;{searchQuery}&rdquo;
                </p>
              )}
            </div>
          </div>

          {/* Activities Group */}
          <div>
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-2 block mb-1">
              Recent Events & Audit Log
            </span>
            <div className="space-y-1">
              {matchingActivities.length > 0 ? (
                matchingActivities.map((act) => (
                  <div
                    key={act.id}
                    onClick={() => handleSelect('activity', act.id)}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Activity className="w-4 h-4 text-emerald-600" />
                      <div>
                        <span className="text-xs font-semibold text-gray-900 block group-hover:text-blue-700">
                          {act.action} &bull; {act.project}
                        </span>
                        <span className="text-[11px] text-gray-500">
                          by {act.user.name} &bull; {act.time}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600" />
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-400 px-2 py-1">
                  No events matching &ldquo;{searchQuery}&rdquo;
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
          <span>Navigate with mouse or tap</span>
          <span>Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
