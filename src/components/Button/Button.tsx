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
  const modeClass = primary
    ? "text-white-100  bg-blue-500"
    : "text-blue-500 bg-white border-2 border-blue-500";

  const sizeClass =
    size === "small"
      ? "text-sm py-2 px-4"
      : size === "medium"
      ? "text-md py-2 px-6"
      : size === "large"
      ? "text-lg py-3 px-8"
      : "";

  return (
    <button
      type="button"
      className={`focus:ring-4 font-semibold  rounded-full hover:scale-110 cursor-pointer leading-1 ${modeClass} ${sizeClass} ${className}`}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
