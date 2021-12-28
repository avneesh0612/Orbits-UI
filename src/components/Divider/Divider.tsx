import React, { ReactNode } from "react";
import "../../../styles/global.css";

export interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return <div className="w-full h-xm bg-gray-100 rounded-full"></div>;
};

export default Divider;
