import styles from "./TopicsNotInterestedOutlet.module.css";
import { TopicFollowCard } from "@shared/@common/ui/components";

const TopicsNotInterestedOutlet = () => {
  const list = ["아이즈원", "강혜원", "김민주"];
  return (
    <ul className={styles.list}>
      {list.map((item, index) => (
        <TopicFollowCard key={index} text={item} />
      ))}
    </ul>
  );
};

export default TopicsNotInterestedOutlet;
