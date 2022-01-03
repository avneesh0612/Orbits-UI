import React, { ReactNode } from "react";

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large";
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
const Input = ({ placeholder, size = "medium", onChange, value, className }: InputProps) => {
  const sizeClass =
    size === "small"
      ? "text-sm py-6 px-3"
      : size === "medium"
      ? "text-md py-8 px-4"
      : size === "large"
      ? "text-lg py-10 px-5"
      : "";

  return (
    <input
      aria-label="input"
      className={`font-semibold w-60 rounded-xl cursor-text focus:outline-none border-white-500 border-2 bg-blue-300 focus:border-blue-500 ${sizeClass} ${className}`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
