import getPostMetadata from "@/app/utils/getPostMetadata";
import React from "react";
import PostCard from "../PostCard/PostCard";
import styles from "./RecentPostList.module.css";

type RecentPostListProps = {
  category?: string | null;
  searchQuery?: string | null;
};

function RecentPostList({ category, searchQuery }: RecentPostListProps) {
  const posts = getPostMetadata(category, searchQuery);
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        {<PostCard post={posts[0]} slug={posts[0].slug} variant="big" />}
      </div>
      <div className={styles.right}>
        {<PostCard post={posts[1]} slug={posts[1].slug} variant="mini" />}
        {<PostCard post={posts[2]} slug={posts[2].slug} variant="mini" />}
      </div>
    </div>
  );
}

export default RecentPostList;
