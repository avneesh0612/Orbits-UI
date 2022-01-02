import React, { ReactNode } from "react";

export interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return <div className="w-full h-xm bg-gray-100 rounded-full" aria-label="divider"></div>;
};

export default Divider;
