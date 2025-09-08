import { useParams, Link } from "react-router-dom";
import { getBlogBySlug } from "@/utils/blogLoader";
import { useEffect } from "react";
import { SectionContainer } from "@/components/ui/Container";
import { marked } from "marked";
import PageLayout from "@/components/layout/PageLayout";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <PageLayout title="Blog Detail" subtitle="Blog Detail">
        <main className=" pt-24 pb-16 flex items-center">
          <SectionContainer>
            <div className="max-w-lg mx-auto text-center">
              <div className="glass-card p-10 rounded-2xl shadow-card border border-white/20">
                <h1 className="text-4xl font-bold mb-6 hero-text-gradient">
                  Blog Not Found
                </h1>
                <p className="text-muted-foreground mb-8">
                  Sorry, this blog post does not exist.
                </p>
                <Link to="/" className="text-[#0361DA] underline">
                  Return to Home
                </Link>
              </div>
            </div>
          </SectionContainer>
        </main>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Blog Detail" subtitle="Blog Detail">
      <main className="min-h-screen pt-24 pb-16 ">
        <SectionContainer>
          <article className="max-w-3xl mx-auto  rounded-2xl shadow-card p-6 md:p-12 border border-gray-200 dark:border-blue-900/30">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-xl mb-8 shadow-md border border-gray-100 dark:border-blue-900/40"
            />
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2 text-gray-900 dark:text-white drop-shadow-sm">
                {blog.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                <span className="inline-flex items-center gap-1">
                  <svg
                    className="w-4 h-4 opacity-70"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10m-9 4h6m-7 8h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"
                    />
                  </svg>
                  {new Date(blog.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                {/* Add author or tags here if needed */}
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-200 italic mb-2">
                {blog.summary}
              </p>
            </header>
            <div className="prose prose-lg prose-blue dark:prose-invert max-w-none leading-relaxed">
              {/* eslint-disable-next-line react/no-danger */}
              <div
                dangerouslySetInnerHTML={{ __html: marked.parse(blog.content) }}
              />
            </div>
            <footer className="mt-10 flex justify-between items-center">
              <Link
                to="/"
                className="text-[#0361DA] underline font-medium hover:opacity-80 transition"
              >
                ← Back to Home
              </Link>
              {/* Add social sharing or related posts here if desired */}
            </footer>
          </article>
        </SectionContainer>
      </main>
    </PageLayout>
  );
}
