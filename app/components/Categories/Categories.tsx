import { getAllCategories } from "@/app/utils/getAllCategories";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Categories.module.css";

interface CategoriesProps {
  activeCat?: string;
  animatedOnLoad?: boolean;
}

export default async function Categories({
  activeCat,
  animatedOnLoad = false,
}: CategoriesProps) {
  const categories = getAllCategories();
  return (
    <ul className={styles.list}>
      {categories.map((cat, index) => {
        return (
          <li
            key={cat.title}
            className={
              activeCat === cat.title
                ? `${styles.item} ${styles.itemActive}`
                : styles.item
            }
            style={
              animatedOnLoad
                ? { animationDelay: `${index * 100}ms` }
                : { animation: "none", opacity: 1, transform: "none" }
            }
          >
            <Link
              href={`/categories/${cat.title}/page/1`}
              className={styles.link}
            >
              <Image
                src={cat.cover_image}
                alt={cat.title}
                width={40}
                height={40}
                className={styles.icon}
              />
              <h3 className={styles.title}>{cat.visualTitle}</h3>
              <span className={styles.count}>{cat.posts_count}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
