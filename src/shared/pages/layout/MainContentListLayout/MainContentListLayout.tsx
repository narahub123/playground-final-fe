import { cloneElement, ReactElement, ReactNode } from "react";
import styles from "./MainContentListLayout.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { SettingsBranchType } from "@features/settings-setting/types/data";

interface MainContentListLayoutProps {
  listName: string;
  item: ReactNode;
}

const MainContentListLayout = ({
  listName,
  item,
}: MainContentListLayoutProps) => {
  const list: SettingsBranchType[] = useLanguageMode(listName);

  return (
    <div className={styles[`list-layout`]}>
      <ul className={styles.list}>
        {list.map((i, index) => {
          const Item = cloneElement(item as ReactElement, {
            item: i,
            key: index,
          });
          return Item;
        })}
      </ul>
    </div>
  );
};

export default MainContentListLayout;
