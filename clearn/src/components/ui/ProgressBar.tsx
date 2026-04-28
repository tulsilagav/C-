import React from "react";
import clsx from "clsx";

interface ProgressBarProps {
  current: number;
  total: number;
  color?: "green" | "blue" | "red" | "yellow";
  animated?: boolean;
  showLabel?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  color = "green",
  animated = true,
  showLabel = false,
  className,
}) => {
  const percentage = (current / total) * 100;

  return (
    <div className={clsx("w-full", className)}>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className={clsx(
            "h-full transition-all duration-500 rounded-full",
            color === "green" && "bg-duo-green",
            color === "blue" && "bg-duo-blue",
            color === "red" && "bg-duo-red",
            color === "yellow" && "bg-duo-yellow",
            animated && "animate-pulse"
          )}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {showLabel && (
        <p className="text-sm text-gray-600 mt-1">
          {current} / {total}
        </p>
      )}
    </div>
  );
};

export default ProgressBar;
