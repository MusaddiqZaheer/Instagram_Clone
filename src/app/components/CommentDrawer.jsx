"use client";
import React, { useState } from 'react';
import { X, Send, Heart, Smile } from 'lucide-react';

export default function CommentDrawer({ post, onClose, onAddComment }) {
  const [newComment, setNewComment] = useState('');

  if (!post) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      onAddComment(post.id, newComment);
      setNewComment('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-4xl h-[80vh] rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 z-10 p-1 bg-black/50 text-white rounded-full hover:bg-black/80 md:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Post Media */}
        <div className="bg-black w-full md:w-3/5 h-64 md:h-full flex items-center justify-center">
          <img src={post.image} alt="Post media" className="w-full h-full object-contain" />
        </div>

        {/* Right Side: Comments Header & Feed */}
        <div className="w-full md:w-2/5 flex flex-col h-full bg-white">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <img src={post.userAvatar} alt={post.username} className="w-8 h-8 rounded-full object-cover" />
              <span className="font-semibold text-sm text-gray-900">{post.username}</span>
            </div>
            <button onClick={onClose} className="hidden md:block text-gray-500 hover:text-black">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Comments List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Caption as first comment */}
            <div className="flex items-start space-x-3">
              <img src={post.userAvatar} alt={post.username} className="w-8 h-8 rounded-full object-cover" />
              <div className="text-sm">
                <span className="font-semibold mr-2">{post.username}</span>
                <span>{post.caption}</span>
                <div className="text-xs text-gray-400 mt-1">{post.timeAgo}</div>
              </div>
            </div>

            {/* User Comments */}
            {post.comments.map((comment) => (
              <div key={comment.id} className="flex items-start justify-between group">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">
                    {comment.username[0].toUpperCase()}
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold mr-2">{comment.username}</span>
                    <span>{comment.text}</span>
                    <div className="text-xs text-gray-400 mt-1">{comment.time || '1h'}</div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500 p-1">
                  <Heart className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Comment Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200 flex items-center">
            <Smile className="w-6 h-6 text-gray-400 mr-2 cursor-pointer hover:text-gray-600" />
            <input 
              type="text" 
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 text-sm outline-none"
            />
            <button 
              type="submit" 
              disabled={!newComment.trim()}
              className="text-sm font-semibold text-blue-500 disabled:opacity-40 ml-2"
            >
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}