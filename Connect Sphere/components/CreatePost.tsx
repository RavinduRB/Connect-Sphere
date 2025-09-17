
import React from 'react';
import { User } from '../types';
import { ICONS } from '../constants';

interface CreatePostProps {
  user: User;
}

const CreatePost: React.FC<CreatePostProps> = ({ user }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-start space-x-3">
        <img src={user.avatarUrl} alt={user.firstName} className="w-12 h-12 rounded-full" />
        <div className="w-full">
            <textarea
                placeholder="Start a post"
                className="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={1}
            />
        </div>
      </div>
      <div className="flex justify-around mt-4 pt-2 border-t">
        <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span className="font-semibold">Photo</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
          <span className="font-semibold">Video</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          <span className="font-semibold">Event</span>
        </button>
         <button className="flex items-center space-x-2 text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3h.01M17 17h.01" /></svg>
          <span className="font-semibold">Write article</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
