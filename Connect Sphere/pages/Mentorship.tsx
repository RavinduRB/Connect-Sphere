import React, { useState } from 'react';
import { mentors as initialMentors, currentUser } from '../data/mockData';
import MentorCard from '../components/MentorCard';
import { Mentor } from '../types';

const Mentorship: React.FC = () => {
  const [mentors, setMentors] = useState<Mentor[]>(initialMentors);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expertise, setExpertise] = useState('');

  const handleRequest = (mentorId: string) => {
    setMentors(mentors.map(m => m.id === mentorId ? { ...m, isRequested: true } : m));
  };
  
  const handleBecomeMentor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!expertise.trim()) {
      alert('Please enter your areas of expertise.');
      return;
    }
    const isAlreadyMentor = mentors.some(m => m.id === currentUser.id);
    if (isAlreadyMentor) {
        alert("You are already a mentor!");
    } else {
        const newMentor: Mentor = {
            ...currentUser,
            expertise: expertise.split(',').map(item => item.trim()),
            isRequested: false,
        };
        setMentors([newMentor, ...mentors]);
        alert("Congratulations! You are now listed as a mentor.");
    }
    setIsModalOpen(false);
    setExpertise('');
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Mentorship Hub</h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Connect with experienced professionals to get guidance on your career path, develop new skills, and expand your network.
        </p>
        <button 
            className="mt-4 bg-blue-600 text-white font-semibold rounded-full px-6 py-2 hover:bg-blue-700 transition-colors"
            onClick={() => setIsModalOpen(true)}
        >
          Become a Mentor
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Find a Mentor</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mentors.map(mentor => (
            <MentorCard key={mentor.id} mentor={mentor} onRequest={handleRequest} />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Become a Mentor</h2>
            <p className="text-gray-600 mb-4">Share your knowledge and help others grow. Please list your areas of expertise.</p>
            <form onSubmit={handleBecomeMentor}>
              <label htmlFor="expertise" className="block text-sm font-medium text-gray-700">Areas of Expertise (comma-separated)</label>
              <input
                type="text"
                id="expertise"
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
                placeholder="e.g., Product Management, UX Design"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <div className="mt-6 flex justify-end space-x-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-200 text-gray-800 font-semibold rounded-full px-4 py-2 hover:bg-gray-300">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-600 text-white font-semibold rounded-full px-4 py-2 hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mentorship;