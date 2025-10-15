import React from "react";
import styles from "./CategoryTag.module.css";
import Link from "next/link";
type Props = {
  name: string;
};

const CategoryTag = ({ name }: Props) => {
  return (
    <Link href={`/categories/${name.toLowerCase()}`} className={styles.link}>
      <div className={styles.tag}>
        <span className={styles.name}>{name}</span>
      </div>
    </Link>
  );
};

export default CategoryTag;
