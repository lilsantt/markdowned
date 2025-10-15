import { SITE_NAME } from "@/app/constants/names";
import Link from "next/link";
import React from "react";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h2 className={styles.logo}>{SITE_NAME}</h2>
    </Link>
  );
};

export default Logo;
