import React, { useState } from "react";
import "../../../styles/global.css";

export interface CheckProps {
  size?: "small" | "medium" | "large";
  textSize?: "small" | "medium" | "large";
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
}

const Checkbox = ({
  size = "medium",
  label,
  className,
  textSize,
  color = "#1A6EFC",
  disabled = false,
  checked = false,
  defaultChecked = false,
}: CheckProps) => {
  const sizeClass: string =
    size == "small" ? "h-6 w-6" : size == "medium" ? "h-8 w-8" : size == "large" ? "h-10 w-10" : "";

  const textClass: string =
    textSize == "small" ? "text-sm" : textSize == "medium" ? "text-md" : textSize == "large" ? "text-lg" : "";

  const [check, setCheck] = useState<boolean>(defaultChecked);

  return (
    <label className={`${textClass} ${disabled ? "text-gray-200" : "text-black"}`}>
      <input
        type="checkbox"
        onChange={() => checked == false && setCheck(!check)}
        disabled={disabled}
        checked={checked}
        className="hidden"
        defaultChecked={defaultChecked}
      />
      <svg
        className={`inline-block border-2 ${className} ${sizeClass} mr-3 ${
          disabled == false ? "cursor-pointer" : ""
        } mb-1 rounded transition-colors ease-out`}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
        style={
          check || checked
            ? { background: color, borderColor: color }
            : { background: "transparent", borderColor: "lightgray" }
        }
      >
        <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={check || checked ? "#fff" : "none"} />
      </svg>
      {label}
    </label>
  );
};

export default Checkbox;
