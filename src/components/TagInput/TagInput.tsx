import React, { useState } from "react";

export interface TagInputProps {
  placeholder?: string;
  color?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
const TagInput = ({
  placeholder = "Press enter to add tags",
  color = "bg-blue-500",
  size = "medium",
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
  const removeTags = (indexToRemove: number) => {
    setTags([...tags.filter((index: number) => index !== indexToRemove)]);
  };

  const addTags = (event: any) => {
    if (event.target.value !== "") {
      setTags([...tags, String(event.target.value)]);
      event.target.value = "";
    }
  };

  return (
    <div className="text-white group border-white/30 focus:outline-none flex w-full items-center rounded-xl border-2 bg-[#171717] py-3 pl-2 placeholder-gray-100 focus-within:border-blue-500">
      <ul className="flex items-center justify-center space-x-2">
        {tags.map((tag: string, index: number) => (
          <li
            key={index}
            className="flex h-8 min-w-min items-center justify-between space-x-2 rounded-lg bg-white-200 px-2 text-black"
          >
            <span className="mt-1 text-lg"># {tag}</span>
            <span
              className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-full p-2 text-center"
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
        placeholder={placeholder}
        className={`font-semibold text-${color}  bg-white focus:outline-none cursor-text rounded-xl border-white-500 text-gray-700 placeholder-gray-500 hover:scale-110  focus:border-none ${sizeClass} ${className}`}
      />
    </div>
  );
};

export default TagInput;
