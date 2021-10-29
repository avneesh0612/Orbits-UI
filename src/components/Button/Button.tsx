import React from "react";
import "../../../styles/global.css"

export interface ButtonProps  {
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
  label: string;
  /**
   * Optional click handler
   */
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = true,
  backgroundColor,
  size = "medium",
  onClick,
  label,
}: ButtonProps) => {
    const modeClass = primary
      ? "text-white bg-blue-400"
      : "text-gray-600 bg-transparent shadow-xl";
    

    const sizeClass = size === "small" ? "text-sm px-2 py-3" : size === "medium" ? "text-md px-3 py-4" : size === "large" ? "text-lg px-4 py-5" : ""
    
  return (
    <button
      type="button"
      className={`font-semibold rounded-md cursor-pointer leading-1 ${modeClass} ${sizeClass}` }
      style={backgroundColor ? { backgroundColor }: {}}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;