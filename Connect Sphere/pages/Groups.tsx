import React, { useState } from 'react';
import { groups as initialGroups, currentUser } from '../data/mockData';
import GroupCard from '../components/GroupCard';
import { Group } from '../types';

const Groups: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDesc, setNewGroupDesc] = useState('');

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGroupName.trim() || !newGroupDesc.trim()) {
        alert('Please fill out all fields.');
        return;
    }

    const newGroup: Group = {
        id: `g${Date.now()}`,
        name: newGroupName,
        description: newGroupDesc,
        bannerUrl: 'https://picsum.photos/seed/newgroup/800/200',
        avatarUrl: `https://picsum.photos/seed/newgroupavatar/100/100`,
        memberCount: 1,
        isMember: true,
    };
    
    setGroups([newGroup, ...groups]);
    setIsModalOpen(false);
    setNewGroupName('');
    setNewGroupDesc('');
  };

  const myGroups = groups.filter(g => g.isMember);
  const discoverGroups = groups.filter(g => !g.isMember);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Your Groups</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white font-semibold rounded-full px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Create Group
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {myGroups.map(group => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>

      <div className="border-t pt-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Discover More Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {discoverGroups.map(group => (
              <GroupCard key={group.id} group={group} />
            ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">Create a new group</h2>
                <form onSubmit={handleCreateGroup}>
                    <div className="mb-4">
                        <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">Group Name</label>
                        <input
                            type="text"
                            id="groupName"
                            value={newGroupName}
                            onChange={e => setNewGroupName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                     <div className="mb-4">
                        <label htmlFor="groupDesc" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            id="groupDesc"
                            value={newGroupDesc}
                            onChange={e => setNewGroupDesc(e.target.value)}
                            rows={3}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mt-6 flex justify-end space-x-3">
                        <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-200 text-gray-800 font-semibold rounded-full px-4 py-2 hover:bg-gray-300">
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-600 text-white font-semibold rounded-full px-4 py-2 hover:bg-blue-700">
                            Create Group
                        </button>
                    </div>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default Groups;