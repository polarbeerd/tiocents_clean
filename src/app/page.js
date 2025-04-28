"use client";

import Link from "next/link";
import { BookOpen, User, Hammer } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0e0e0e] text-gray-100 p-8 relative overflow-hidden">
      {/* Dreamy Quote at the Top */}
      <div className="absolute top-12 text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-4">
          &quot;Where Ideas Float Freely.&quot;{" "}
        </h1>
        <p className="text-gray-400 text-sm md:text-base">
          Enter the space where thoughts, creations, and dreams connect.
        </p>
      </div>

      {/* Project Cards */}
      <div className="mt-40 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full z-10">
        {/* TioCents Blog Card */}
        <Link
          href="/tiocents"
          className="group bg-[#1c1c1f] p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <BookOpen className="w-12 h-12 mb-4 text-gray-300 group-hover:text-white transition-colors" />
          <h2 className="text-3xl font-semibold group-hover:text-white transition-colors mb-2">
            TioCents
          </h2>
          <p className="text-gray-400 group-hover:text-gray-300 text-sm">
            Explore ideas, writings, and knowledge.
          </p>
        </Link>

        {/* Personal / About Me Card */}
        <Link
          href="/about"
          className="group bg-[#1c1c1f] p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <User className="w-12 h-12 mb-4 text-gray-300 group-hover:text-white transition-colors" />
          <h2 className="text-3xl font-semibold group-hover:text-white transition-colors mb-2">
            About Me (In Progress)
          </h2>
          <p className="text-gray-400 group-hover:text-gray-300 text-sm">
            Who I am and what I create.
          </p>
        </Link>

        {/* Side Projects Card */}
        <Link
          href="/projects"
          className="group bg-[#1c1c1f] p-8 rounded-3xl flex flex-col justify-center items-center text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <Hammer className="w-12 h-12 mb-4 text-gray-300 group-hover:text-white transition-colors" />
          <h2 className="text-3xl font-semibold group-hover:text-white transition-colors mb-2">
            Side Projects (In Progress)
          </h2>
          <p className="text-gray-400 group-hover:text-gray-300 text-sm">
            Code, tools, experiments and ideas.
          </p>
        </Link>
      </div>

      {/* Background Floating Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-80 h-80 bg-purple-800 opacity-10 rounded-full absolute top-1/4 left-1/3 blur-3xl animate-pulse"></div>
        <div className="w-80 h-80 bg-pink-700 opacity-10 rounded-full absolute bottom-1/4 right-1/3 blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}
