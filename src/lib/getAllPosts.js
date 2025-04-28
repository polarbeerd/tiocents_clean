import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), "src/app/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".mdx")) // 💥 Only .mdx files
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        coverImage: data.coverImage || "",
        authorName: data.authorName || "",
        authorImage: data.authorImage || "",
        category: data.category || "",
      };
    });

  return posts;
}
