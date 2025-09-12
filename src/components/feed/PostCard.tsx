"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle as Chat, Repeat2, Heart, Share } from "lucide-react"

interface PostProps {
  avatar: string
  name: string
  username: string
  content: string
  image?: string
  comments: number
  retweets: number
  likes: number
  timestamp?: string
  isLiked?: boolean
  isReposted?: boolean
}

export default function PostCard({
  avatar,
  name,
  username,
  content,
  image,
  comments,
  retweets,
  likes,
  timestamp,
  isLiked: initialLiked = false,
  isReposted: initialReposted = false,
}: PostProps) {
  const [isLiked, setIsLiked] = useState(initialLiked)
  const [isReposted, setIsReposted] = useState(initialReposted)
  const [likeCount, setLikeCount] = useState(likes)
  const [retweetCount, setRetweetCount] = useState(retweets)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  const handleRepost = () => {
    setIsReposted(!isReposted)
    setRetweetCount(isReposted ? retweetCount - 1 : retweetCount + 1)
  }

  const formatCount = (count: number) => {
    if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`
    if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K`
    return count.toString()
  }

  return (
    <div className="bg-[#1A1A1A] text-white rounded-2xl p-4 w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={avatar}
          alt={`${name} avatar`}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-400 text-sm">@{username} · {timestamp}</p>
        </div>
      </div>

      {/* Content */}
      <p className="mb-3 text-lg leading-relaxed">{content}</p>

      {/* Image / Media */}
      {image && (
        <div className="mb-3 rounded-xl overflow-hidden bg-gray-800">
          <Image
            src={image}
            alt="Post media"
            width={600}
            height={300}
            className="rounded-xl object-cover w-full max-h-80"
          />
        </div>
      )}

      {/* Interaction stats */}
      <div className="flex items-center justify-between mt-4 max-w-md text-gray-400">
        {/* Comments */}
        <button className="flex items-center space-x-2 hover:text-blue-400 group transition-colors">
          <div className="p-2 group-hover:bg-blue-900/20 rounded-full transition-colors">
            <Chat className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium">{formatCount(comments)}</span>
        </button>

        {/* Repost */}
        <button
          onClick={handleRepost}
          className={`flex items-center space-x-2 group transition-colors ${
            isReposted ? "text-green-400" : "hover:text-green-400"
          }`}
        >
          <div className="p-2 group-hover:bg-green-900/20 rounded-full transition-colors">
            <Repeat2 className="w-5 h-5" />
          </div>
          <span className="text-sm font-medium">{formatCount(retweetCount)}</span>
        </button>

        {/* Like */}
        <button
          onClick={handleLike}
          className={`flex items-center space-x-2 group transition-colors ${
            isLiked ? "text-red-400" : "hover:text-red-400"
          }`}
        >
          <div className="p-2 group-hover:bg-red-900/20 rounded-full transition-colors">
            <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
          </div>
          <span className="text-sm font-medium">{formatCount(likeCount)}</span>
        </button>

        {/* Share */}
        <button className="flex items-center space-x-2 hover:text-blue-400 group transition-colors">
          <div className="p-2 group-hover:bg-blue-900/20 rounded-full transition-colors">
            <Share className="w-5 h-5" />
          </div>
        </button>
      </div>
    </div>
  )
}
