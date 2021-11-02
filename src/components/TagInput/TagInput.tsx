import React, { ReactNode, useState } from "react";
import "../../../styles/global.css";

export interface TagInputProps {
  placeholder?: string;
  color?: string;
  primary?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large";
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
const TagInput = ({
  primary = true,
  placeholder,
  color = "bg-blue-500",
  size = "medium",
  onChange,
  value,
  className,
}: TagInputProps) => {
  const sizeClass =
    size === "small"
      ? "text-sm py-2 px-3"
      : size === "medium"
      ? "text-md py-3 px-4"
      : size === "large"
      ? "text-lg py-4 px-5"
      : "";

  const [tags, setTags] = useState<any>([]);
  const removeTags = (indexToRemove: any) => {
    setTags([...tags.filter((_: any, index: any) => index !== indexToRemove)]);
  };

  const addTags = (event: any) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <div className="flex items-center w-full py-3 pl-2 text-white placeholder-gray-100 border-2 group focus-within:border-blue-500 border-white/30 focus:outline-none bg-[#171717] rounded-xl">
      <ul className="flex items-center justify-center space-x-2">
        {tags.map((tag: any, index: any) => (
          <li
            key={index}
            className="flex items-center space-x-2 justify-between h-8 px-2 min-w-min bg-gray-500 rounded-lg"
          >
            <span className="mt-1 text-lg text-white-100"># {tag}</span>
            <span
              className="rounded-full text-white-100 cursor-pointer p-2 flex items-center justify-center bg-white/10 w-6 h-6 text-center"
              onClick={() => removeTags(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Press enter to add tags"
        className={`font-semibold text-${color}  rounded-xl hover:scale-110 cursor-text bg-white focus:outline-none text-gray-700 placeholder-white-500 border-white-500  focus:border-none ${sizeClass} ${className}`}
      />
    </div>
  );
};

export default TagInput;
