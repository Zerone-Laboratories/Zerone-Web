"use client";

import styles from "./NavBar.module.scss";

function NavBar({ children }: { children: React.ReactNode }) {
  function handleReady() {
    while (document.readyState !== "complete") {}

    const navBar = document.querySelector(`.${styles.NavBar}`) as HTMLElement;

    function handleScroll() {
      if (window.scrollY > 0) {
        navBar.classList.add(styles.NavBarScrolled);
      } else {
        navBar.classList.remove(styles.NavBarScrolled);
      }
    }

    if (navBar) {
      window.addEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("load", handleReady);

  return <nav className={styles.NavBar}>{children}</nav>;
}

function NavItem({ children }: { children: React.ReactNode }) {
  return <div className={styles.NavItem}>{children}</div>;
}

NavBar.Item = NavItem;

export { NavBar };
export default NavBar;
