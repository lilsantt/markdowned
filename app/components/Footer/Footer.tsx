import React from "react";
import Container from "../Container/Container";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>@2025 Lilsant</p>
      </Container>
    </footer>
  );
};

export default Footer;
