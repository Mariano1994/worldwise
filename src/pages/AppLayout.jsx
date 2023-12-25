import { SideBar } from "../components/SideBar/SideBar";
import { Map } from "../components/Map/Map";
import styles from "./AppLayout.module.css";

export function AppLayout() {
  return (
    <>
      <div className={styles.app}>
        <SideBar />
        <Map />
      </div>
    </>
  );
}
