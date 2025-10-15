import React from "react";
import styles from "./LayoutWrapper.module.css";

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default LayoutWrapper;
