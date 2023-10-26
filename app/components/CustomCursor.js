'use client';

import React, { useState, useEffect } from "react";

// This functional component represents a custom cursor with a flare effect.
function CustomCursor() {
  // State to track the current cursor position (x, y coordinates).
  const [position, setPosition] = useState({ x: -100, y: -100 }); // 0

  // State to track whether the cursor is over a clickable element.
  const [isPointer, setIsPointer] = useState(false);

  // Event handler for the mousemove event.
  const handleMouseMove = (e) => {
    // Update the cursor position based on the mouse coordinates.
    setPosition({ x: e.clientX, y: e.clientY });

    // Get the target element that the cursor is currently over.
    const target = e.target;

    // Check if the cursor is over a clickable element by inspecting the cursor style.
    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer" ||
      target.tagName === "A"
    );
  };

  // Set up an effect to add and remove the mousemove event listener.
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // The empty dependency array ensures that this effect runs only once on mount.

  // Calculate the size of the flare based on whether the cursor is over a clickable element.
  const cursorSize = isPointer ? 50 : 30;

  // Adjust the cursor position to create a visual effect when over a clickable element.
  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  // Render the custom cursor element with dynamic styles based on cursor state.
  return (
    <div
      className={`cursor ${isPointer ? "pointer" : ""}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
      }}
    ></div>
  );
}


export default CustomCursor;