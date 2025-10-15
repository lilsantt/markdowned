import React from "react";
import SocialsItem from "../SocialsItem/SocialsItem";
import styles from "./Social.module.css";
type SocialsProps = {
  telegram?: string;
  email?: string;
};

const Socials = ({ telegram, email }: SocialsProps) => {
  const items = [
    { type: "telegram", href: telegram, imgSrc: "/socials/telegram.svg" },
    { type: "email", href: email, imgSrc: "/socials/email.svg" },
  ].filter((item) => item.href);
  return (
    <ul className={styles.socials}>
      {items.map(({ type, href, imgSrc }) => (
        <li key={type}>
          <SocialsItem link={href!} imgSrc={imgSrc} alt={type} />
        </li>
      ))}
    </ul>
  );
};

export default Socials;
