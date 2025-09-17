
import React from 'react';
import { Job } from '../types';

interface JobListItemProps {
  job: Job;
  onSelect: (job: Job) => void;
  isSelected: boolean;
}

const JobListItem: React.FC<JobListItemProps> = ({ job, onSelect, isSelected }) => {
  return (
    <div
      className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${isSelected ? 'bg-gray-200' : ''}`}
      onClick={() => onSelect(job)}
    >
      <div className="flex items-start space-x-4">
        <img src={job.company.logoUrl} alt={job.company.name} className="w-12 h-12" />
        <div>
            <h3 className="font-semibold text-blue-700">{job.title}</h3>
            <p className="text-sm text-gray-800">{job.company.name}</p>
            <p className="text-sm text-gray-500">{job.location} ({job.type})</p>
            <p className="text-xs text-gray-400 mt-1">Posted {job.postedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default JobListItem;
