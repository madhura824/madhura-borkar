// AnimatedButton.tsx
"use client"
import { Button } from "@nextui-org/react";
import React from "react";

const AnimatedButton: React.FC<{ text: string; onClick?: () => void }> = ({
  text,
  onClick,
}) => {
  return (
    <button className="relative group p-[3px] rounded-xl" onClick={onClick}>
      {/* Animated border */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 animate-borderMove"></span>

      {/* Inner content (actual button) */}
      <span className="relative block bg-gray-900 text-white rounded-xl px-6 py-3 font-semibold transition-all duration-300 group-hover:bg-gray-800">
        {text}
      </span>
    </button>
  );
};

export default AnimatedButton;
