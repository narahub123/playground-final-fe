import styles from "./WriteActions.module.css";
import WriteActionsIcon from "../WriteActionsIcon/WriteActionsIcon";

const WriteActions = () => {
  return (
    <div className={styles.options}>
      <WriteActionsIcon option="image" title="미디어" />
      <WriteActionsIcon option="vote" title="투표" />
      <WriteActionsIcon option="emoji" title="이모티콘" />
      <WriteActionsIcon option="reserve" title="예약" />
      <WriteActionsIcon option="location" title="위치" />
    </div>
  );
};

export default WriteActions;
