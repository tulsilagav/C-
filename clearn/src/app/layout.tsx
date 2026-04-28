import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CLearn - Learn C the Fun Way",
  description: "A gamified C programming language learning platform inspired by Duolingo",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-nunito bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
