import React from 'react';
import { Message, User } from '../types';
import { Link } from 'react-router-dom';

interface ChatMessageProps {
  message: Message;
  currentUser: User;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, currentUser }) => {
  const isCurrentUser = message.sender.id === currentUser.id;

  return (
    <div className={`flex items-start gap-3 ${isCurrentUser ? 'flex-row-reverse' : ''}`}>
      {!isCurrentUser && (
        <Link to={`/profile/${message.sender.id}`}>
          <img
            src={message.sender.avatarUrl}
            alt={message.sender.firstName}
            className="w-10 h-10 rounded-full"
          />
        </Link>
      )}
      <div className="flex flex-col">
        <div
          className={`p-3 rounded-lg max-w-xs md:max-w-md ${
            isCurrentUser ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'
          }`}
        >
          <p>{message.content}</p>
        </div>
        <p className={`text-xs text-gray-500 mt-1 ${isCurrentUser ? 'text-right' : 'text-left'}`}>
          {message.timestamp}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
