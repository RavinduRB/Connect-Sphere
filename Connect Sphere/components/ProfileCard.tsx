
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../types';

interface ProfileCardProps {
  user: User;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img src={user.coverPhotoUrl} alt="Cover" className="w-full h-20 object-cover" />
        <Link to={`/profile/${user.id}`}>
            <img
                src={user.avatarUrl}
                alt={user.firstName}
                className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white"
            />
        </Link>
      </div>
      <div className="pt-12 pb-4 px-4 text-center">
        <Link to={`/profile/${user.id}`} className="text-lg font-semibold text-gray-800 hover:underline">
          {user.firstName} {user.lastName}
        </Link>
        <p className="text-sm text-gray-500 mt-1">{user.headline}</p>
      </div>
      <div className="border-t border-gray-200">
        <div className="p-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
                <span>Connections</span>
                <span className="font-semibold text-blue-600">{user.connections}</span>
            </div>
            <p className="text-sm font-semibold text-gray-800">Grow your network</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
