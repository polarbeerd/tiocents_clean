"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CategoryTabs from "./CategoryTabs";
import PostList from "./PostList";
import Link from "next/link";

export default function BlogFeed({ posts = [] }) {
  const [activeTab, setActiveTab] = useState("All");
  const searchParams = useSearchParams();
  const selectedAuthor = searchParams.get("author");

  const categories = [
    "All",
    "Thoughts",
    "Economy",
    "Sports",
    "Music",
    "Travel",
    "Gaming",
    "Health",
  ];

  useEffect(() => {
    if (selectedAuthor) {
      setActiveTab("All");
    }
  }, [selectedAuthor]);

  const filteredPosts = posts.filter((post) => {
    const matchAuthor = selectedAuthor
      ? post.authorName === selectedAuthor
      : true;
    const matchCategory =
      activeTab === "All" ? true : post.categories?.includes(activeTab);
    return matchAuthor && matchCategory;
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      {!selectedAuthor ? (
        <CategoryTabs
          categories={categories}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ) : (
        <div className="text-center mb-6">
          <Link
            href="/tiocents"
            className="inline-block bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
          >
            Clear Author Filter
          </Link>
        </div>
      )}

      <PostList posts={filteredPosts} />
    </div>
  );
}
