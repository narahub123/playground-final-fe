import { TabItemType } from "@shared/pages/types";
import styles from "./Tab.module.css";
import { useState } from "react";
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

  const [selection, setSelection] = useState(list[0].text);

  return (
    <div className={styles.tab}>
      <ul className={styles.list}>
        {list.map((item) => {
          const selectedCond = selection === item.text ? styles.selected : "";

          const Item = item.path ? Link : "li";
          return (
            <Item
              key={item.text}
              className={styles.item}
              to={item.path || ""}
              onClick={() => setSelection(item.text)}
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
