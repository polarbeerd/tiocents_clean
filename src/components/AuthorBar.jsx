"use client";

import Image from "next/image";

// Your local authors data (import or define)
const authors = [
  {
    name: "Deniz Misirli",
    avatar: "/avatars/deniz_avatar.png",
  },
  {
    name: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
];

export default function AuthorBar({ authorName, date, readingTime }) {
  const author = authors.find((a) => a.name === authorName);

  return (
    <div className="flex items-center justify-center gap-4 text-gray-400 text-sm mb-10">
      {author && (
        <Image
          src={author.avatar}
          alt={author.name}
          width={32}
          height={32}
          className="rounded-full"
        />
      )}
      <span className="font-medium">{authorName || "Anonymous"}</span>
      <span>•</span>
      <span>
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </span>
      <span>•</span>
      <span>{readingTime} min read</span>
      <span>•</span>
      <span className="flex items-center gap-1">
        💬 <span className="hidden sm:inline">Comments</span>
      </span>
    </div>
  );
}
