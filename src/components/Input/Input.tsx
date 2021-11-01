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
  color,
  size = "medium",
  onChange,
  value,
  className,
}: InputProps) => {
  const modeClass = primary ? "text-white-200  bg-blue-500" : "text-blue-800 bg-blue-100 shadow-lg";

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
      className={`font-semibold  rounded-full hover:scale-110 cursor-pointer leading-1 ${modeClass} ${sizeClass} ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
