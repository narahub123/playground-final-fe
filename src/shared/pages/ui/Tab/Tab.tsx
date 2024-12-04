import { TabItemType } from "@shared/pages/types";
import styles from "./Tab.module.css";

interface TabProps {}

const Tab = ({}: TabProps) => {
  const list: TabItemType[] = [
    {
      text: "전체",
      path: "",
    },
    {
      text: "인증됨",
      path: "verified",
    },
    {
      text: "멘션",
      path: "mention",
    },
  ];

  return (
    <div className={styles.tab}>
      <ul className={styles.list}>
        {list.map((item) => (
          <li key={item.text} className={styles.item}>
            <div className={styles.wrap}>
              <span className={styles.text}>{item.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tab;
