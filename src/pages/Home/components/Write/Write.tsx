import styles from "./Write.module.css";
import Image from "@pages/Explore/components/Image/Image";
import { profile1 } from "@/shared/@common/assets/images/index";
import TextEditor from "../TextEditor/TextEditor";
import ReplyOptions from "../ReplyOptions/ReplyOptions";
import WriteOptions from "../WriteOptions/WriteOptions";

const Write = () => {
  return (
    <div className={styles.write}>
      <div className={styles.left}>
        <Image url={profile1} />
      </div>
      <div className={styles.right}>
        <TextEditor />
        <ReplyOptions />
        <WriteOptions />
      </div>
    </div>
  );
};

export default Write;
