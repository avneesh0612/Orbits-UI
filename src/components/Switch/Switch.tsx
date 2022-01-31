import React from "react";
import "../../../styles/switch.css";

export interface SwitchProps {
  className?: string;
  label?: string;
}

const Switch = ({ className, label }: SwitchProps) => {
  return (
    <label htmlFor="toggle-example" className={`${className} relative mb-4 flex cursor-pointer items-center`}>
      <input type="checkbox" id="toggle-example" className="sr-only" />
      <div className="toggle-bg h-6 w-11 rounded-full border-2 border-gray-100 bg-gray-100"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">{label}</span>
    </label>
  );
};

export default Switch;
