import React from 'react';
import { Mentor } from '../types';

interface MentorCardProps {
  mentor: Mentor;
  onRequest: (mentorId: string) => void;
}

const MentorCard: React.FC<MentorCardProps> = ({ mentor, onRequest }) => {
  return (
    <div className="bg-white rounded-lg shadow-md text-center overflow-hidden flex flex-col">
      <div className="relative">
        <img src={mentor.coverPhotoUrl} className="w-full h-20 object-cover" alt="cover" />
        <img
          src={mentor.avatarUrl}
          alt="avatar"
          className="mx-auto w-24 h-24 rounded-full border-4 border-white absolute left-1/2 -translate-x-1/2 top-8"
        />
      </div>
      <div className="pt-16 pb-4 px-4 flex-grow flex flex-col">
        <h4 className="font-semibold text-lg">{mentor.firstName} {mentor.lastName}</h4>
        <p className="text-sm text-gray-600 h-10">{mentor.headline}</p>
        <div className="mt-2 flex-grow">
          <h5 className="font-semibold text-gray-700 text-sm mb-1">Areas of Expertise</h5>
          <div className="flex flex-wrap justify-center gap-1">
            {mentor.expertise.slice(0, 3).map((area, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
        <button 
          className={`mt-4 w-full font-semibold rounded-full py-1.5 transition-colors ${
            mentor.isRequested 
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
            : 'text-blue-600 border border-blue-600 hover:bg-blue-50'
          }`}
          onClick={() => !mentor.isRequested && onRequest(mentor.id)}
          disabled={mentor.isRequested}
        >
          {mentor.isRequested ? 'Requested' : 'Request Mentorship'}
        </button>
      </div>
    </div>
  );
};

export default MentorCard;