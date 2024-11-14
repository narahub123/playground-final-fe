import { NavLink, useLocation } from "react-router-dom";
import styles from "./Tabs.module.css";
import { TabListType } from "@/types";

type TabsProps = {
  tabList: TabListType[];
  isQuery?: boolean;
};

const Tabs = ({ tabList, isQuery = false }: TabsProps) => {
  const { pathname, search } = useLocation();

  // 쿼리 스트링을 이용한 컴포넌트 변환 방법에 대해 알아볼 것

  return (
    <nav className={styles.tabs}>
      <ul className={styles.container}>
        {tabList.map((tab) => (
          <NavLink
            to={`${isQuery ? `${pathname}${search.split("&")[0]}&` : ""}${
              tab.url
            }`}
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
