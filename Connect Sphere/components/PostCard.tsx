import React, { useState } from 'react';
import { Post, Comment } from '../types';
import { ICONS } from '../constants';
import Icon from './Icon';
import { currentUser } from '../data/mockData';

interface PostCardProps {
  post: Post;
  onLikeToggle: (postId: string) => void;
  onAddComment: (postId: string, content: string) => void;
}

const PostAction: React.FC<{ icon: React.ReactNode; label: string; onClick?: () => void; isActive?: boolean }> = ({ icon, label, onClick, isActive }) => (
    <button onClick={onClick} className={`flex items-center space-x-2 hover:bg-gray-100 px-4 py-2 rounded-md w-full justify-center ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-500'}`}>
        <Icon className="w-6 h-6">{icon}</Icon>
        <span className="font-semibold text-sm">{label}</span>
    </button>
);


const PostCard: React.FC<PostCardProps> = ({ post, onLikeToggle, onAddComment }) => {
  const [isCommentSectionOpen, setCommentSectionOpen] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddComment(post.id, newComment);
    setNewComment('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md mb-6">
      <div className="p-4">
        <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3">
                <img src={post.author.avatarUrl} alt={post.author.firstName} className="w-12 h-12 rounded-full" />
                <div>
                    <p className="font-semibold text-gray-800">{post.author.firstName} {post.author.lastName}</p>
                    <p className="text-xs text-gray-500">{post.author.headline}</p>
                    <p className="text-xs text-gray-500">{post.timestamp}</p>
                </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
                <Icon>{ICONS.ellipsis}</Icon>
            </button>
        </div>
        <p className="mt-4 text-gray-700">{post.content}</p>
      </div>
      {post.imageUrl && (
        <img src={post.imageUrl} alt="Post content" className="w-full" />
      )}
      <div className="p-4">
        <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{post.likes} likes</span>
            <span>{post.comments.length} comments</span>
        </div>
      </div>
      <div className="border-t border-gray-200 mx-4"></div>
       <div className="flex justify-around p-1">
            <PostAction 
                icon={ICONS.like} 
                label="Like"
                onClick={() => onLikeToggle(post.id)}
                isActive={post.isLikedByUser}
            />
            <PostAction 
                icon={ICONS.comment} 
                label="Comment"
                onClick={() => setCommentSectionOpen(!isCommentSectionOpen)}
            />
            <PostAction 
                icon={ICONS.share} 
                label="Share"
                onClick={() => alert('Share functionality is not yet implemented.')}
            />
            <PostAction 
                icon={ICONS.send} 
                label="Send"
                onClick={() => alert('Send functionality is not yet implemented.')}
            />
       </div>
       {isCommentSectionOpen && (
        <div className="p-4 border-t border-gray-200">
          <form onSubmit={handleCommentSubmit} className="flex items-start space-x-3 mb-4">
            <img src={currentUser.avatarUrl} alt="Your avatar" className="w-10 h-10 rounded-full" />
            <div className="w-full">
              <textarea
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={1}
              ></textarea>
              {newComment && (
                <button type="submit" className="mt-2 bg-blue-600 text-white font-semibold rounded-full px-4 py-1 hover:bg-blue-700">
                  Post
                </button>
              )}
            </div>
          </form>
          <div className="space-y-4">
            {post.comments.map((comment: Comment) => (
              <div key={comment.id} className="flex items-start space-x-3">
                <img src={comment.author.avatarUrl} alt={comment.author.firstName} className="w-10 h-10 rounded-full" />
                <div className="bg-gray-100 p-3 rounded-lg flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm">{comment.author.firstName} {comment.author.lastName}</p>
                    <p className="text-xs text-gray-500">{comment.timestamp}</p>
                  </div>
                  <p className="text-sm text-gray-800 mt-1">{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
       )}
    </div>
  );
};

export default PostCard;