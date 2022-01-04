import React from "react";
import "../../../styles/slider.css";

export interface SliderProps {
  className?: string;
  min?: number;
  max?: number;
  range?: number;
}

const Slider = ({ className, min, max, range }: SliderProps) => {
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
