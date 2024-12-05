import { cloneElement, ReactElement, ReactNode } from "react";
import styles from "./MainContentListLayout.module.css";

interface MainContentListLayoutProps {
  list: any[];
  item: ReactNode;
}

const MainContentListLayout = ({ list, item }: MainContentListLayoutProps) => {
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
