"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Trophy,
  User,
  ShoppingBag,
  Flame,
  Heart,
  Gem,
} from "lucide-react";
import { useGameStore } from "@/store/gameStore";
import clsx from "clsx";

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { streak, hearts, gems } = useGameStore();

  const navItems = [
    { icon: BookOpen, label: "Learn", href: "/learn" },
    { icon: Trophy, label: "Leaderboard", href: "/leaderboard" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: ShoppingBag, label: "Shop", href: "/shop" },
  ];

  return (
    <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-3xl font-bold bg-gradient-to-r from-duo-green to-duo-blue bg-clip-text text-transparent">
            🕊️
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">CLearn</h1>
            <p className="text-xs text-gray-500">Learn C the fun way</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname?.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                isActive
                  ? "bg-duo-green text-white shadow-duo-green"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <Icon size={20} />
              <span className="font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Stats */}
      <div className="p-4 border-t border-gray-200 space-y-3">
        <div className="flex items-center justify-between bg-orange-50 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Flame className="text-orange-500" size={20} />
            <span className="font-semibold text-gray-900">{streak}</span>
          </div>
          <span className="text-xs text-gray-600">Streak</span>
        </div>

        <div className="flex items-center justify-between bg-red-50 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Heart className="text-red-500" size={20} />
            <span className="font-semibold text-gray-900">{hearts}</span>
          </div>
          <span className="text-xs text-gray-600">Hearts</span>
        </div>

        <div className="flex items-center justify-between bg-purple-50 p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Gem className="text-purple-500" size={20} />
            <span className="font-semibold text-gray-900">{gems}</span>
          </div>
          <span className="text-xs text-gray-600">Gems</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
