export interface PostMetadata {
  title: string | null;
  excerpt: string | null;
  cover_image: string;
  slug: string;
  category: string;
  date: string;
  category_cover_image: string;
  minutes_to_read: string;
}

export interface Category {
  title: string;
  visualTitle: string;
  cover_image: string;
  posts_count: number;
}
