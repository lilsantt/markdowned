import Image from "next/image";
import React from "react";
import styles from "./SocialsItem.module.css";
type SocialsItemProps = {
  link: string;
  imgSrc: string;
  alt: string;
  mailTo?: string;
};

const SocialsItem = ({ link, imgSrc, alt }: SocialsItemProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.item}
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={20}
        height={20}
        className={styles.icon}
      />
    </a>
  );
};

export default SocialsItem;
