import React from "react";
import styles from "./MainLayout.module.css";
import { MainHeader } from "@shared/pages/ui";
import MainContentLayout from "../MainContentLayout/MainContentLayout";

interface MainLayoutProps {
  pageTitle: string;
  topContent: React.ReactNode;
  bottomContent: React.ReactNode;
  backward?: boolean;
  extra?: React.ReactNode;
}

const MainLayout = ({
  pageTitle, // 페이지 이름
  backward = false, // 뒤로 가기 아이콘 유무
  extra, // 헤더에 추가 요소가 있는 경우
  topContent, // 상단 컨텐츠
  bottomContent, // 하단 컨텐츠
}: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <MainHeader pageTitle={pageTitle} backward={backward}>
        {extra}
      </MainHeader>
      <div className={styles[`main-content`]}>
        <MainContentLayout
          topContent={topContent}
          bottomContent={bottomContent}
        />
      </div>
    </div>
  );
};

export default MainLayout;
