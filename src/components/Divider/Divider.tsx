import React from "react";

export interface DividerProps {
  backgroundColor?: string;
  className?: string;
}

const Divider = ({ className, backgroundColor }: DividerProps) => {
  return (
    <div
      className={`h-xm bg-gray-300 ${className}`}
      aria-label="divider"
      style={backgroundColor ? { backgroundColor } : {}}
    ></div>
  );
};

export default Divider;
