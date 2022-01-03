import React, { ReactNode } from "react";
import "../../../styles/global.css";

export interface DividerProps {
  backgroundColor?: string;
  className?: string;
}

const Divider = ({ className, backgroundColor }: DividerProps) => {
  return (
    <div
      className={`bg-gray-300 h-xm ${className}`}
      aria-label="divider"
      style={backgroundColor ? { backgroundColor } : {}}
    ></div>
  );
};

export default Divider;
