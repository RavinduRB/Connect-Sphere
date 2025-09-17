import React, { useState } from 'react';
import { invitations as initialInvitations, connections, users } from '../data/mockData';
import { ConnectionInvitation, User } from '../types';
import { ICONS } from '../constants';
import Icon from '../components/Icon';

const InvitationCard: React.FC<{ invitation: ConnectionInvitation, onAccept: (id: string) => void, onIgnore: (id: string) => void }> = ({ invitation, onAccept, onIgnore }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 flex items-center space-x-4">
            <img src={invitation.fromUser.avatarUrl} alt="avatar" className="w-16 h-16 rounded-full"/>
            <div className="flex-1">
                <h4 className="font-semibold">{invitation.fromUser.firstName} {invitation.fromUser.lastName}</h4>
                <p className="text-sm text-gray-500">{invitation.fromUser.headline}</p>
                <p className="text-xs text-gray-400 mt-1">{invitation.mutualConnections} mutual connections</p>
            </div>
        </div>
        <div className="p-4 border-t flex space-x-2">
            <button onClick={() => onIgnore(invitation.id)} className="w-1/2 text-gray-500 border border-gray-400 font-semibold rounded-full py-1 hover:bg-gray-100">Ignore</button>
            <button onClick={() => onAccept(invitation.id)} className="w-1/2 text-blue-600 border border-blue-600 font-semibold rounded-full py-1 hover:bg-blue-50">Accept</button>
        </div>
    </div>
);

const ConnectionCard: React.FC<{ user: User }> = ({ user }) => (
    <div className="bg-white rounded-lg shadow-md text-center">
        <div className="relative">
            <img src={user.coverPhotoUrl} className="w-full h-16 object-cover rounded-t-lg" alt="cover"/>
            <img src={user.avatarUrl} alt="avatar" className="mx-auto w-20 h-20 rounded-full border-2 border-white absolute left-1/2 -translate-x-1/2 top-6"/>
        </div>
        <div className="pt-14 pb-4 px-2">
            <h4 className="font-semibold">{user.firstName} {user.lastName}</h4>
            <p className="text-sm text-gray-500 h-10">{user.headline}</p>
            <button className="mt-2 w-full flex items-center justify-center space-x-1 text-gray-500 border border-gray-400 font-semibold rounded-full py-1.5 hover:bg-gray-100">
                <span>Message</span>
            </button>
        </div>
    </div>
);


const Network: React.FC = () => {
  const [invitations, setInvitations] = useState(initialInvitations);
  
  const handleIgnore = (id: string) => {
    setInvitations(invitations.filter(inv => inv.id !== id));
  };
  
  const handleAccept = (id: string) => {
    alert('Connection accepted!');
    setInvitations(invitations.filter(inv => inv.id !== id));
    // In a real app, this would also update the user's connections list.
  };

  return (
    <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold">Invitations ({invitations.length})</h2>
            {invitations.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {invitations.map(inv => <InvitationCard key={inv.id} invitation={inv} onAccept={handleAccept} onIgnore={handleIgnore} />)}
                </div>
            ) : (
                <p className="text-gray-500 mt-4">No pending invitations.</p>
            )}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold">Your Connections ({connections.length})</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
                {connections.map(user => <ConnectionCard key={user.id} user={user} />)}
            </div>
        </div>
    </div>
  );
};

export default Network;