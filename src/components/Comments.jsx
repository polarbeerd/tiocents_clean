"use client";

import { useEffect, useRef } from "react";

export default function Comments() {
  const commentBox = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "polarbeerd/tiocents_clean"); // CHANGE THIS
    script.setAttribute("data-repo-id", "R_kgDOOg_DZg"); // CHANGE THIS
    script.setAttribute("data-category", "General"); // CHANGE THIS (your Giscus category name)
    script.setAttribute("data-category-id", "DIC_kwDOOg_DZs4Cpi5q"); // CHANGE THIS
    script.setAttribute("data-mapping", "pathname"); // we already decided this
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "0"); // enable reaction emojis
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-theme", "preferred_color_scheme"); // you can later toggle this
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");
    script.setAttribute("crossorigin", "anonymous");

    script.async = true;

    commentBox.current.appendChild(script);
  }, []);

  return <div className="mt-20" ref={commentBox} />;
}
