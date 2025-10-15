import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";
import styles from "./Header.module.css";
import { Search } from "../Search/Search";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <Logo />
          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
