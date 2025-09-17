import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { groups, groupPosts as allGroupPosts, currentUser } from '../data/mockData';
import { Group, Post, Comment } from '../types';
import PostCard from '../components/PostCard';
import CreatePost from '../components/CreatePost';

const GroupDetail: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const [group, setGroup] = useState<Group | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    const foundGroup = groups.find(g => g.id === groupId);
    if (foundGroup) {
      setGroup(foundGroup);
      setIsMember(foundGroup.isMember || false);
      const initialPosts = allGroupPosts[foundGroup.id] || [];
      setPosts(initialPosts.map(p => ({ ...p, isLikedByUser: false })));
    }
  }, [groupId]);

  const handleLikeToggle = (postId: string) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          const isLiked = !post.isLikedByUser;
          return { ...post, isLikedByUser: isLiked, likes: isLiked ? post.likes + 1 : post.likes - 1 };
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
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, newComment] };
        }
        return post;
      })
    );
  };
  
  const handleJoinToggle = () => {
    if (!group) return;
    setIsMember(!isMember);
    // In a real app, you'd also update the member count
  };

  if (!group) {
    return <div className="text-center py-10">Group not found.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={group.bannerUrl} alt={`${group.name} banner`} className="w-full h-48 object-cover" />
        <div className="p-4 sm:p-6">
            <div className="flex items-start space-x-4">
                <img src={group.avatarUrl} alt={`${group.name} avatar`} className="w-24 h-24 rounded-md -mt-16 border-4 border-white"/>
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">{group.name}</h1>
                    <p className="text-sm text-gray-500">{group.memberCount.toLocaleString()} members</p>
                </div>
                 <button 
                    onClick={handleJoinToggle}
                    className={`font-semibold rounded-full px-4 py-1.5 ${isMember ? 'text-gray-600 bg-gray-200 hover:bg-gray-300' : 'text-white bg-blue-600 hover:bg-blue-700'}`}
                  >
                    {isMember ? 'Joined' : 'Join'}
                  </button>
            </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <main className="col-span-1 md:col-span-2 space-y-6">
            <CreatePost user={currentUser} />
            {posts.map(post => (
                 <PostCard 
                    key={post.id} 
                    post={post}
                    onLikeToggle={handleLikeToggle}
                    onAddComment={handleAddComment}
                />
            ))}
            {posts.length === 0 && (
                <div className="bg-white rounded-lg shadow-md p-6 text-center text-gray-500">
                    No posts in this group yet. Be the first to share something!
                </div>
            )}
        </main>
        <aside className="col-span-1 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-lg mb-2">About this group</h3>
                <p className="text-sm text-gray-600">{group.description}</p>
            </div>
        </aside>
      </div>

    </div>
  );
};

export default GroupDetail;
