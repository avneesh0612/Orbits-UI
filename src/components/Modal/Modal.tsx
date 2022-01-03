import React, { ReactNode } from "react";

export interface ModalProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the Modal be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Modal contents
   */
  children: ReactNode;
  /**
   * Optional click handler
   */
  onClick?: (event: any) => void;
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
const Modal = ({
  primary = true,
  backgroundColor,
  size = "medium",
  onClick,
  children,
  className,
}: ModalProps) => {
  const modeClass = primary
    ? "text-white-200 bg-purple-500 shadow-lg"
    : "text-blue-800 bg-blue-100 shadow-lg";

  const sizeClass =
    size === "small"
      ? "text-sm py-2 px-3"
      : size === "medium"
      ? "text-md py-3 px-4"
      : size === "large"
      ? "text-lg py-4 px-5"
      : "";

  return (
    <div
      className={`font-semibold  rounded-full hover:scale-110 cursor-pointer leading-1 ${modeClass} ${sizeClass} ${className}`}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Modal;
