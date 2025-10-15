import Title from "@/app/ui/Title/Title";
import React, { JSX } from "react";
import styles from "./Section.module.css";
import clsx from "clsx";

type SectionProps = {
  title?: string;
  children: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
  contentClassName?: string;
};

const Section = ({
  title,
  children,
  contentClassName,
  tag: Tag = "section",
}: SectionProps) => {
  return (
    <Tag className={styles.section}>
      {title && <Title title={title} spacing />}
      <div className={clsx(styles.content, contentClassName)}>{children}</div>
    </Tag>
  );
};

export default Section;
