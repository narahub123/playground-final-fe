import styles from "./Feeds.module.css";
import Post from "@pages/Bookmarks/components/Post/Post";

export type FeedsProps = {
  list: any[];
};

const Feeds = ({ list }: FeedsProps) => {
  return (
    <div className={styles.feeds}>
      피드
      {list.map((item, index) => (
        <Post item={item} key={index} />
      ))}
    </div>
  );
};

export default Feeds;
