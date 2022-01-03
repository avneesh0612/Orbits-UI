import React, { ReactNode } from "react";
import "../../../styles/slider.css";

export interface SliderProps {
  primary?: boolean;
  className?: string;
  min?: number;
  max?: number;
  range?: number;
}

const Slider = ({ primary = true, className, min, max, range }: SliderProps) => {
  return (
    <input
      type="range"
      aria-label="input"
      className={`range ${className}`}
      min={min}
      max={max}
      step={range}
    />
  );
};

export default Slider;
