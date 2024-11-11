import { Outlet } from "react-router-dom";
import styles from "./PageLayout.module.css";

const PageLayout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        {/* 사이드 바  */}
        <aside className={styles.sidebar}>sidebar</aside>
        {/* 컨텐츠 */}
        <main className={styles.main}>
          content
          {/* <Outlet /> */}
        </main>
        {/* 기타 */}
        <aside className={styles.extra}>extra</aside>
      </div>
    </div>
  );
};

export default PageLayout;
