"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Trophy,
  User,
  ShoppingBag,
  Home,
} from "lucide-react";
import clsx from "clsx";

export const MobileNav: React.FC = () => {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: BookOpen, label: "Learn", href: "/learn" },
    { icon: Trophy, label: "Leaderboard", href: "/leaderboard" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: ShoppingBag, label: "Shop", href: "/shop" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around p-2 z-40">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "flex flex-col items-center gap-1 p-2 rounded-lg transition-all",
              isActive ? "text-duo-green" : "text-gray-600"
            )}
          >
            <Icon size={24} />
            <span className="text-xs font-semibold">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default MobileNav;
