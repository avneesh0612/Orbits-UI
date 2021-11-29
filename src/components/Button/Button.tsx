import React, { ReactNode } from "react";
import "../../../styles/global.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  children: ReactNode;
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  className?: string;
  autosave?: "false" | "true";
  autoFocus?: boolean;
  disabled?: boolean;
  title?: string;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = true,
  backgroundColor,
  size = "medium",
  onClick,
  children,
  className,
  autosave = "false",
  autoFocus = false,
  disabled = false,
  title = "button",
  ...otherProps
}: ButtonProps) => {
  const modeClass = primary
    ? "text-white-100  bg-blue-500"
    : "text-blue-500 bg-white border-2 border-blue-500";

  const sizeClass =
    size === "small"
      ? "text-sm py-2 px-4"
      : size === "medium"
      ? "text-md py-3 px-6"
      : size === "large"
      ? "text-lg py-4 px-8"
      : "";

  return (
    <button
      aria-label={title}
      role="button"
      type="button"
      autoFocus={autoFocus}
      autoSave={autosave}
      disabled={disabled}
      {...otherProps}
      name={title}
      className={`focus:ring-4  font-semibold  duration-150 ring-blue-300  rounded-full hover:scale-110 cursor-pointer leading-1 ${modeClass} ${sizeClass} ${className}`}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
