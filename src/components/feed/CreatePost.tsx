"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Video,
  Image as PhotoIcon,
  CalendarDays as Calendar,
  List as PollIcon,
  Send as SendIcon
} from "lucide-react";

export default function CreatePost() {
  const [postText, setPostText] = useState("");

  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-5 w-full max-w-4xl mx-auto">
      
      {/* Input area */}
      <div className="flex items-center gap-3">
        <Image
          src="/images/mentahan-profile.svg"
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full"
        />

        <div className="flex-1 flex items-center bg-[#2A2A2A] rounded-full px-4 py-3">
          <input
            type="text"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            placeholder="Apa yang ada di pikiran mu...?"
            className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
          />
        </div>

        <button 
          disabled={!postText.trim()}
          className="bg-yellow-400 p-3 rounded-full flex items-center justify-center hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SendIcon className="w-5 h-5 text-black" />
        </button>
      </div>

      {/* Option buttons */}
      <div className="flex justify-center gap-4 mt-5">
        <OptionButton icon={<PhotoIcon size={18} className="text-green-400" />} label="Photo" />
        <OptionButton icon={<Video size={18} className="text-blue-400" />} label="Video" />
        <OptionButton icon={<PollIcon size={18} className="text-pink-400" />} label="Poll" />
        <OptionButton icon={<Calendar size={18} className="text-yellow-400" />} label="Schedule" />
      </div>
    </div>
  );
}

/* Option button component */
type OptionButtonProps = {
  icon: React.ReactNode;
  label: string;
};

function OptionButton({ icon, label }: OptionButtonProps) {
  return (
    <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#303030] text-gray-200 text-sm hover:brightness-110 transition">
      {icon}
      <span>{label}</span>
    </button>
  );
}
