import React, { ReactNode } from "react";
import "../../../styles/global.css";

export interface InputProps {
  placeholder?: string;
  color?: string;
  primary?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large";
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
const Input = ({
  primary = true,
  placeholder,
  color = "bg-blue-500",
  size = "medium",
  onChange,
  value,
  className,
}: InputProps) => {
  const sizeClass =
    size === "small"
      ? "text-sm py-2 px-3"
      : size === "medium"
      ? "text-md py-3 px-4"
      : size === "large"
      ? "text-lg py-4 px-5"
      : "";

  return (
    <input
      className={`font-semibold text-${color}  rounded-xl hover:scale-110 cursor-pointer bg-white focus:outline-none text-gray-700 placeholder-white-500 border-white-500 border-2 focus:border-blue-500 ${sizeClass} ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
