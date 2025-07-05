"use client";

import PostCard from "./PostCard";

export default function PostList({ posts }) {
  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-10">No posts found.</div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
