import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import MDXComponents from "@/components/MDXComponents";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/getAllPosts"; // moved helper here
import Comments from "@/components/tiocents/Comments";
import ScrollToTop from "@/components/tiocents/ScrollToTop";

// Static params
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/app/tiocents/posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames
    .filter((filename) => filename.endsWith(".mdx")) // only .mdx posts
    .map((filename) => ({
      slug: filename.replace(/\.mdx$/, ""),
    }));
}

// Main page
export default async function PostPage({ params }) {
  const { slug } = params;
  const postsDirectory = path.join(process.cwd(), "src/app/tiocents/posts");
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch (error) {
    console.error("❌ Failed to read file:", error);
    return notFound();
  }

  const { content: source, data } = matter(fileContents);

  const { content } = await compileMDX({
    source,
    components: MDXComponents,
  });

  const readingTime = Math.ceil(source.trim().split(/\s+/).length / 200);

  // Related posts
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((post) => post.slug !== slug)
    .sort(() => 0.5 - Math.random()) // shuffle
    .slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 pb-24">
      {/* Cover Image */}
      {data.coverImage && (
        <div className="relative w-full h-[350px] sm:h-[450px] rounded-2xl overflow-hidden mb-12">
          <Image
            src={data.coverImage}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      {/* Title & Info */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6">
          {data.title}
        </h1>
        <div className="text-gray-400 text-sm">
          {data.authorName ? data.authorName : "Anonymous"} •{" "}
          {new Date(data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          • {readingTime} min read
        </div>
      </div>
      {/* Content */}
      <article className="prose prose-invert prose-lg leading-relaxed mx-auto mb-20 max-w-full overflow-x-auto break-words">
        {content}
      </article>
      {/* Comments */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Join the Discussion
        </h2>
        <Comments />
      </section>
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/tiocents/${post.slug}`}
                className="group block bg-[#1C1C1F] rounded-2xl overflow-hidden shadow hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                {post.coverImage && (
                  <div className="relative w-full h-48">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-gray-300 text-sm mt-2">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
      <ScrollToTop />
    </div>
  );
}
