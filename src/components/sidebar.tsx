"use client";

import Link from "next/link";
import { 
  Home, 
  Hash, 
  Bell, 
  Mail, 
  Bookmark, 
  User
} from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="fixed top-16 bottom-4 left-4 w-56 bg-[#1A1A1A] text-white flex flex-col justify-between rounded-2xl shadow-lg px-2 py-2">
      {/* Profile section */}
      <div>
        <div className="flex flex-col items-center text-center mb-8">
          <Image
            src="/avatar.jpg"
            alt="Profile"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h2 className="mt-3 text-sm font-semibold">Miranda Hesti Joy</h2>
          <p className="text-xs text-gray-400">@hestikontol</p>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-4 px-3">
          <SidebarItem href="/" icon={<Home size={25} />} label="Home" />
          <SidebarItem href="/explore" icon={<Hash size={25} />} label="Explore" />
          <SidebarItem href="/notifications" icon={<Bell size={25} />} label="Notifications" />
          <SidebarItem href="/messages" icon={<Mail size={25} />} label="Messages" />
          <SidebarItem href="/bookmarks" icon={<Bookmark size={25} />} label="Bookmarks" />
          <SidebarItem href="/profile" icon={<User size={25} />} label="Profile" />
          <SidebarItem
            href="/timi"
            icon={<Image src="/images/timi1.svg" alt="TimiAI" width={25} height={25} className="inline-block flex-shrink-0"/>}
            label="TimiAI"
          />
        </nav>
      </div>

      {/* Branding */}
      <div className="items-center justify-center mb-6">
        <Image
          src="/images/TemuIlmu.svg"
          alt="Temu Ilmu Logo"
          width={100}
          height={50}
          className="mx-auto"
        />
      </div>
    </aside>
  );
}

/* Sidebar item component */
type SidebarItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

function SidebarItem({ href, icon, label }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-2 py-1 rounded-xl"
    >
      {icon}
      <span className="text-base font-medium">{label}</span>
    </Link>
  );
}
