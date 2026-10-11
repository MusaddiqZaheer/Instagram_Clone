"use client";
import React from 'react';
import { Home, Send, PlusSquare, Compass, Heart, Search } from 'lucide-react';
import { CURRENT_USER, SUGGESTIONS } from '../data/mockData';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Instagram Logo Text */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold font-serif italic tracking-wide cursor-pointer select-none">
            Instagram
          </h1>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center bg-gray-100 rounded-lg px-3 py-1.5 w-64 border border-gray-200 focus-within:border-gray-400 transition">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none text-sm w-full text-gray-800 placeholder-gray-400"
          />
        </div>

        {/* Top Header Icons */}
        <div className="flex items-center space-x-5 text-gray-800">
          <button className="hover:text-black transition">
            <Home className="w-6 h-6 fill-black" />
          </button>
          <button className="hover:text-black transition relative">
            <Send className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              3
            </span>
          </button>
          <button className="hover:text-black transition hidden sm:block">
            <PlusSquare className="w-6 h-6" />
          </button>
          <button className="hover:text-black transition hidden sm:block">
            <Compass className="w-6 h-6" />
          </button>
          <button className="hover:text-black transition relative">
            <Heart className="w-6 h-6" />
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-300 cursor-pointer">
            <img src={CURRENT_USER.avatar} alt={CURRENT_USER.username} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}