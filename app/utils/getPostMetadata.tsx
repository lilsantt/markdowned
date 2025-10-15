import { PostMetadata } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";
import { POSTS_DIRECTORY } from "../constants/paths";

function sortPostsByDate(posts: PostMetadata[]): PostMetadata[] {
  return posts.sort((a, b) => {
    const dateA = new Date(a.date.split(".").reverse().join("-"));
    const dateB = new Date(b.date.split(".").reverse().join("-"));

    return dateB.getTime() - dateA.getTime();
  });
}

export default function getPostMetadata(
  category: string | null = null,
  searchQuery: string | null = null
): PostMetadata[] {
  const folder = POSTS_DIRECTORY + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename: string) => {
    const fileContents = fs.readFileSync(
      `${POSTS_DIRECTORY}/${filename}`,
      "utf8"
    );
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      excerpt: matterResult.data.excerpt,
      cover_image: matterResult.data.cover_image,
      category: matterResult.data.category,
      date: matterResult.data.date,
      minutes_to_read: matterResult.data.minutes_to_read,
      category_cover_image: matterResult.data.category_cover_image,
      slug: filename.replace(".md", ""),
    };
  });
  let filteredPosts = [...posts];
  console.log("FILTERS", category, searchQuery);
  if (category)
    filteredPosts = filteredPosts.filter(
      (val) => val.category.toLowerCase() === category
    );
  if (searchQuery)
    filteredPosts = filteredPosts.filter((val) =>
      val.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return sortPostsByDate(filteredPosts);
}
