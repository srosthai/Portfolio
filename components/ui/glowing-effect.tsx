"use client";

import React, { useRef, useState, useEffect } from "react";

interface GlowingEffectProps {
  blur?: number;
  borderWidth?: number;
  spread?: number;
  glow?: boolean;
  disabled?: boolean;
  proximity?: number;
  inactiveZone?: number;
}

export const GlowingEffect: React.FC<GlowingEffectProps> = ({
  blur = 10,
  borderWidth = 1,
  spread = 60,
  glow = true,
  disabled = false,
  proximity = 60,
  inactiveZone = 0.05,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check if mouse is within the element's bounds
      const isInside = 
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      // Check if mouse is within active zone
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distanceFromCenter = Math.sqrt(
        Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
      );
      const maxDistance = Math.sqrt(
        Math.pow(rect.width, 2) + Math.pow(rect.height, 2)
      ) / 2;
      
      const isInActiveZone = distanceFromCenter <= maxDistance * (1 - inactiveZone);
      
      // If mouse is within proximity but outside the element, still show the effect
      const proximityCheck = 
        e.clientX >= rect.left - proximity &&
        e.clientX <= rect.right + proximity &&
        e.clientY >= rect.top - proximity &&
        e.clientY <= rect.bottom + proximity;

      setIsHovering(isInside || proximityCheck);
      setPosition({ x, y });
      
      if (isInside && isInActiveZone) {
        // Full opacity when inside active zone
        setOpacity(1);
      } else if (proximityCheck) {
        // Reduced opacity when in proximity but outside
        const distance = Math.min(
          Math.abs(e.clientX - rect.left),
          Math.abs(e.clientX - rect.right),
          Math.abs(e.clientY - rect.top),
          Math.abs(e.clientY - rect.bottom)
        );
        setOpacity(1 - (distance / proximity));
      } else {
        // No effect when outside proximity
        setOpacity(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [disabled, proximity, inactiveZone]);

  if (disabled) return null;

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 z-10 pointer-events-none"
    >
      {isHovering && glow && (
        <div
          className="absolute rounded-[inherit] pointer-events-none"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `radial-gradient(${spread}px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent)`,
            opacity: opacity,
            backdropFilter: `blur(${blur}px)`,
          }}
        />
      )}
      {isHovering && borderWidth > 0 && (
        <div
          className="absolute rounded-[inherit] pointer-events-none"
          style={{
            top: -borderWidth,
            left: -borderWidth,
            right: -borderWidth,
            bottom: -borderWidth,
            borderWidth: `${borderWidth}px`,
            borderStyle: "solid",
            borderColor: "rgba(255,255,255,0.15)",
            opacity: opacity,
          }}
        />
      )}
    </div>
  );
}; 