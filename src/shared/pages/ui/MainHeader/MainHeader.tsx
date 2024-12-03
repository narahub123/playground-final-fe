import { Icon } from "@shared/@common/ui/components";
import styles from "./MainHeader.module.css";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useLanguageMode } from "@shared/@common/model/hooks";

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

  const { backwardIconTitle } = useLanguageMode("mainHeader");
  return (
    <div className={styles[`main-header`]}>
      {backward && (
        <Icon
          iconName="backward"
          iconTitle={backwardIconTitle}
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
