"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function CollapsibleCategory({
  title,
  children,
  variant = "purple",
  size = "base", // base | sub
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const variantClasses = {
    purple: {
      border: "border-purple-700",
      text: "text-purple-400 hover:text-purple-300",
    },
    green: {
      border: "border-green-700",
      text: "text-green-400 hover:text-green-300",
    },
    blue: {
      border: "border-blue-700",
      text: "text-blue-400 hover:text-blue-300",
    },
    yellow: {
      border: "border-yellow-700",
      text: "text-yellow-400 hover:text-yellow-300",
    },
    red: {
      border: "border-red-700",
      text: "text-red-400 hover:text-red-300",
    },
    white: {
      border: "border-white-700",
      text: "text-white-400 hover:text-white-300",
    },
  };

  const sizeClasses = {
    base: {
      padding: "p-6",
      titleText: "text-xl",
      spacing: "mb-6",
      rounded: "rounded-2xl",
    },
    sub: {
      padding: "p-4",
      titleText: "text-lg",
      spacing: "mb-4",
      rounded: "rounded-xl",
    },
  };

  const styles = variantClasses[variant] || variantClasses.purple;
  const sizeStyle = sizeClasses[size] || sizeClasses.base;

  return (
    <motion.div
      ref={ref}
      className={`bg-[#1c1c1f] border ${styles.border} ${sizeStyle.rounded} ${sizeStyle.padding} ${sizeStyle.spacing} shadow-md transition-all`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full flex items-center justify-between text-left font-semibold ${sizeStyle.titleText} ${styles.text}`}
      >
        {title}
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          size={size === "sub" ? 18 : 22}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-4 text-gray-300 text-base space-y-4 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
