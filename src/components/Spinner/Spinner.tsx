import React from "react";
import "../../../styles/global.css";
export interface SpinnerProps {
  color?: string;
  className?: string;
  size?: "small" | "medium" | "large";
}

/**
 * Primary UI component for user interaction
 */
const Spinner = ({ className, size = "small", color = "purple" }: SpinnerProps) => {
  const sizeClass =
    size === "small"
      ? "w-8 h-8 border-3"
      : size === "medium"
      ? "w-10 h-10"
      : size === "large"
      ? "w-12 h-12"
      : "w-8 h-8";

  return (
    <div
      aria-label="input"
      className={`inline-block h-8 w-8 animate-spin rounded-full border-4  ${sizeClass} ${className}`}
      style={{
        borderTopColor: "transparent",
        borderLeftColor: color,
        borderRightColor: color,
        borderBottomColor: color,
      }}
      role="status"
    ></div>
  );
};

export default Spinner;
