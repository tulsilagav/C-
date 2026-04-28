"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import type { Session } from "next-auth";

export function useAuth() {
  const { data: session, status, update } = useSession();

  const isLoading = status === "loading";
  const isAuthenticated = status === "authenticated";

  return {
    session,
    isLoading,
    isAuthenticated,
    user: session?.user,
    signIn,
    signOut,
    updateSession: update,
  };
}
