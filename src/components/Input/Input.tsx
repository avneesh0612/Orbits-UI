import React, { ReactNode } from "react";

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large";
  className?: string;
}

const Input = ({ placeholder, onChange, size }: InputProps) => {
  const sizeClass =
    size === "small"
      ? "py-2 px-2"
      : size === "medium"
      ? "text-xl p-3"
      : size === "large"
      ? "text-2xl p-4"
      : "";

  return (
    <input
      aria-label="input"
      className={`font-medium text-gray-300 rounded-md bg-white-100 outline-none w-full border-gray-100 border-2 focus:border-blue-400 hover:shadow-inner-sm ${sizeClass}`}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
