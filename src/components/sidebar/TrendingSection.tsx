"use client";

import { TrendingTopic } from '@/components/types';
import { MoreHorizontal } from 'lucide-react';

const trendingTopics: TrendingTopic[] = [
  {
    id: '1',
    title: 'Ramai di Ruang Matematika',
    location: '',
    hashtag: '#SQUID',
    posts: 2066
  },
  {
    id: '2',
    title: 'Ramai di Jakarta',
    location: '',
    hashtag: '#SQUID',
    posts: 2066
  },
  {
    id: '3',
    title: 'Ramai di Gas Alam',
    location: '',
    hashtag: '#SQUID',
    posts: 2066
  },
  {
    id: '4',
    title: 'Ramai di Pekapuran',
    location: '',
    hashtag: '#KembalikaNursidik',
    posts: 2066
  }
];

export default function TrendingSection() {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-800">
        <h2 className="text-xl font-bold text-white">Ramai Belakangan Ini</h2>
      </div>
      <div className="divide-y divide-gray-800">
        {trendingTopics.map((topic) => (
          <div key={topic.id} className="px-6 py-4 hover:bg-gray-800 transition-colors cursor-pointer">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-gray-400 text-sm">{topic.title}</p>
                <p className="text-white font-bold text-lg mt-1">{topic.hashtag}</p>
                <p className="text-gray-400 text-sm mt-1">{topic.posts.toLocaleString()} Posts</p>
              </div>
              <button className="text-gray-400 hover:text-white p-1 hover:bg-gray-700 rounded-full transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
        <div className="px-6 py-4">
          <button className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}