import { MainLayout } from "@shared/pages/layout";
import styles from "./TopicsPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Tab } from "@shared/pages/ui";
import { HyperLink, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { getTopics } from "@shared/@common/model/selectors";

interface TopicButtonProps {
  text: string;
}

const TopicButton = ({ text }: TopicButtonProps) => {
  return <span>{text}</span>;
};

const TopicsPage = () => {
  const topics = useSelector(getTopics);
  const {
    pageTitle,
    tabList,
    description1,
    heading,
    expl,
    hyperlink,
    description2,
  } = useLanguageMode(["pages", "TopicsPage"]);

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Tab list={tabList} />}
      bottomContent={
        <>
          <div className={`${styles.section} ${styles[`border-bottom`]}`}>
            <Text text={description1} />
          </div>
          <div className={`${styles.section} ${styles[`border-bottom`]}`}>
            <Text text={heading} type="heading" />
            <Text text={expl} type="description" />
            <ul>
              {topics.map((item, index) => (
                <TopicButton text={item} key={index} />
              ))}
            </ul>
            <HyperLink text={hyperlink} />
          </div>
          <div className={`${styles.section}`}>
            <Text text={description2} />
          </div>
        </>
      }
    />
  );
};

export default TopicsPage;
