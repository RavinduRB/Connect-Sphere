import React, { useState } from 'react';
import { notifications as initialNotifications } from '../data/mockData';
import { Notification } from '../types';

const NotificationItem: React.FC<{ notification: Notification }> = ({ notification }) => {
    return (
        <div className={`p-4 flex items-start space-x-3 border-b transition-colors duration-300 ${!notification.read ? 'bg-blue-50' : 'bg-white'}`}>
            {notification.user?.avatarUrl && 
                <img src={notification.user.avatarUrl} alt="avatar" className="w-12 h-12 rounded-full"/>
            }
             {notification.job?.company.logoUrl && 
                <img src={notification.job.company.logoUrl} alt="company logo" className="w-12 h-12"/>
            }
            <div className="flex-1">
                <p className="text-sm">{notification.message}</p>
                <p className="text-xs text-gray-500 mt-1">{notification.timestamp}</p>
            </div>
             <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
             </button>
        </div>
    );
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleMarkAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const hasUnread = notifications.some(n => !n.read);

  return (
    <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center">
                <h1 className="text-xl font-semibold">Notifications</h1>
                {hasUnread && (
                  <button 
                    onClick={handleMarkAllRead}
                    className="text-sm text-blue-600 hover:underline font-semibold"
                  >
                    Mark all as read
                  </button>
                )}
            </div>
            <div>
                {notifications.map(notif => (
                    <NotificationItem key={notif.id} notification={notif} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default Notifications;