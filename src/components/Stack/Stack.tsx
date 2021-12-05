import React, { ReactNode } from "react";
import "../../../styles/global.css";

export interface StackProps {
  gap: "sm" | "md" | "lg" | "xl" | "2xl";
  direction: "row" | "col";
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
const Stack = ({ className, direction = "col", gap = "sm" }: StackProps) => {
  const dirClass = direction === "row" ? "flex-row" : direction === "col" ? "flex-col" : "flex-row";

  const gapClass =
    gap === "sm"
      ? "gap-2"
      : gap === "md"
      ? "gap-4"
      : gap === "lg"
      ? "gap-8"
      : gap === "xl"
      ? "gap-10"
      : gap === "2xl"
      ? "gap-12"
      : "";

  return <div className={`flex ${dirClass} ${className} ${gapClass}`}> </div>;
};

export default Stack;
