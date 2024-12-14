import styles from "./TopicsOutlet.module.css";
import { HyperLink, Text, TopicButton } from "@shared/@common/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { getTopics } from "@shared/@common/model/selectors";
import { useSelector } from "react-redux";

const TopicsOutlet = () => {
  const topics = useSelector(getTopics);
  const { description1, heading, expl, hyperlink, description2 } =
    useLanguageMode(["outlets", "TopicsOutlet"]);

  const recs = ["강해린", "뉴진스"];

  const list = topics.length !== 0 ? topics : recs;

  return (
    <>
      <div className={`${styles.section} ${styles[`border-bottom`]}`}>
        <Text text={description1} />
      </div>
      <div className={`${styles.section} ${styles[`border-bottom`]}`}>
        <Text text={heading} type="heading" />
        <Text text={expl} type="description" />
        <ul className={styles.list}>
          {list.map((item, index) => (
            <TopicButton text={item} key={index} />
          ))}
        </ul>
        <HyperLink text={hyperlink} />
      </div>
      <div className={`${styles.section}`}>
        <Text text={description2} />
      </div>
    </>
  );
};

export default TopicsOutlet;
