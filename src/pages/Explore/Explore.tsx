import { Outlet } from "react-router-dom";
import styles from "./Explore.module.css";
import Search from "@pages/Bookmarks/components/Search/Search";
import SettingButton from "./components/SettingButton/SettingButton";
import Constant from "@constants/index";
import Tabs from "./components/Tabs/Tabs";

const Explore = () => {
  return (
    <div className={styles.explore}>
      <header className={styles.header}>
        <span className={styles.search}>
          <Search placeholder="" pageName="" />
        </span>
        <span className={styles.button} title="설정">
          <SettingButton pageName={Constant.explore.pageName} />
        </span>
      </header>
      <Tabs tabList={Constant.explore.tabList} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Explore;
