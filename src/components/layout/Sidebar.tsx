"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  Home, 
  Hash, 
  Bell, 
  Mail, 
  Bookmark, 
  User
} from "lucide-react"

type NavigationItem = {
  icon: React.ReactNode
  label: string
  href: string
}

const navigationItems: NavigationItem[] = [
  { icon: <Home size={25} />, label: "Home", href: "/" },
  { icon: <Hash size={25} />, label: "Explore", href: "/explore" },
  { icon: <Bell size={25} />, label: "Notifications", href: "/notifications" },
  { icon: <Mail size={25} />, label: "Messages", href: "/messages" },
  { icon: <Bookmark size={25} />, label: "Bookmarks", href: "/bookmarks" },
  { icon: <User size={25} />, label: "Profile", href: "/profile" },
  { 
    icon: <Image src="/images/timi1.svg" alt="TimiAI" width={25} height={25} />, 
    label: "TimiAI", 
    href: "/timi" 
  },
]

export default function Sidebar() {
  return (
    <aside className="fixed top-16 bottom-4 left-4 w-56 bg-[#1A1A1A] text-white flex flex-col justify-between rounded-2xl shadow-lg px-2 py-2">
      {/* Profile Section */}
      <div>
        <div className="flex flex-col items-center text-center mb-8 mt-8">
          <Image
            src="/images/mentahan-profile.svg"
            alt="Profile"
            width={64}
            height={64}
            className="rounded-full"
          />
          <h2 className="mt-3 text-sm font-semibold">Miranda Hesti Joy</h2>
          <p className="text-xs text-gray-400">@mirandahj</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-4 px-3">
          {navigationItems.map((item) => (
            <SidebarItem 
              key={item.label} 
              href={item.href} 
              icon={item.icon} 
              label={item.label} 
            />
          ))}
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
  )
}

type SidebarItemProps = {
  href: string
  icon: React.ReactNode
  label: string
}

function SidebarItem({ href, icon, label }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-2 py-1 rounded-xl hover:bg-gray-800 transition-all"
    >
      {icon}
      <span className="text-base font-medium">{label}</span>
    </Link>
  )
}
