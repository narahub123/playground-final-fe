import React from "react";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles[`main-header`]}>헤더</div>
      <div className={styles[`main-content`]}>{children}</div>
    </div>
  );
};

export default MainLayout;
