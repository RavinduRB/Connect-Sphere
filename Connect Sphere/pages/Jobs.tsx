import React, { useState } from 'react';
import { jobs as initialJobs } from '../data/mockData';
import { Job } from '../types';
import JobListItem from '../components/JobListItem';

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [selectedJob, setSelectedJob] = useState<Job | null>(jobs[0]);

  const handleSelectJob = (job: Job) => {
    const freshJob = jobs.find(j => j.id === job.id) || job;
    setSelectedJob(freshJob);
  };

  const handleSaveToggle = (jobId: string) => {
    const updatedJobs = jobs.map(j => 
      j.id === jobId ? { ...j, isSaved: !j.isSaved } : j
    );
    setJobs(updatedJobs);

    if (selectedJob && selectedJob.id === jobId) {
      setSelectedJob(prev => prev ? { ...prev, isSaved: !prev.isSaved } : null);
    }
  };

  const handleApply = (jobTitle: string) => {
    alert(`Successfully applied for ${jobTitle}!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
      {/* Jobs List */}
      <div className="md:col-span-1 bg-white rounded-lg shadow-md overflow-y-auto">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Job Recommendations</h2>
        </div>
        <div>
          {jobs.map(job => (
            <JobListItem 
              key={job.id} 
              job={job} 
              onSelect={handleSelectJob} 
              isSelected={selectedJob?.id === job.id} 
            />
          ))}
        </div>
      </div>

      {/* Job Details */}
      <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-y-auto">
        {selectedJob ? (
          <div className="p-6">
            <div className="flex items-start space-x-4 pb-4 border-b">
                <img src={selectedJob.company.logoUrl} alt={selectedJob.company.name} className="w-16 h-16"/>
                <div>
                    <h2 className="text-2xl font-bold">{selectedJob.title}</h2>
                    <p className="text-md">{selectedJob.company.name} &middot; {selectedJob.location} &middot; {selectedJob.type}</p>
                    <p className="text-sm text-gray-500">Posted {selectedJob.postedDate}</p>
                </div>
            </div>
            
            <div className="my-6">
                <button 
                  onClick={() => handleApply(selectedJob.title)}
                  className="bg-blue-600 text-white font-semibold rounded-full px-6 py-2 hover:bg-blue-700">
                  Apply
                </button>
                <button 
                  onClick={() => handleSaveToggle(selectedJob.id)}
                  className={`ml-2 font-semibold rounded-full px-6 py-2 ${
                    selectedJob.isSaved
                      ? 'bg-green-100 text-green-800 border border-green-300'
                      : 'text-blue-600 border border-blue-600 hover:bg-blue-50'
                  }`}>
                  {selectedJob.isSaved ? 'Saved' : 'Save'}
                </button>
            </div>

            <div className="prose max-w-none">
              <h3 className="font-semibold text-lg mb-2">Job Description</h3>
              <p>{selectedJob.description}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select a job to see details</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;