"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const handleOAuthSign = (provider: "google" | "github") => {
    // This will be implemented with NextAuth signIn function
    window.location.href = `/api/auth/signin/${provider}`;
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
            onClick={() => handleOAuthSign("google")}
            className="w-full bg-white border-2 border-gray-200 rounded-lg py-3 px-4 font-bold text-gray-900 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>🔵</span>
            Continue with Google
          </button>

          <button
            onClick={() => handleOAuthSign("github")}
            className="w-full bg-gray-900 rounded-lg py-3 px-4 font-bold text-white hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>⚫</span>
            Continue with GitHub
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
