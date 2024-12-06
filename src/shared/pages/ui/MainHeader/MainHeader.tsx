import { Icon, Title } from "@shared/@common/ui/components";
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

  const { backwardIconTitle } = useLanguageMode(["mainHeader"]);
  return (
    <header className={styles[`main-header`]} role="banner">
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
      <Title text={pageTitle} className={styles.title} />
      <>{children && children}</>
    </header>
  );
};

export default MainHeader;
