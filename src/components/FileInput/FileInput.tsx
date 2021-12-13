import React, { ReactNode } from "react";
import "../../../styles/global.css";

export interface FileInputProps {
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
const FileInput = ({ className }: FileInputProps) => {
  return (
    <input
      type="file"
      className={`text-sm text-gray-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:bg-violet-50 file:font-medium
        file:text-violet-700 hover:file:bg-violet-100 
        file:cursor-pointer  ${className}
      `}
    />
  );
};

export default FileInput;
