"use client";

import { useState } from 'react';
import { PopularRoom } from '@/components/types';

const popularRooms: PopularRoom[] = [
  {
    id: '1',
    name: 'Matematika',
    username: 'math',
    avatar: 'https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    isFollowing: false
  },
  {
    id: '2',
    name: 'Matematika',
    username: 'math',
    avatar: 'https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    isFollowing: false
  },
  {
    id: '3',
    name: 'Matematika',
    username: 'math',
    avatar: 'https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    isFollowing: false
  }
];

export default function PopularRooms() {
  const [rooms, setRooms] = useState(popularRooms);

  const handleFollow = (roomId: string) => {
    setRooms(rooms.map(room => 
      room.id === roomId 
        ? { ...room, isFollowing: !room.isFollowing }
        : room
    ));
  };

  return (
    <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-800">
        <h2 className="text-xl font-bold text-white">Ruang Populer</h2>
      </div>
      <div className="divide-y divide-gray-800">
        {rooms.map((room) => (
          <div key={room.id} className="px-6 py-4 hover:bg-gray-800 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src={room.avatar} 
                  alt={room.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-semibold">{room.name}</h3>
                  <p className="text-gray-400 text-sm">@{room.username}</p>
                </div>
              </div>
              <button
                onClick={() => handleFollow(room.id)}
                className={`px-3 py-1 rounded-full font-semibold transition-all duration-200 hover:scale-105 ${
                  room.isFollowing
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-yellow-400 text-black hover:bg-yellow-500'
                }`}
              >
                {room.isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}