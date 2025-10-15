import React, { JSX } from "react";
import styles from "./Title.module.css";
import clsx from "clsx";
type TitleProps = {
  title: string;
  tag?: keyof JSX.IntrinsicElements;
  spacing: boolean;
};

const Title = ({ title, spacing, tag: Tag = "h2" }: TitleProps) => {
  return (
    <Tag className={clsx(styles.title, spacing && styles.mb)}>{title}</Tag>
  );
};

export default Title;
