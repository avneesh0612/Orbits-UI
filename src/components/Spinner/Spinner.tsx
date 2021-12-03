import React, { ReactNode } from "react";
import "../../../styles/global.css";

export interface SpinnerProps {
  //   color?: "primary" | "success" | "danger";
  className?: string;
  size?: "small" | "medium" | "large";
}

/**
 * Primary UI component for user interaction
 */
const Spinner = ({ className, size = "small" }: SpinnerProps) => {
  const sizeClass =
    size === "small"
      ? "w-8 h-8 border-3"
      : size === "medium"
      ? "w-10 h-10"
      : size === "large"
      ? "w-12 h-12"
      : "w-8 h-8";

  //   const colorClass =
  //     color === "primary"
  //       ? "border-purple-500"
  //       : color === "success"
  //       ? "border-green-600"
  //       : color === "danger"
  //       ? "border-red-700"
  //       : "border-blue-600";

  return (
    <div
      aria-label="input"
      className={`border-4 rounded-full bg-transparent transform spin ${sizeClass} ${className}`}
      style={{ borderTopColor: "transparent" }}
    >
      {" "}
    </div>
  );
};

export default Spinner;
