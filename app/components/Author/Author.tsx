import Image from "next/image";
import React from "react";
import styles from "./Author.module.css";
type AuthorProps = {
  name: string;
  post: string;
  img: string;
};

const Author = ({ name, post, img }: AuthorProps) => {
  return (
    <div className={styles.author}>
      <Image src={img} alt={name} width={64} height={64} />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.post}>{post}</span>
      </div>
    </div>
  );
};

export default Author;
