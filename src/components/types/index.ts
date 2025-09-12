export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  verified?: boolean;
}

export interface Post {
  id: string;
  user: User;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  reposts: number;
  comments: number;
  isLiked?: boolean;
  isReposted?: boolean;
}

export interface TrendingTopic {
  id: string;
  title: string;
  location: string;
  hashtag: string;
  posts: number;
}

export interface PopularRoom {
  id: string;
  name: string;
  username: string;
  avatar: string;
  isFollowing?: boolean;
}

export interface NavigationItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  badge?: number;
}