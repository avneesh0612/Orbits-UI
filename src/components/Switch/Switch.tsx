import React, { ReactNode } from "react";
import "../../../styles/switch.css";

export interface SwitchProps {
  className?: string;
  label?: string;
}

const Switch = ({ className, label }: SwitchProps) => {
  return (
    <label htmlFor="toggle-example" className={`${className} flex items-center cursor-pointer relative mb-4`}>
      <input type="checkbox" id="toggle-example" className="sr-only" />
      <div className="toggle-bg bg-gray-100 border-2 border-gray-100 h-6 w-11 rounded-full"></div>
      <span className="ml-3 text-gray-900 text-sm font-medium">{label}</span>
    </label>
  );
};

export default Switch;
