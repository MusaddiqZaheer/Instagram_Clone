"use client";
import React from 'react';
import { CURRENT_USER, SUGGESTIONS } from '../data/mockData';

export default function RightSidebar() {
  return (
    <aside className="hidden lg:block w-80 pl-8 pt-2">
      {/* Current Logged-in User */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <img 
            src={CURRENT_USER.avatar} 
            alt={CURRENT_USER.username} 
            className="w-14 h-14 rounded-full object-cover border border-gray-200"
          />
          <div>
            <div className="font-semibold text-sm text-gray-900">{CURRENT_USER.username}</div>
            <div className="text-xs text-gray-500">{CURRENT_USER.name}</div>
          </div>
        </div>
        <button className="text-xs font-semibold text-blue-500 hover:text-blue-800">
          Switch
        </button>
      </div>

      {/* Suggestions Section Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-500">Suggestions For You</span>
        <button className="text-xs font-semibold text-gray-800 hover:text-gray-500">
          See All
        </button>
      </div>

      {/* Suggestions List */}
      <div className="space-y-3.5">
        {SUGGESTIONS.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={item.avatar} 
                alt={item.username} 
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <div className="text-sm font-semibold text-gray-900 hover:underline cursor-pointer">
                  {item.username}
                </div>
                <div className="text-[11px] text-gray-400 max-w-[140px] truncate">
                  {item.subtext}
                </div>
              </div>
            </div>
            <button className="text-xs font-semibold text-blue-500 hover:text-blue-800">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer Meta Links */}
      <div className="mt-8 text-[11px] text-gray-300 space-y-2">
        <p>About · Help · Press · API · Jobs · Privacy · Terms · Locations</p>
        <p>© 2026 INSTAGRAM FROM META</p>
      </div>
    </aside>
  );
}