"use client";

import { navLinks } from "@/data/nav/nav";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./Navbar.module.css";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();
  const isActive = (url: string) => {
    if (url.includes("/posts/page")) {
      return currentPath.startsWith("/posts/page");
    }
    const pattern = new RegExp(`^${url}(/|$)`);
    return pattern.test(currentPath);
  };

  return (
    <nav className={styles.nav}>
      <button
        className={styles.burger}
        onClick={() => setIsOpen(true)}
        aria-label="Открыть меню"
      >
        ☰
      </button>

      <ul className={styles.list}>
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link
              href={link.url}
              className={clsx(styles.item, isActive(link.url) && styles.active)}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className={clsx(styles.overlay, isOpen && styles.open)}>
        <button
          className={styles.close}
          onClick={() => setIsOpen(false)}
          aria-label="Закрыть меню"
        >
          ✕
        </button>

        <ul className={styles.menu}>
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.url}
                className={clsx(
                  styles.item,
                  isActive(link.url) && styles.active
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
