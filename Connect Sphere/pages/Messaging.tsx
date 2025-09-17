import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { conversations as initialConversations, currentUser } from '../data/mockData';
import { Conversation, Message } from '../types';
import MessagePreview from '../components/MessagePreview';
import ChatMessage from '../components/ChatMessage';

const Messaging: React.FC = () => {
  const { conversationId } = useParams<{ conversationId?: string }>();
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (conversationId) {
      const conversation = conversations.find(c => c.id === conversationId);
      setSelectedConversation(conversation || null);
    } else if (conversations.length > 0 && !selectedConversation) {
      // If no conversation is selected and we have conversations, select the first one.
      // This handles the initial load to `/messaging` without an ID.
      setSelectedConversation(conversations[0]);
    }
  }, [conversationId, conversations, selectedConversation]);


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [selectedConversation?.messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedConversation) return;

    const message: Message = {
      id: `m${Date.now()}`,
      sender: currentUser,
      content: newMessage,
      timestamp: 'Just now',
    };

    const updatedConversation: Conversation = {
      ...selectedConversation,
      messages: [...selectedConversation.messages, message],
    };
    
    setConversations(prev => 
        prev.map(c => c.id === selectedConversation.id ? updatedConversation : c)
    );

    setSelectedConversation(updatedConversation);
    setNewMessage('');
  };

  const otherParticipant = selectedConversation?.participants.find(p => p.id !== currentUser.id);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-120px)]">
      {/* Conversations List */}
      <div className="md:col-span-1 bg-white rounded-lg shadow-md overflow-y-auto flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Messaging</h2>
        </div>
        <div className="flex-grow">
          {conversations.map(conv => (
            <MessagePreview
              key={conv.id}
              conversation={conv}
              isSelected={selectedConversation?.id === conv.id}
            />
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="md:col-span-2 bg-white rounded-lg shadow-md flex flex-col">
        {selectedConversation && otherParticipant ? (
          <>
            <div className="p-4 border-b flex items-center space-x-3">
              <img src={otherParticipant.avatarUrl} alt={otherParticipant.firstName} className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="font-semibold">{otherParticipant.firstName} {otherParticipant.lastName}</h3>
                <p className="text-sm text-gray-500">{otherParticipant.headline}</p>
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {selectedConversation.messages.map(message => (
                <ChatMessage key={message.id} message={message} currentUser={currentUser} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t bg-gray-50">
              <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                <textarea
                  placeholder="Write a message..."
                  value={newMessage}
                  onChange={e => setNewMessage(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage(e);
                    }
                  }}
                  rows={1}
                  className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                <button type="submit" className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 disabled:bg-gray-400" disabled={!newMessage.trim()}>
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messaging;
