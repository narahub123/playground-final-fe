import React, { ReactElement, useState } from "react";
import styles from "./MainContentLayout.module.css";

interface MainContentLayoutProps {
  topContent: React.ReactNode;
  bottomContent: React.ReactNode;
}

const MainContentLayout = ({
  topContent,
  bottomContent,
}: MainContentLayoutProps) => {
  // 검색어 상태
  const [search, setSearch] = useState("");

  // 공유하는 정보를 컴포넌트에 추가함


  
  const top = React.cloneElement(topContent as ReactElement, {
    search,
    setSearch,
  });

  const bottom = React.cloneElement(bottomContent as ReactElement, {
    search,
  });

  return (
    <div className={styles.layout}>
      <div className={styles.topContent}>{top}</div>
      <div className={styles.bottomContent}>{bottom}</div>
    </div>
  );
};

export default MainContentLayout;
