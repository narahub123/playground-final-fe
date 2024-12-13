import { useAppDispatch } from "@app/store";
import Button from "../Button/Button";
import styles from "./TopicFollowCard.module.css";
import { setTopics } from "@shared/@common/model/slices/settingsSlice";
import { useSelector } from "react-redux";
import { getTopics } from "@shared/@common/model/selectors";
import { useLanguageMode } from "@shared/@common/model/hooks";

interface TopicFollowCardProps {
  text: string;
}

const TopicFollowCard = ({ text }: TopicFollowCardProps) => {
  const dispatch = useAppDispatch();
  const topics = useSelector(getTopics);
  const included = topics.findIndex((item) => item === text) !== -1;

  const { following, follow } = useLanguageMode([
    "components",
    "TopicFollowCard",
  ]);

  return (
    <li className={styles.card}>
      <span>{text}</span>
      <Button
        text={included ? follow : following}
        handleClick={() => {
          const newTopics = [...topics, text];
          dispatch(setTopics(newTopics));
        }}
        className={included ? styles.following : styles.button}
      />
    </li>
  );
};

export default TopicFollowCard;
