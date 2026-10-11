"use client";
import React from 'react';
import { Plus } from 'lucide-react';

export default function Stories({ stories, onSelectStory }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 overflow-x-auto no-scrollbar shadow-sm">
      <div className="flex space-x-4 min-w-max">
        {stories.map((story) => (
          <div 
            key={story.id} 
            onClick={() => story.hasStory && onSelectStory(story)}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="relative">
              <div className={`w-16 h-16 rounded-full p-[2px] transition duration-200 group-hover:scale-105 ${
                story.isUser 
                  ? 'border-2 border-gray-200' 
                  : story.unread 
                  ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600' 
                  : 'bg-gray-300'
              }`}>
                <div className="w-full h-full bg-white rounded-full p-[2px]">
                  <img 
                    src={story.avatar} 
                    alt={story.username} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {story.isUser && (
                <div className="absolute bottom-0 right-0 bg-blue-500 text-white p-0.5 rounded-full border-2 border-white">
                  <Plus className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              )}
            </div>
            
            <span className="text-xs text-gray-700 mt-1.5 w-16 truncate text-center">
              {story.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}