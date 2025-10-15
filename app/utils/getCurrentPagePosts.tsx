import { PostMetadata } from "@/types/post";

export default function getCurrentPagePosts(
  posts: PostMetadata[],
  currentPage: number,
  postsOnPage: number
): PostMetadata[] {
  return posts.slice(
    (currentPage - 1) * postsOnPage,
    currentPage * postsOnPage
  );
}
