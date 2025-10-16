import fs from "fs";
import { PostMetadata } from "@/types/post";
import { POSTS_JSON } from "../constants/paths";

const posts: PostMetadata[] = JSON.parse(fs.readFileSync(POSTS_JSON, "utf8"));

export default function getPostMetadata(
  category?: string | null,
  searchQuery?: string | null
): PostMetadata[] {
  let filtered = [...posts];

  if (category) {
    filtered = filtered.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (searchQuery) {
    filtered = filtered.filter((p) =>
      (p.title ?? "").toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return filtered;
}
