import React from 'react';
import { Link } from 'react-router-dom';
import { Group } from '../types';

interface GroupCardProps {
  group: Group;
}

const GroupCard: React.FC<GroupCardProps> = ({ group }) => {
  return (
    <Link to={`/groups/${group.id}`} className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center p-4">
        <img src={group.avatarUrl} alt={group.name} className="w-16 h-16 rounded-md mr-4" />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-800">{group.name}</h4>
          <p className="text-sm text-gray-500">{group.memberCount.toLocaleString()} members</p>
        </div>
      </div>
    </Link>
  );
};

export default GroupCard;
