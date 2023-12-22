import styles from "./NavBar.module.scss";

function NavBar({ children }: { children: React.ReactNode }) {
  return <nav className={styles.NavBar}>{children}</nav>;
}

function NavItem({ children }: { children: React.ReactNode }) {
  return <div className={styles.NavItem}>{children}</div>;
}

NavBar.Item = NavItem;

export { NavBar };
export default NavBar;
