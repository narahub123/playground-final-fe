import { TabItemType } from "@shared/pages/types";
import styles from "./Tab.module.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelectionContext } from "@shared/pages/model/hooks";

interface TabProps {
  list: TabItemType[];
}

const Tab = ({ list }: TabProps) => {
  const itemRefs = useRef<any>([]);
  const [focus, setFocus] = useState("");

  const { selection, setSelection } = useSelectionContext();

  // 포커스
  useEffect(() => {
    const index = list.findIndex((item) => item.value === focus);

    if (index !== -1) {
      itemRefs.current[index].focus();
    }
  }, [focus]);

  return (
    <div className={styles.tab}>
      <ul className={styles.list} role="listbox">
        {list.map((item, index) => {
          const selectedCond = selection === item.value ? styles.selected : "";

          // -> 키에 대한 조건
          const indexPlusCond = index + 1 === list.length ? 0 : index + 1;
          // <- 키에 대한 조건
          const indexMinusCond = index - 1 < 0 ? list.length - 1 : index - 1;

          const Item = item.path || item.path === "" ? Link : "li";
          return (
            <Item
              key={item.text}
              className={styles.item}
              role="option" // 선택 가능한 옵션 표시
              aria-selected={selection === item.value} // 선택 여부
              aria-label={`${item.text}`}
              to={item.path || ""}
              onClick={() => setSelection(item.value)}
              onFocus={() => setFocus(item.value)}
              onBlur={() => setFocus("")}
              // tab 이동
              tabIndex={selection === item.value ? 0 : -1}
              ref={(el: any) => {
                itemRefs.current[index] = el;
              }}
              // 방향키로 포커스 이동
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") {
                  setFocus(list[indexPlusCond].value);
                } else if (e.key === "ArrowLeft") {
                  setFocus(list[indexMinusCond].value);
                } else if (e.key === "Enter") {
                  setSelection(item.value);
                }
              }}
            >
              <div className={`${styles.wrap} ${selectedCond}`}>
                <span className={styles.text}>{item.text}</span>
              </div>
            </Item>
          );
        })}
      </ul>
    </div>
  );
};

export default Tab;
