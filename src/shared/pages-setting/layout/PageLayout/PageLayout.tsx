import styles from "./PageLayout.module.css";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <div className={styles[`layout`]}>
      <div className={styles.container}>
        {/* 사이드 바 */}
        <aside className={styles.sidebar}>사이드 바</aside>
        {/* 컨텐츠 */}
        <main className={styles.main}>
          <Outlet />
        </main>
        {/* 기타 */}
        <aside className={styles.extra}>기타</aside>
      </div>
    </div>
  );
};

export default PageLayout;
