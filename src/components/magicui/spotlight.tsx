"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const Spotlight = ({ className }: { className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn("pointer-events-none absolute inset-0 z-30 transition-opacity duration-500", className)}
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(197, 164, 126, 0.15), transparent 80%)`,
        opacity: opacity,
      }}
    />
  );
};