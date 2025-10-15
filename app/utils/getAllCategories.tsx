import { Category } from "@/types/post";
import getPostMetadata from "./getPostMetadata";

export function getAllCategories(): Category[] {
  const posts = getPostMetadata();
  const categories: Category[] = [];
  posts.forEach((p) => {
    const existingCategory = categories.find(
      (cat) => cat.title === p.category.toLowerCase()
    );
    if (existingCategory) existingCategory.posts_count += 1;
    else {
      categories.push({
        title: p.category.toLowerCase(),
        visualTitle: p.category,
        posts_count: 1,
        cover_image: p.category_cover_image,
      });
    }
  });
  return categories;
}
