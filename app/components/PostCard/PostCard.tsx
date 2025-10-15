import { PostMetadata } from "@/types/post";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./PostCard.module.css";
import Date from "@/app/ui/Date/Date";
import CategoryTag from "@/app/ui/CategoryTag/CategoryTag";
import clsx from "clsx";

interface Props {
  post: PostMetadata;
  slug: string;
  variant?: "default" | "big" | "mini";
}

const PostCard: React.FC<Props> = ({ post, slug, variant = "default" }) => {
  return (
    <div
      className={clsx(
        styles.post,
        variant === "big" && styles.big,
        variant === "mini" && styles.mini
      )}
    >
      <Link href={`/posts/${slug}`} className={styles.link}>
        <Image
          className={styles.image}
          src={post.cover_image ? post.cover_image : "/next.svg"}
          width={384}
          height={240}
          alt={post.title ? post.title : "Фото"}
        />
      </Link>
      <div className={styles.content}>
        <Date minutes_to_read={post.minutes_to_read} date={post.date} />
        <Link href={`/posts/${slug}`}>
          <h2 className={styles.title}>
            {variant === "mini" ? post.title?.slice(0, 20) + "..." : post.title}
            <ArrowUpRight />
          </h2>
        </Link>
        <p className={styles.text}>
          {variant === "mini"
            ? post.excerpt?.slice(0, 80) + "..."
            : post.excerpt}
        </p>
        <CategoryTag name={post.category} />
      </div>
    </div>
  );
};

export default PostCard;
