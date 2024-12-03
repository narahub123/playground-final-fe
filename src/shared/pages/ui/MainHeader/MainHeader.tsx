import { Icon } from "@shared/@common/ui/components";
import styles from "./MainHeader.module.css";
import { useNavigate } from "react-router-dom";
import React from "react";

interface MainHeaderProps {
  pageTitle: string;
  backward?: boolean;
  children?: React.ReactNode;
}

const MainHeader = ({
  pageTitle,
  backward = false,
  children,
}: MainHeaderProps) => {
  const naviagte = useNavigate();
  return (
    <div className={styles[`main-header`]}>
      {backward && (
        <Icon
          iconName="backward"
          iconTitle="이전 페이지로"
          className={styles.icon}
          handleClick={() => {
            naviagte(-1);
          }}
        />
      )}
      <span className={styles.title}>{pageTitle}</span>
      <>{children && children}</>
    </div>
  );
};

export default MainHeader;
