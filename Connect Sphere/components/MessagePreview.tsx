
import React from 'react';
import { Link } from 'react-router-dom';
import { Conversation } from '../types';
import { currentUser } from '../data/mockData';

interface MessagePreviewProps {
  conversation: Conversation;
  isSelected: boolean;
}

const MessagePreview: React.FC<MessagePreviewProps> = ({ conversation, isSelected }) => {
  const otherParticipant = conversation.participants.find(p => p.id !== currentUser.id) || conversation.participants[0];
  const lastMessage = conversation.messages[conversation.messages.length - 1];

  return (
    <Link to={`/messaging/${conversation.id}`}>
      <div className={`flex items-center p-3 space-x-3 cursor-pointer hover:bg-gray-100 ${isSelected ? 'bg-gray-200' : ''}`}>
        <img src={otherParticipant.avatarUrl} alt={otherParticipant.firstName} className="w-12 h-12 rounded-full" />
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <p className="font-semibold truncate">{otherParticipant.firstName} {otherParticipant.lastName}</p>
            <p className="text-xs text-gray-500">{lastMessage.timestamp}</p>
          </div>
          <p className="text-sm text-gray-500 truncate">{lastMessage.content}</p>
        </div>
      </div>
    </Link>
  );
};

export default MessagePreview;
