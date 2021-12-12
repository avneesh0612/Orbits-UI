import React, { ReactNode } from "react";
import "../../../styles/global.css";

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

  value === "" ? (value = "PRIMARY") : (value = value);

  return (
    <div
      aria-label="input"
      className={`font-poppins font-semibold text-black rounded-md w-20 flex justify-center items-center cursor-pointer ${colorClass} ${className} ${sizeClass}`}
    >
      {value}
    </div>
  );
};

export default Badge;
