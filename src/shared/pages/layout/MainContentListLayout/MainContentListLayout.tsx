import { cloneElement, ReactElement, ReactNode } from "react";
import styles from "./MainContentListLayout.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { SettingsBranchType } from "@features/settings-setting/types/data";
import { Description } from "@shared/@common/ui/components";

interface MainContentListLayoutProps {
  listName: string[];
  item: ReactNode;
  search?: string;
}

const MainContentListLayout = ({
  listName,
  item,
  search,
}: MainContentListLayoutProps) => {
  const list: SettingsBranchType[] = useLanguageMode(listName);

  const filteredList = list.filter((item) => {
    if (!search) {
      return item;
    } else {
      return item.title.includes(search);
    }
  });

  return (
    <div className={styles[`list-layout`]}>
      <ul className={styles.list}>
        {search && filteredList.length === 0 && (
          <div className={styles.empty}>
            <div className={styles.title}>
              {`${search}에 대한 검색 결과가 없습니다.`}
            </div>
            <Description text="입력하신 단어에 대한 결과가 없습니다. 다른 검색어를 사용해보세요." />
          </div>
        )}
        {filteredList.map((i, index) => {
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
