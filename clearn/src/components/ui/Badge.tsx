import React from "react";
import clsx from "clsx";

interface BadgeProps {
  variant?: "A" | "B" | "C" | "D" | "success" | "error" | "warning" | "info";
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "info",
  className,
  children,
}) => {
  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center font-bold text-white rounded-full w-8 h-8",
        variant === "A" && "bg-blue-500",
        variant === "B" && "bg-green-500",
        variant === "C" && "bg-yellow-500",
        variant === "D" && "bg-red-500",
        variant === "success" && "bg-duo-green",
        variant === "error" && "bg-duo-red",
        variant === "warning" && "bg-duo-yellow",
        variant === "info" && "bg-duo-blue",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
