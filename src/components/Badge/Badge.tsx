import React from "react";

export interface BadgeProps {
  color?: "primary" | "success" | "danger";
  value?: string;
  className?: string;
  size?: "small" | "medium" | "large";
}

/**
 * Primary UI component for user interaction
 */
const Badge = ({ color = "primary", value = "DEFAULT", className, size = "small" }: BadgeProps) => {
  const sizeClass =
    size === "small" ? "w-20 py-2" : size === "medium" ? "w-24 py-3" : size === "large" ? "w-28 py-4" : "";

  const colorClass =
    color === "primary"
      ? "bg-white-300 text-black"
      : color === "success"
      ? "bg-green-300 text-green-700"
      : color === "danger"
      ? "bg-red-300 text-red-700"
      : "bg-white-200";

  value === "" ? (value = "PRIMARY") : value;

  return (
    <div
      aria-label="input"
      className={`flex w-20 cursor-pointer items-center justify-center rounded-md font-poppins font-semibold text-black ${colorClass} ${className} ${sizeClass}`}
    >
      {value}
    </div>
  );
};

export default Badge;
