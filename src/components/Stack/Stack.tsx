import React, { ReactNode } from "react";
import "../../../styles/global.css";

export interface StackProps {
  direction: "row" | "column";
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
const Stack = ({ className, direction = "row" }: StackProps) => {
  const dirClass = direction === "row" ? "flex-row" : direction === "column" ? "flex-col" : "flex-row";

  return (
    <div className={`flex ${dirClass} ${className}`}>
      {" "}
      <p>Hio</p>
      <p>hello</p>
      <p>hoi</p>
    </div>
  );
};

export default Stack;
