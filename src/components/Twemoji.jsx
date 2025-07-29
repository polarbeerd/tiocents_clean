"use client";

import { useEffect, useRef } from "react";
import twemoji from "twemoji";

export default function Twemoji({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const parsed = twemoji.parse(children, {
        folder: "svg", // ✅ use SVG instead of PNG
        ext: ".svg",
        base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/", // ✅ working SVG base
      });
      ref.current.innerHTML = parsed;
    }
  }, [children]);

  return <span ref={ref} className={className} />;
}
