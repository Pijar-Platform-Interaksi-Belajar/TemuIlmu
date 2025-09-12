"use client";

import { Search } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="relative max-w-xl w-full">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Topic"
        className="w-full bg-[#1A1A1A] text-white placeholder-gray-400 pl-12 pr-4 py-3 rounded-2xl focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400 transition-colors"
      />
    </div>
  );
}