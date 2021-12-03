import React, { ReactNode } from "react";
import "../../../styles/global.css";
import Tilt from "react-tilt";

export interface CardProps {
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
const Card = ({ className }: CardProps) => {
  return (
    <Tilt options={{ max: 5, scale: 1 }}>
      <div aria-label="card" className={className}>
        {" "}
      </div>
    </Tilt>
  );
};

export default Card;
