import getPostMetadata from "@/app/utils/getPostMetadata";
import React from "react";
import PostCard from "../PostCard/PostCard";
import { Notification } from "../Notification/Notification";
import styles from "./PostList.module.css";
import Pagintaion from "../Pagination/Pagintaion";
import getCurrentPagePosts from "@/app/utils/getCurrentPagePosts";

export type PostListProps = {
  category?: string | null;
  searchQuery?: string | null;
  postsOnPage: number;
  page?: number;
  isPaginationEnable?: boolean;
  animatedOnLoad?: boolean;
  animatedOnLoadDelay?: number;
};

const PostList = ({
  category = null,
  searchQuery = null,
  page = 1,
  postsOnPage,
  isPaginationEnable = false,
  animatedOnLoadDelay = 0,
  animatedOnLoad,
}: PostListProps) => {
  const posts = getPostMetadata(category, searchQuery);
  const filteredPosts = getCurrentPagePosts(posts, page, postsOnPage);
  return (
    <>
      {filteredPosts.length ? (
        <div className="">
          <ul
            className={styles.list}
            style={
              animatedOnLoadDelay
                ? { animationDelay: `${animatedOnLoadDelay}s` }
                : { animation: "none", opacity: 1, transform: "none" }
            }
          >
            {filteredPosts.map((post, index) => {
              return (
                <li
                  className={styles.listItem}
                  key={post.slug}
                  style={
                    animatedOnLoad
                      ? {
                          animationDelay: `${
                            animatedOnLoadDelay + index * 0.1
                          }s`,
                        }
                      : { animation: "none", opacity: 1, transform: "none" }
                  }
                >
                  <PostCard post={post} slug={post.slug} />
                </li>
              );
            })}
          </ul>
          {isPaginationEnable ? (
            <div className={styles.pagination}>
              <Pagintaion
                postsCount={posts.length}
                postsOnPage={postsOnPage}
                currentPageNumber={page}
              />
            </div>
          ) : null}
        </div>
      ) : (
        <Notification
          type="notification"
          textContent={`По запросу "${searchQuery}" ничего не найдено.`}
        />
      )}
    </>
  );
};

export default PostList;
