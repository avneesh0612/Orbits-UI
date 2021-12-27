import React, { useState } from "react";
import "../../../styles/global.css";

export interface CheckProps {
  size?: "small" | "medium" | "large";
  textSize?: "small" | "medium" | "large";
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  color?: "primary" | "success" | "secondary" | "default";
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
}

const Checkbox = ({
  size = "medium",
  label,
  onChange,
  className,
  textSize,
  color = "primary",
  disabled = false,
  checked = false,
  defaultChecked = false,
}: CheckProps) => {
  const sizeClass: string =
    size == "small"
      ? "h-[15px] w-[15px]"
      : size == "medium"
      ? "h-[20px] w-[20px]"
      : size == "large"
      ? "h-[25px] w-[25px]"
      : "";
  const textClass: string =
    textSize == "small" ? "text-sm" : textSize == "medium" ? "text-md" : textSize == "large" ? "text-lg" : "";
  const checkActive: string =
    color == "primary"
      ? "bg-blue-500 border-blue-500"
      : color == "success"
      ? "bg-green-500 border-green-500"
      : color == "secondary"
      ? "bg-pink-800 border-pink-800"
      : color == "default"
      ? "bg-gray-300 border-gray-300"
      : "";

  const [check, setcheck] = useState<boolean>(defaultChecked);

  return (
    <label className={`${textClass} ${disabled ? "text-gray-200" : "text-black"}`}>
      <input
        type="checkbox"
        onChange={() => checked == false && setcheck(!check)}
        disabled={disabled}
        checked={checked}
        className="appearance-none"
        defaultChecked={defaultChecked}
      />
      <svg
        className={`inline-block border-2 ${sizeClass} mr-[10px] ${
          disabled == false ? "cursor-pointer" : ""
        } rounded 
					${check || checked ? checkActive : "bg-white border-gray-200"}
					${checked && disabled ? "bg-gray-100 border-gray-100" : ""}
					mb-1 transition-colors ease-out`}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={check || checked ? "#fff" : "none"} />
      </svg>

      {label}
    </label>
  );
};

export default Checkbox;
