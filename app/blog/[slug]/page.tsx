import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllPosts, getPostSource } from "@/lib/mdx";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta } = getPostSource(slug);
    return { title: meta.title, description: meta.excerpt };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let source: ReturnType<typeof getPostSource>;
  try {
    source = getPostSource(slug);
  } catch {
    notFound();
  }

  const { meta, content } = source;
  const { content: rendered } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
      <p className="mt-2 text-sm text-muted">
        {new Date(meta.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <div className="prose prose-slate dark:prose-invert mt-8 max-w-none">{rendered}</div>
    </article>
  );
}
