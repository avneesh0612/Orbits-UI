import React from "react";

export interface InputProps {
  placeholder?: string;
  value?: string;
  colorScheme?: "primary" | "secondary" | "error";
  type?: React.HTMLInputTypeAttribute;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large";
  className?: string;
}

const Input = ({
  placeholder,
  onChange,
  size = "small",
  colorScheme = "primary",
  type = "text",
  isDisabled = false,
  isReadOnly = false,
}: InputProps) => {
  const sizeClass =
    size === "small"
      ? "py-2 px-2"
      : size === "medium"
      ? "text-xl p-3"
      : size === "large"
      ? "text-2xl p-4"
      : "";

  const colorClass =
    colorScheme === "primary"
      ? "focus:border-blue-400"
      : colorScheme === "secondary"
      ? "focus:border-purple-400"
      : colorScheme === "error"
      ? "focus:border-red-400"
      : "";

  return (
    <input
      aria-label="input"
      className={`font-medium text-gray-300 rounded-md outline-none w-full border-2 hover:shadow-inner-sm ${colorClass} ${sizeClass}`}
      type={type}
      disabled={isDisabled}
      readOnly={isReadOnly}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
