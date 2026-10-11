"use client";
import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Smile } from 'lucide-react';

export default function FeedPost({ post, onToggleLike, onToggleSave, onAddComment, onOpenComments }) {
  const [showHeartAnim, setShowHeartAnim] = useState(false);
  const [commentInput, setCommentInput] = useState('');

  const handleDoubleTap = () => {
    setShowHeartAnim(true);
    if (!post.isLiked) {
      onToggleLike(post.id);
    }
    setTimeout(() => {
      setShowHeartAnim(false);
    }, 800);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentInput.trim()) {
      onAddComment(post.id, commentInput);
      setCommentInput('');
    }
  };

  return (
    <article className="bg-white border border-gray-200 rounded-lg mb-6 shadow-sm overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center justify-between p-3.5 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 to-purple-600">
            <img src={post.userAvatar} alt={post.username} className="w-full h-full object-cover rounded-full border border-white" />
          </div>
          <span className="text-sm font-semibold text-gray-900 cursor-pointer hover:underline">
            {post.username}
          </span>
        </div>
        <button className="text-gray-600 hover:text-black">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Post Image with Double Tap Heart Animation */}
      <div 
        className="relative aspect-square bg-black cursor-pointer overflow-hidden flex items-center justify-center select-none"
        onDoubleClick={handleDoubleTap}
      >
        <img src={post.image} alt="Post media" className="w-full h-full object-cover" />
        
        {/* Heart Pop Animation */}
        {showHeartAnim && (
          <div className="absolute z-20 pointer-events-none animate-heart-pop">
            <Heart className="w-28 h-28 text-white fill-white drop-shadow-2xl" />
          </div>
        )}
      </div>

      {/* Post Actions (Like, Comment, Share, Save) */}
      <div className="p-3.5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onToggleLike(post.id)} 
              className="hover:scale-110 active:scale-90 transition transform"
            >
              <Heart className={`w-6 h-6 ${post.isLiked ? 'text-red-500 fill-red-500' : 'text-gray-800'}`} />
            </button>
            <button 
              onClick={() => onOpenComments(post)} 
              className="hover:scale-110 active:scale-90 transition text-gray-800"
            >
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="hover:scale-110 active:scale-90 transition text-gray-800">
              <Send className="w-6 h-6" />
            </button>
          </div>
          <button 
            onClick={() => onToggleSave(post.id)} 
            className="hover:scale-110 active:scale-90 transition text-gray-800"
          >
            <Bookmark className={`w-6 h-6 ${post.isSaved ? 'text-black fill-black' : ''}`} />
          </button>
        </div>

        {/* Likes Count */}
        <div className="font-semibold text-sm text-gray-900 mb-2">
          {post.likes.toLocaleString()} likes
        </div>

        {/* Caption */}
        <div className="text-sm text-gray-800 mb-2">
          <span className="font-semibold mr-2">{post.username}</span>
          {post.caption}
        </div>

        {/* View All Comments Button */}
        {post.comments.length > 0 && (
          <button 
            onClick={() => onOpenComments(post)}
            className="text-xs text-gray-500 font-medium mb-2 hover:text-gray-700 block"
          >
            View all {post.comments.length} comments
          </button>
        )}

        {/* Recent Comments Preview */}
        {post.comments.slice(0, 2).map((comment) => (
          <div key={comment.id} className="text-sm text-gray-800 mb-1">
            <span className="font-semibold mr-2">{comment.username}</span>
            <span>{comment.text}</span>
          </div>
        ))}

        {/* Time Ago */}
        <div className="text-[10px] text-gray-400 uppercase tracking-wide mt-2">
          {post.timeAgo}
        </div>
      </div>

      {/* Add Comment Input */}
      <form onSubmit={handleCommentSubmit} className="flex items-center border-t border-gray-100 px-3.5 py-2.5">
        <Smile className="w-6 h-6 text-gray-400 cursor-pointer mr-3 hover:text-gray-600" />
        <input 
          type="text" 
          placeholder="Add a comment..." 
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          className="w-full text-sm outline-none bg-transparent placeholder-gray-400"
        />
        <button 
          type="submit" 
          disabled={!commentInput.trim()}
          className="text-sm font-semibold text-blue-500 disabled:opacity-40 hover:text-blue-700 ml-2"
        >
          Post
        </button>
      </form>
    </article>
  );
}