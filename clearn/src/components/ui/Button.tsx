import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      isLoading,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "font-nunito font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2",
          "active:shadow-none",
          // Sizes
          size === "sm" && "px-3 py-1 text-sm",
          size === "md" && "px-4 py-2 text-base",
          size === "lg" && "px-6 py-3 text-lg",
          // Variants
          variant === "primary" &&
            "bg-duo-green text-white shadow-duo-green hover:shadow-lg active:translate-y-1 active:shadow-sm",
          variant === "secondary" &&
            "bg-blue-500 text-white shadow-duo-blue hover:shadow-lg active:translate-y-1",
          variant === "success" &&
            "bg-duo-green text-white shadow-duo-green hover:shadow-lg active:translate-y-1",
          variant === "danger" &&
            "bg-duo-red text-white shadow-duo-red hover:shadow-lg active:translate-y-1",
          variant === "ghost" &&
            "bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200",
          isLoading && "opacity-70 cursor-not-allowed",
          className
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <span className="inline-block animate-spin">⏳</span>
        )}
        {icon && <span>{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
