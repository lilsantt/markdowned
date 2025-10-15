import React from "react";
import Container from "../Container/Container";
import styles from "./Footer.module.css";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>@2025 Lilsant</p>
      </Container>
    </footer>
  );
};

export default Footer;
