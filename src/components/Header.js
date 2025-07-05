"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  let projectTitle = "";
  if (pathname.startsWith("/tiocents")) projectTitle = "TioCents";
  if (pathname.startsWith("/about")) projectTitle = "About Me";
  if (pathname.startsWith("/projects")) projectTitle = "Side Projects";

  const projectRoute = pathname.split("/")[1];

  return (
    <header className="sticky top-0 z-40 bg-[#0D0D0D] bg-opacity-90 backdrop-blur w-full py-4 px-6 border-b border-gray-700 h-[60px] overflow-hidden flex items-center justify-center">
      {/* HomePage Title */}
      <motion.div
        initial={false}
        animate={{
          x: isHome ? "0px" : "-120px",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute flex items-center justify-center"
      >
        <Link
          href="/"
          className="text-xl font-bold hover:opacity-80 transition-opacity"
        >
          HomePage
        </Link>
      </motion.div>

      {/* Project Title */}
      <AnimatePresence mode="wait">
        {!isHome && projectTitle && (
          <motion.div
            key={projectRoute}
            initial={{ x: "0px", opacity: 0 }}
            animate={{ x: "120px", opacity: 1 }}
            exit={{ x: "0px", opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute flex items-center justify-center"
          >
            <Link
              href={`/${projectRoute}`}
              className="text-lg font-semibold text-gray-300 hover:text-white transition-colors"
            >
              {projectTitle}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
