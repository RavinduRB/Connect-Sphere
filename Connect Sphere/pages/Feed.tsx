import React, { useState } from 'react';
import { currentUser, posts as initialPosts } from '../data/mockData';
import ProfileCard from '../components/ProfileCard';
import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';
import { Post, Comment } from '../types';

const Feed: React.FC = () => {
  const [feedPosts, setFeedPosts] = useState<Post[]>(
    initialPosts.map(p => ({ ...p, isLikedByUser: false }))
  );

  const handleLikeToggle = (postId: string) => {
    setFeedPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          const isLiked = !post.isLikedByUser;
          return {
            ...post,
            isLikedByUser: isLiked,
            likes: isLiked ? post.likes + 1 : post.likes - 1,
          };
        }
        return post;
      })
    );
  };

  const handleAddComment = (postId: string, content: string) => {
    if (!content.trim()) return;

    const newComment: Comment = {
      id: `c${Date.now()}`,
      author: currentUser,
      content,
      timestamp: 'Just now',
    };

    setFeedPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Left Sidebar */}
      <aside className="hidden md:block md:col-span-1">
        <ProfileCard user={currentUser} />
      </aside>

      {/* Main Content */}
      <main className="col-span-1 md:col-span-2">
        <CreatePost user={currentUser} />
        <div className="border-b border-gray-300 my-4"></div>
        {feedPosts.map(post => (
          <PostCard 
            key={post.id} 
            post={post}
            onLikeToggle={handleLikeToggle}
            onAddComment={handleAddComment}
          />
        ))}
      </main>

      {/* Right Sidebar */}
      <aside className="hidden md:block md:col-span-1">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="font-semibold">ConnectSphere News</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="font-semibold text-gray-700">Tech industry sees rapid growth</li>
            <li className="text-xs text-gray-500">Top news - 1,865 readers</li>
            <li className="font-semibold text-gray-700">The future of remote work</li>
            <li className="text-xs text-gray-500">1 day ago - 980 readers</li>
            <li className="font-semibold text-gray-700">AI trends to watch in 2024</li>
             <li className="text-xs text-gray-500">3 days ago - 12,345 readers</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Feed;