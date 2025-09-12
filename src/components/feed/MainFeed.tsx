"use client";

import { useState } from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import { Post } from '@/components/types';

const mockPosts: Post[] = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'Abi Sugeng Tua',
      username: 'abibrutall',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    content: 'Pemerintah bakal buka beasiswa 100% guysss',
    image: 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    timestamp: '2h',
    likes: 3300000,
    reposts: 785400,
    comments: 118700,
    isLiked: false,
    isReposted: false
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'Abi Sugeng Tua',
      username: 'abibrutall',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    content: 'Pemerintah bakal buka beasiswa 100% guysss',
    timestamp: '4h',
    likes: 2100000,
    reposts: 456300,
    comments: 89200,
    isLiked: true,
    isReposted: false
  }
];

const feedTabs = [
  { id: 'foryou', label: 'For you', active: true },
  { id: 'following', label: 'Following', active: false },
  { id: 'friends', label: 'Friends', active: false },
  { id: 'ruang', label: 'Ruang', active: false }
];

export default function MainFeed() {
  const [activeTab, setActiveTab] = useState('foryou');
  const [posts] = useState(mockPosts);

  return (
    <div className="flex-1 max-w-4xl">
      {/* Feed Tabs */}
      <div className="sticky justify-center top-0 bg-black/80 backdrop-blur-md">
        <div className="flex space-x-8 px-7">
          {feedTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-semibold pb-4 transition-colors ${
                activeTab === tab.id
                  ? 'text-yellow-400 border-yellow-400'
                  : 'text-gray-400 hover:text-white border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Create Post */}
      <div className="mb-6">
        <CreatePost />
      </div>

      {/* Posts Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
        <PostCard
            key={post.id}
            avatar={post.user.avatar}
            name={post.user.name}
            username={post.user.username}
            content={post.content}
            image={post.image}
            comments={post.comments}
            retweets={post.reposts}  // ⚠️ sesuaikan namanya
            likes={post.likes}
            timestamp={post.timestamp}
        />
        ))}
      </div>
    </div>
  );
}