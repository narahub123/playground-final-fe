import { TabItemType } from "@shared/pages/types";
import styles from "./Tab.module.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

interface TabProps {}

const Tab = ({}: TabProps) => {
  const list: TabItemType[] = [
    {
      text: "전체",
    },
    {
      text: "인증됨",
      path: "",
    },
    {
      text: "멘션",
      path: "",
    },
  ];

  const itemRefs = useRef<any>([]);
  const [selection, setSelection] = useState(list[0].text);
  const [focus, setFocus] = useState("");

  useEffect(() => {
    const index = list.findIndex((item) => item.text === focus);

    if (index !== -1) {
      itemRefs.current[index].focus();
    }
  }, [focus]);

  return (
    <div className={styles.tab}>
      <ul className={styles.list}>
        {list.map((item, index) => {
          const selectedCond = selection === item.text ? styles.selected : "";

          // -> 키에 대한 조건
          const indexPlusCond = index + 1 === list.length ? 0 : index + 1;
          // <- 키에 대한 조건
          const indexMinusCond = index - 1 < 0 ? list.length - 1 : index - 1;

          const Item = item.path ? Link : "li";
          return (
            <Item
              key={item.text}
              className={styles.item}
              to={item.path || ""}
              onClick={() => setSelection(item.text)}
              onFocus={() => setFocus(item.text)}
              onBlur={() => setFocus("")}
              // tab 이동
              tabIndex={selection === item.text ? 0 : -1}
              ref={(el: any) => {
                itemRefs.current[index] = el;
              }}
              // 방향키로 포커스 이동
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") {
                  setFocus(list[indexPlusCond].text);
                } else if (e.key === "ArrowLeft") {
                  setFocus(list[indexMinusCond].text);
                } else if (e.key === "Enter") {
                  setSelection(item.text);
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
