import { useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import styles from "./TopicButton.module.css";
import { getTopics } from "@shared/@common/model/selectors";
import { useAppDispatch } from "@app/store";
import { setTopics } from "@shared/@common/model/slices/settingsSlice";
import { useLanguageMode } from "@shared/@common/model/hooks";

interface TopicButtonProp {
  text: string;
  style?: string;
}

const TopicButton = ({ text, style }: TopicButtonProp) => {
  const dispatch = useAppDispatch();
  const topics = useSelector(getTopics);
  const included = topics.findIndex((item) => item === text) !== -1;

  const { hideIconTitle } = useLanguageMode(["components", "TopicButton"]);

  const handleAdd = () => {
    const newTopics = [...topics, text];
    dispatch(setTopics(newTopics));
  };

  const handleDelete = () => {
    const newTopics = topics.filter((item) => item !== text);
    dispatch(setTopics(newTopics));
  };

  // 추천에서 없애기
  const handleRemove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <span
      className={`${styles.container} ${
        included ? styles.checked : ""
      } ${style}`}
      onClick={included ? handleDelete : handleAdd}
    >
      <span className={styles.text}>{text}</span>
      {included ? (
        <Icon iconName="check" iconTitle="" />
      ) : (
        <>
          <Icon iconName="plus" iconTitle="" className={styles.plus} />
          <p className={styles.divider} />
          <Icon
            iconName="close"
            iconTitle={hideIconTitle}
            handleClick={(e) => handleRemove(e)}
          />
        </>
      )}
    </span>
  );
};

export default TopicButton;
