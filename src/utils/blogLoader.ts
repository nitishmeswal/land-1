import fm from 'front-matter';

// Webpack Vite import.meta.glob for markdown files
type BlogMeta = {
  title: string;
  date: string;
  summary: string;
  image: string;
  slug: string;
};

export type Blog = BlogMeta & { content: string };

// Dynamic import for all markdown files in /src/blogs
const blogFiles = import.meta.glob('../blogs/*.md', { as: 'raw', eager: true });

function parseBlog(raw: string): Blog {
  const { attributes, body } = fm<BlogMeta>(raw);
  return {
    title: attributes.title,
    date: attributes.date,
    summary: attributes.summary,
    image: attributes.image,
    slug: attributes.slug,
    content: body,
  };
}

export function getAllBlogs(): Blog[] {
  return Object.values(blogFiles)
    .map(parseBlog)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): Blog | undefined {
  return getAllBlogs().find((b) => b.slug === slug);
}
