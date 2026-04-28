"use client";

import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopNav } from "@/components/layout/TopNav";
import { MobileNav } from "@/components/layout/MobileNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 md:ml-64 mt-16 md:mt-0 pb-20 md:pb-0">
        <TopNav />
        <div className="p-4 md:p-8">{children}</div>
      </main>

      {/* Mobile nav */}
      <MobileNav />
    </div>
  );
}
