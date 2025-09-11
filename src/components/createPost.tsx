"use client";

import Image from "next/image";
import { 
    Video,
    Camera,
    CalendarDays as Calendar,
    List as PollIcon,
    Send as SendIcon
    }
    from "lucide-react";

export default function CreatePost() {
  return (
    <div className="bg-[#1A1A1A] rounded-2xl p-4 flex flex-col gap-3 w-full max-w-2xl mx-auto fixed top-16 mb-16">
      
    {/* Input area */}
      <div className="flex items-center gap-3">
        <Image
          src="/avatar.jpg"
          alt="Profile"
          width={40}
          height={40}
          className="rounded-full"
        />
        <input
          type="text"
          placeholder="Apa yang ada di pikiran mu…?"
          className="flex-1 bg-[#1A1A1A] border border-gray-700 rounded-full px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-gray-500 placeholder-gray-500"
        />
        <button className="bg-yellow-400 p-3 rounded-full flex items-center justify-center hover:brightness-110 transition">
          <SendIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="flex mt-3 gap-2 justify-between">
        <OptionButton icon={<Camera size={25}/>} label="Photo"/>
        <OptionButton icon={<Video size={25}/>} label="Video" />
        <OptionButton icon={<PollIcon size={25}/>} label="Poll" />
        <OptionButton icon={<Calendar size={25} />} label="Schedule" />
      </div>
    </div>
  );
}

type OptionButtonProps = {
  icon: React.ReactNode;
  label: string;
};

function OptionButton({ icon, label }: OptionButtonProps) {
  return (
    <button className="flex items-center gap-1 px-10 py-3 rounded-full bg-[#303030] text-gray-300 text-sm transition">
      {icon}
      {label}
    </button>
  );
}
