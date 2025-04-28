"use client";

import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }) {
  return (
    <Link
      href={`/tiocents/${post.slug}`}
      className="bg-[#1C1C1F] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:bg-[#27272a] transition-all duration-150"
    >
      {/* Cover Image */}
      <div className="relative w-full h-48">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover rounded-t-2xl"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>

        {/* Info Row */}
        <div className="flex items-center justify-between flex-wrap gap-2 text-gray-400 text-xs mb-2">
          {/* Left Side */}
          <div className="flex items-center gap-2 flex-wrap">
            <Image
              src={post.authorImage}
              alt={post.authorName}
              width={24}
              height={24}
              className="rounded-full object-cover"
            />
            <span className="font-medium">{post.authorName}</span>
            <span>•</span>
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span>•</span>
            <span>{post.readingTime || 3} min read</span>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 flex-wrap">
            {(Array.isArray(post.categories)
              ? post.categories
              : [post.categories]
            )?.map((category) => (
              <span
                key={category}
                className="bg-gray-700 text-gray-200 px-2 py-0.5 rounded-full text-[11px]"
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm">{post.description}</p>
      </div>
    </Link>
  );
}
