/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const POSTS_DIR = path.join(__dirname, "../app/data/posts");
const OUTPUT_JSON = path.join(__dirname, "../app/data/posts.json");

const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));

const posts = files.map((file) => {
  const content = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data } = matter(content);

  return {
    slug: file.replace(".md", ""),
    title: data.title || "",
    excerpt: data.excerpt || "",
    cover_image: data.cover_image || "/next.svg",
    category: data.category || "uncategorized",
    date: data.date || "1970-01-01",
    minutes_to_read: data.minutes_to_read || "1",
    category_cover_image: data.category_cover_image || "/next.svg",
  };
});

posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

fs.writeFileSync(OUTPUT_JSON, JSON.stringify(posts, null, 2));
console.log(`Сгенерировано ${posts.length} постов в posts.json`);
