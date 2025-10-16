import React from "react";
import Markdown from "markdown-to-jsx";
import { GrayMatterFile } from "gray-matter";
import Image from "next/image";
import styles from "./Post.module.css";
import CategoryTag from "@/app/ui/CategoryTag/CategoryTag";
interface Props {
  post: GrayMatterFile<string>;
}

export const Post: React.FC<Props> = ({ post }) => {
  return (
    <article className={styles.article} role="article">
      <Image
        src={post.data.cover_image}
        width={1200}
        height={600}
        alt={post.data.title}
        className={styles.image}
      />
      <h1>{post.data.title}</h1>
      <div className={styles.tags}>
        <CategoryTag name={post.data.category} />
      </div>
      <Markdown>{post.content}</Markdown>
    </article>
  );
};
