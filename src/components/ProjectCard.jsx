import React from 'react';
import { Clock, GitBranch } from 'lucide-react';
import { Badge } from './ui/Badge';
import { Avatar } from './ui/Avatar';

export function ProjectCard({ project }) {
  const { name, description, status, progress, team = [], lastUpdated, branch } = project;

  const statusVariant = {
    Active: 'blue',
    'In Review': 'warning',
    Completed: 'success',
  }[status] || 'neutral';

  return (
    <div
      id={`project-card-${project.id}`}
      className="bg-white rounded-xl border border-gray-200 p-5 shadow-xs hover:border-gray-300 transition-all flex flex-col justify-between"
    >
      {/* Top Header: Title, Branch & Status */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{name}</h3>
            <p className="text-xs text-gray-500 line-clamp-2 mt-1">
              {description}
            </p>
          </div>
          <Badge variant={statusVariant} size="sm">
            {status}
          </Badge>
        </div>

        {/* Git branch info */}
        {branch && (
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-500 mt-2">
            <GitBranch className="w-3 h-3 text-gray-400" />
            <span className="truncate">{branch}</span>
          </div>
        )}
      </div>

      {/* Bottom section: Progress Bar, Team Avatars, and Timestamp */}
      <div className="pt-4 mt-3 border-t border-gray-100">
        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-gray-500 font-medium">Pipeline Progress</span>
            <span className="font-mono font-semibold text-gray-900">{progress}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Team Avatars and Last Updated */}
        <div className="flex items-center justify-between">
          <div className="flex items-center -space-x-1.5 overflow-hidden">
            {team.map((member, idx) => (
              <div key={idx} className="ring-2 ring-white rounded-full">
                <Avatar name={member} size="sm" />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1 text-[11px] text-gray-400 font-medium">
            <Clock className="w-3 h-3" />
            <span>{lastUpdated}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
