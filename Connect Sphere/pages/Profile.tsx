
import React from 'react';
import { useParams } from 'react-router-dom';
import { users, experiences, education } from '../data/mockData';
import { ICONS } from '../constants';

const Profile: React.FC = () => {
  const { userId } = useParams();
  const user = users.find(u => u.id === userId);

  if (!user) {
    return <div className="text-center py-10">User not found.</div>;
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative">
          <img src={user.coverPhotoUrl} alt="Cover" className="w-full h-48 object-cover" />
          <img
            src={user.avatarUrl}
            alt={user.firstName}
            className="absolute top-24 left-8 w-36 h-36 rounded-full border-4 border-white"
          />
        </div>
        <div className="pt-20 pb-6 px-8">
            <div className="flex justify-end">
                 <div className="flex items-center space-x-2">
                    <button className="bg-blue-600 text-white font-semibold rounded-full px-4 py-1.5 hover:bg-blue-700">Connect</button>
                    <button className="text-blue-600 border border-blue-600 font-semibold rounded-full px-4 py-1.5 hover:bg-blue-50">Message</button>
                    <button className="text-gray-500 border border-gray-500 font-semibold rounded-full px-4 py-1.5 hover:bg-gray-100">More</button>
                </div>
            </div>
            <h1 className="text-2xl font-bold">{user.firstName} {user.lastName}</h1>
            <p className="text-gray-700">{user.headline}</p>
            <p className="text-sm text-gray-500 mt-1">{user.location}</p>
            <p className="text-sm text-blue-600 font-semibold mt-2">{user.connections} connections</p>
        </div>
      </div>
      
      {/* About Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">About</h2>
        <p className="text-gray-600">{user.summary}</p>
      </div>

      {/* Experience Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <div className="space-y-6">
          {experiences.map(exp => (
            <div key={exp.id} className="flex space-x-4">
              <img src={exp.companyLogoUrl} alt={exp.companyName} className="w-12 h-12 mt-1" />
              <div>
                <h3 className="font-semibold">{exp.title}</h3>
                <p className="text-sm">{exp.companyName}</p>
                <p className="text-xs text-gray-500">{exp.startDate} - {exp.endDate || 'Present'}</p>
                <p className="mt-2 text-sm text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <div className="space-y-6">
          {education.map(edu => (
            <div key={edu.id} className="flex space-x-4">
               <div className="w-12 h-12 bg-gray-200 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 011.071 0L10 9.583l3.679-1.532a.999.999 0 011.071 0L16 8.051a1 1 0 000-1.84l-7-3zM3 9.583l7 2.917v5.5a1 1 0 001.447.894l4-2A1 1 0 0016 16V9.583l-7-2.917v5.5a1 1 0 00.553.894l-4 2A1 1 0 003 16V9.583z" /></svg>
                </div>
              <div>
                <h3 className="font-semibold">{edu.schoolName}</h3>
                <p className="text-sm">{edu.degree}, {edu.fieldOfStudy}</p>
                <p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
