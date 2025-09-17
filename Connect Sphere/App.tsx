import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';
import Messaging from './pages/Messaging';
import Notifications from './pages/Notifications';
import Network from './pages/Network';
import Mentorship from './pages/Mentorship';
import Groups from './pages/Groups';
import GroupDetail from './pages/GroupDetail';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/network" element={<Network />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/groups/:groupId" element={<GroupDetail />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/messaging" element={<Messaging />} />
          <Route path="/messaging/:conversationId" element={<Messaging />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
