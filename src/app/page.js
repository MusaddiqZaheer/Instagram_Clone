"use client";
import React, { useState } from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import FeedPost from './components/FeedPost';
import RightSidebar from './components/RightSidebar';
import CommentDrawer from './components/CommentDrawer';
import StoryModal from './components/StoryModal';
import { INITIAL_STORIES, INITIAL_POSTS } from './data/mockData';

export default function Home() {
  const [stories] = useState(INITIAL_STORIES);
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [activeStory, setActiveStory] = useState(null);
  const [activeCommentPost, setActiveCommentPost] = useState(null);

  const handleToggleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const handleToggleSave = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return { ...post, isSaved: !post.isSaved };
      }
      return post;
    }));
  };

  const handleAddComment = (postId, commentText) => {
    const newCommentObj = {
      id: Date.now(),
      username: "shirleyromero",
      text: commentText,
      time: "Just now"
    };

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newCommentObj]
        };
      }
      return post;
    }));

    if (activeCommentPost && activeCommentPost.id === postId) {
      setActiveCommentPost(prev => ({
        ...prev,
        comments: [...prev.comments, newCommentObj]
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Top Navbar */}
      <Header />

      {/* Main Content Layout */}
      <main className="max-w-4xl mx-auto pt-6 px-4 flex justify-between">
        {/* Left Feed Section */}
        <section className="w-full max-w-[470px] mx-auto md:mx-0">
          <Stories stories={stories} onSelectStory={(s) => setActiveStory(s)} />

          {/* Posts Feed */}
          <div>
            {posts.map(post => (
              <FeedPost 
                key={post.id}
                post={post}
                onToggleLike={handleToggleLike}
                onToggleSave={handleToggleSave}
                onAddComment={handleAddComment}
                onOpenComments={(p) => setActiveCommentPost(p)}
              />
            ))}
          </div>
        </section>

        {/* Right Desktop Sidebar */}
        <RightSidebar />
      </main>

      {/* Modals / Drawers */}
      {activeStory && (
        <StoryModal story={activeStory} onClose={() => setActiveStory(null)} />
      )}

      {activeCommentPost && (
        <CommentDrawer 
          post={activeCommentPost} 
          onClose={() => setActiveCommentPost(null)}
          onAddComment={handleAddComment}
        />
      )}
    </div>
  );
}