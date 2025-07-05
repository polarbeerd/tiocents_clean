import { getAllPosts } from "@/lib/getAllPosts";
import ScrollToTop from "@/components/tiocents/ScrollToTop";
import { Suspense } from "react";
import BlogFeed from "@/components/tiocents/BlogFeed";
export const metadata = {
  title: "Posts | TioCents",
  description: "Explore all writings and ideas on TioCents.",
};

export default async function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto p-4 pb-32">
      <Suspense
        fallback={
          <div className="text-center py-10 text-gray-500">Loading...</div>
        }
      >
        <BlogFeed posts={posts} />
      </Suspense>
      <ScrollToTop />
    </div>
  );
}
