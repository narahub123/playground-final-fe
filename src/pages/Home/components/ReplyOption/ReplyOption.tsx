import styles from "./ReplyOption.module.css";
import { replyOptions } from "@data/text-editor";
import ReplyOptionIcon from "../ReplyOptionIcon/ReplyOptionIcon";

type ReplyOptionProps = {
  option: string;
  handleClick: (option?: string) => void;
};

const ReplyOption = ({ option, handleClick }: ReplyOptionProps) => {
  return (
    <div className={styles.option} onClick={() => handleClick(option)}>
      <ReplyOptionIcon option={option} />
      <p className={styles.text}>
        {replyOptions[option as keyof typeof replyOptions]}
      </p>
    </div>
  );
};

export default ReplyOption;
