import styles from "./MainContentListLayout.module.css";
import { cloneElement, ReactElement, ReactNode } from "react";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description } from "@shared/@common/ui/components";
import { getLanguage } from "@shared/@common/model/selectors";
import { useSelector } from "react-redux";
import { SettingsMainBranchType } from "@features/settings-setting/types";
import { SettingsBranchType } from "@features/settings-setting/types/data";

interface MainContentListLayoutProps {
  list: (SettingsMainBranchType | SettingsBranchType)[];
  item: ReactNode;
  search?: string;
}

const MainContentListLayout = ({
  list,
  item,
  search,
}: MainContentListLayoutProps) => {
  // 언어
  const lang = useSelector(getLanguage);

  // 검색 결과가 없는 경우
  const { title, description } = useLanguageMode([
    "components",
    "mainContentListLayout",
  ]);

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
              {lang === "ko-KR"
                ? `${search}${title[0]}`
                : lang === "en-US"
                ? `${title[0]} ${search}.`
                : lang === "ja-JP"
                ? `${search}${title[0]}`
                : lang === "zh-CN"
                ? `${title[0]}${search}${title[1]}`
                : lang === "zh-TW"
                ? `${title[0]}${search}${title[1]}`
                : ""}
            </div>
            <Description text={description} />
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
