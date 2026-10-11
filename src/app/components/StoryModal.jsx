"use client";
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function StoryModal({ story, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [story, onClose]);

  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
      <button 
        onClick={onClose} 
        className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full"
      >
        <X className="w-8 h-8" />
      </button>

      <div className="relative w-full max-w-sm h-[80vh] bg-gray-900 rounded-xl overflow-hidden flex flex-col justify-between p-4">
        {/* Top Progress Bar */}
        <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden mb-3">
          <div className="bg-white h-full animate-[progress_5s_linear]" style={{ width: '100%' }}></div>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-3 z-10">
          <img src={story.avatar} alt={story.username} className="w-9 h-9 rounded-full border-2 border-white object-cover" />
          <span className="text-white font-semibold text-sm">{story.username}</span>
        </div>

        {/* Center Media Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <img src={story.avatar} alt="story media" className="w-full h-full object-cover opacity-80" />
        </div>

        {/* Bottom Reply Input */}
        <div className="z-10 w-full pt-4">
          <input 
            type="text" 
            placeholder={`Reply to ${story.username}...`}
            className="w-full bg-transparent border border-white/40 rounded-full px-4 py-2 text-white text-sm placeholder-white/70 outline-none focus:border-white"
          />
        </div>
      </div>
    </div>
  );
}