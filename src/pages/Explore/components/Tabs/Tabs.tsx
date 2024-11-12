import { NavLink } from "react-router-dom";
import styles from "./Tabs.module.css";

type TabsProps = {
  tabList: any[];
};

const Tabs = ({ tabList }: TabsProps) => {
  return (
    <nav className={styles.tabs}>
      <ul className={styles.container}>
        {tabList.map((tab) => (
          <NavLink
            to={tab.url}
            key={tab.name}
            className={({ isActive }) =>
              isActive ? `${styles.item} ${styles.active}` : `${styles.item}`
            }
          >
            {tab.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
