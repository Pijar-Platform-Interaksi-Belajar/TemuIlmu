"use client";

import Image from "next/image";
import { 
    MessageCircle as Chat,
    Repeat,
    Heart
 } from "lucide-react";

interface PostProps {
  avatar: string;
  name: string;
  username: string;
  content: string;
  image?: string;
  comments: number;
  retweets: number;
  likes: number;
  timestamp?: string; 
}

export default function Post({
  avatar,
  name,
  username,
  content,
  image,
  comments,
  retweets,
  likes,
}: PostProps) {avatar
  return (
    <div className="bg-[#1A1A1A] text-white rounded-2xl p-4 w-full max-w-2xl mx-auto mt-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          src="/placeholder-avatar.png"
          alt={`${name} avatar`}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-400 text-sm">{username}</p>
        </div>
      </div>

      {/* Content */}
      <p className="mb-3">{content}</p>

      {/* Image / Media */}
      {image && (
        <div className="mb-3">
          <Image
            src="/image/image-example.png"
            alt="Post media"
            width={600}
            height={300}
            className="rounded-xl object-cover w-full max-h-80"
          />
        </div>
      )}

      {/* Interaction stats */}
      <div className="flex gap-4 text-yellow-400">
        <div className="flex items-center gap-1">
          <Chat size={18} /> {comments.toLocaleString()}
        </div>
        <div className="flex items-center gap-1">
          <Repeat size={18} /> {retweets.toLocaleString()}
        </div>
        <div className="flex items-center gap-1">
          <Heart size={18} /> {likes.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
