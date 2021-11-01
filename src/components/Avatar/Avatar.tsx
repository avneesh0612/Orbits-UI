import React, { ReactNode } from "react";
import "../../../styles/global.css";

export interface AvatarProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the Avatar be?
   */
  size?: "small" | "medium" | "large";

  /**
   * Optional click handler
   */
  onClick?: (event: any) => void;

  avatarColor?: string;

  src?: string;
  alt?: string;
}

/**
 * Primary UI component for user interaction
 */
const Avatar = ({
  backgroundColor,
  size = "medium",
  onClick,
  avatarColor = "#F1F6FC",
  src,
  alt,
}: AvatarProps) => {
  const sizeClass =
    size === "small" ? "w-10 h-10" : size === "medium" ? "w-12 h-12" : size === "large" ? "w-16 h-16" : "";

  const avatarSizeClass =
    size === "small" ? "w-7 h-5" : size === "medium" ? "w-8 h-6" : size === "large" ? "w-10 h-8" : "";

  return (
    <div
      className={`flex items-center justify-center text-white-200  bg-blue-300  rounded-full hover:scale-110 cursor-pointer ${sizeClass}`}
      style={backgroundColor ? { backgroundColor } : {}}
      onClick={onClick}
    >
      {src ? (
        <img className="w-full h-full rounded-full" src={src} alt={alt} />
      ) : (
        <svg className={avatarSizeClass} viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 17.0788C16.5755 17.0788 21.2807 17.9848 21.2807 21.4802C21.2807 24.977 16.5447 25.8509 11 25.8509C5.42577 25.8509 0.719299 24.9449 0.719299 21.4494C0.719299 17.9526 5.45534 17.0788 11 17.0788ZM11 0.149109C14.777 0.149109 17.8032 3.17424 17.8032 6.94858C17.8032 10.7229 14.777 13.7493 11 13.7493C7.22428 13.7493 4.19677 10.7229 4.19677 6.94858C4.19677 3.17424 7.22428 0.149109 11 0.149109Z"
            fill={avatarColor}
          />
        </svg>
      )}
    </div>
  );
};

export default Avatar;
