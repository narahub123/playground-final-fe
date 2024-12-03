import React from "react";
import styles from "./MainContentLayout.module.css";

interface MainContentLayoutProps {
  topContent: React.ReactNode;
  bottomContent: React.ReactNode;
}

const MainContentLayout = ({
  topContent,
  bottomContent,
}: MainContentLayoutProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.topContent}>{topContent}</div>
      <div className={styles.bottomContent}>{bottomContent}</div>
    </div>
  );
};

export default MainContentLayout;
