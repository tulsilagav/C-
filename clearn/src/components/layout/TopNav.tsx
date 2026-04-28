"use client";

import React from "react";
import Link from "next/link";
import { Flame, Heart, Gem, Settings } from "lucide-react";
import { useGameStore } from "@/store/gameStore";

export const TopNav: React.FC = () => {
  const { xp, streak, hearts, gems } = useGameStore();

  return (
    <header className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-40">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-duo-green">
          🕊️ CLearn
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
            <span className="text-sm font-bold">{xp}</span>
            <span className="text-xs text-blue-600">XP</span>
          </div>

          <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded">
            <Flame size={16} className="text-orange-500" />
            <span className="text-sm font-bold">{streak}</span>
          </div>

          <div className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded">
            <Heart size={16} className="text-red-500" />
            <span className="text-sm font-bold">{hearts}</span>
          </div>

          <div className="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded">
            <Gem size={16} className="text-purple-500" />
            <span className="text-sm font-bold">{gems}</span>
          </div>

          <button className="text-gray-600 hover:text-gray-900">
            <Settings size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
