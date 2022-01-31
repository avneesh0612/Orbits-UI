import React, { ReactNode } from "react";

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
  autoSave?: "false" | "true";
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
  autoSave = "false",
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
      autoSave={autoSave}
      disabled={disabled}
      {...otherProps}
      name={title}
      className={`leading-1  cursor-pointer  rounded-full font-semibold  ring-blue-300 duration-150 hover:scale-110 focus:ring-4 ${modeClass} ${sizeClass} ${className}`}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
