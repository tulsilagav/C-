"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleOAuthSignIn = async (provider: "google" | "github") => {
    setIsLoading(true);
    try {
      await signIn(provider, {
        callbackUrl: "/learn",
        redirect: false,
      });
      router.push("/learn");
    } catch (error) {
      console.error("Sign in error:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-duo-green/10 to-duo-blue/10 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl mb-2">🕊️</h1>
          <h2 className="text-3xl font-bold text-gray-900">CLearn</h2>
          <p className="text-gray-600 text-sm mt-2">Learn C the fun way</p>
        </div>

        <div className="space-y-4 mb-8">
          <h3 className="font-bold text-lg text-gray-900">Welcome back!</h3>
          <p className="text-gray-600 text-sm">
            Sign in with your favorite provider to continue.
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleOAuthSignIn("google")}
            disabled={isLoading}
            className="w-full bg-white border-2 border-gray-200 rounded-lg py-3 px-4 font-bold text-gray-900 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>🔵</span>
            {isLoading ? "Signing in..." : "Continue with Google"}
          </button>

          <button
            onClick={() => handleOAuthSignIn("github")}
            disabled={isLoading}
            className="w-full bg-gray-900 rounded-lg py-3 px-4 font-bold text-white hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>⚫</span>
            {isLoading ? "Signing in..." : "Continue with GitHub"}
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link href="/login" className="text-duo-green font-bold hover:underline">
              Create one
            </Link>
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-duo-green font-bold hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

