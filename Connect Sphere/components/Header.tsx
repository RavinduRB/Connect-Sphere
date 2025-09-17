import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ICONS } from '../constants';
import { currentUser, notifications, users } from '../data/mockData';
import { User } from '../types';

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string }> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex flex-col items-center justify-center text-gray-500 hover:text-black w-20 ${isActive ? 'text-black border-b-2 border-black' : ''}`
    }
  >
    <span className="text-2xl">{icon}</span>
    <span className="text-xs hidden md:block">{label}</span>
  </NavLink>
);

const Header: React.FC = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === '') {
        setSearchResults([]);
        return;
    }

    const filteredUsers = users.filter(user =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };

  const handleResultClick = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearchFocused(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Link to="/">{ICONS.logo}</Link>
            <div className="relative hidden md:block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                {ICONS.search}
              </span>
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white rounded-md pl-10 pr-4 py-2 w-72"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              />
               {isSearchFocused && searchQuery && (
                    <div className="absolute top-full mt-2 w-96 bg-white rounded-md shadow-lg z-10 max-h-96 overflow-y-auto border">
                        {searchResults.length > 0 ? (
                            searchResults.map(user => (
                                <Link
                                    key={user.id}
                                    to={`/profile/${user.id}`}
                                    onClick={handleResultClick}
                                    className="flex items-center p-3 hover:bg-gray-100 border-b last:border-b-0"
                                >
                                    <img src={user.avatarUrl} alt={user.firstName} className="w-10 h-10 rounded-full mr-3" />
                                    <div>
                                        <p className="font-semibold">{user.firstName} {user.lastName}</p>
                                        <p className="text-sm text-gray-500">{user.headline}</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="p-3 text-gray-500">No results found for "{searchQuery}".</div>
                        )}
                    </div>
                )}
            </div>
          </div>

          <nav className="flex items-center space-x-2 md:space-x-4">
            <NavItem to="/" icon={ICONS.home} label="Home" />
            <NavItem to="/network" icon={ICONS.network} label="My Network" />
            <NavItem to="/groups" icon={ICONS.groups} label="Groups" />
            <NavItem to="/jobs" icon={ICONS.jobs} label="Jobs" />
            <NavItem to="/mentorship" icon={ICONS.mentorship} label="Mentorship" />
            <NavItem to="/messaging" icon={ICONS.messaging} label="Messaging" />
            <NavItem to="/notifications" icon={
              <span className="relative">
                {ICONS.notifications}
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-2 bg-red-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                    {unreadCount}
                  </span>
                )}
              </span>
            } label="Notifications" />
            <div className="relative">
              <button onClick={() => setProfileMenuOpen(!isProfileMenuOpen)} className="flex flex-col items-center justify-center text-gray-500 hover:text-black w-20">
                <img src={currentUser.avatarUrl} alt="profile" className="w-6 h-6 rounded-full" />
                <span className="text-xs hidden md:block">Me</span>
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link to={`/profile/${currentUser.id}`} onClick={() => setProfileMenuOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    View Profile
                  </Link>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings & Privacy
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign Out
                  </a>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;