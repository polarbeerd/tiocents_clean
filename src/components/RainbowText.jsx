"use client";

import { useEffect, useRef } from "react";
import { animate, createScope, stagger } from "animejs";

export default function RainbowText({ text }) {
  const rootRef = useRef(null);
  const scopeRef = useRef(null);

  useEffect(() => {
    scopeRef.current = createScope({ root: rootRef }).add(() => {
      const letters = rootRef.current?.querySelectorAll("span");
      if (!letters || letters.length === 0) return;

      animate(letters, {
        keyframes: [
          { color: "#FF0000" },
          { color: "#FF7F00" },
          { color: "#FFFF00" },
          { color: "#00FF00" },
          { color: "#0000FF" },
          { color: "#4B0082" },
          { color: "#8F00FF" },
        ],
        easing: "linear",
        duration: 3000,
        delay: stagger(100),
        direction: "alternate",
        loop: true,
      });
    });

    return () => scopeRef.current?.revert(); // cleanup
  }, []);

  return (
    <span ref={rootRef} style={{ display: "inline-block", fontWeight: "bold" }}>
      {text.split("").map((char, i) => (
        <span key={i} style={{ display: "inline-block" }}>
          {char}
        </span>
      ))}
    </span>
  );
}
