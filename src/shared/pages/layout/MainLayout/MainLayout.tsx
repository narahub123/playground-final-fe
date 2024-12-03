import React from "react";
import styles from "./MainLayout.module.css";
import { MainHeader } from "@shared/pages/ui";

interface MainLayoutProps {
  pageTitle: string;
  children: React.ReactNode;
  backward?: boolean;
  extra?: React.ReactNode;
}

const MainLayout = ({
  pageTitle, // 페이지 이름
  backward = false, // 뒤로 가기 아이콘 유무
  extra, // 헤더에 추가 요소가 있는 경우
  children, // 컨텐츠
}: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <MainHeader pageTitle={pageTitle} backward={backward}>
        {extra}
      </MainHeader>
      <div className={styles[`main-content`]}>{children}</div>
    </div>
  );
};

export default MainLayout;
