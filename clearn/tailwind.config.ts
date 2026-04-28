import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "duo-green": "#58CC02",
        "duo-blue": "#1CB0F6",
        "duo-red": "#FF6B6B", // Adjusted for better readability
        "duo-yellow": "#FFEB3B",
        "duo-purple": "#9C27B0",
        "duo-orange": "#FF8C00",
        "duo-gray": "#F5F5F5",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      animation: {
        "heart-break": "heartBreak 0.6s ease-in-out",
        "xp-pop": "xpPop 1.2s ease-out forwards",
        "bounce-in": "bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        shake: "shake 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
      },
      keyframes: {
        heartBreak: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2) rotate(-10deg)" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
        xpPop: {
          "0%": { transform: "translate(0, 0)", opacity: "1" },
          "100%": { transform: "translate(0, -60px)", opacity: "0" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { opacity: "1" },
          "70%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        "duo-green": "0 4px 12px rgba(88, 204, 2, 0.3)",
        "duo-blue": "0 4px 12px rgba(28, 176, 246, 0.3)",
        "duo-red": "0 4px 12px rgba(255, 107, 107, 0.3)",
        "duo-gray": "0 4px 12px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      },
    },
  },
  plugins: [],
};
export default config;
