import Constant from "@constants/index";
import WriteButton from "../WriteButton/WriteButton";
import styles from "./WriteOptions.module.css";
import WriteActions from "../WriteActions/WriteActions";

const WriteOptions = () => {
  return (
    <div className={styles.options}>
      <div className={styles.left}>
        <WriteActions />
      </div>
      <div className={styles.right}>
        <WriteButton text={Constant.textEditor.writeButton} isValid={true} />
      </div>
    </div>
  );
};

export default WriteOptions;
