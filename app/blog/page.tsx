import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-muted">Notes on engineering, testing, and building products.</p>

      <div className="mt-10 space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-border pb-8 last:border-none">
            <Link href={`/blog/${post.slug}`} className="text-xl font-semibold hover:text-accent">
              {post.title}
            </Link>
            <p className="mt-1 text-sm text-muted">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="mt-2 text-muted leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
