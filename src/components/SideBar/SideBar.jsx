import { AppNav } from "../AppNav/AppNav";
import { Outlet } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import styles from "./SideBar.module.css";

export function SideBar() {
  return (
    <>
      <div className={styles.sidebar}>
        <Logo />
        <AppNav />

        <Outlet />
        <footer className={styles.footer}>
          <p className={styles.copyright}>
            &copy; Copyright {new Date().getFullYear} by worldwise inc.
          </p>
        </footer>
      </div>
    </>
  );
}
