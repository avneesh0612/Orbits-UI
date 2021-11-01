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
}: ButtonProps) => {
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
    <button
      type="button"
      className={`font-semibold  rounded-full hover:scale-110 cursor-pointer leading-1 ${modeClass} ${sizeClass} ${className}`}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
