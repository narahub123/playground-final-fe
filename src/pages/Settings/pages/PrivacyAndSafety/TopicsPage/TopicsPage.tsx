import { MainLayout } from "@shared/pages/layout";
import styles from "./TopicsPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Tab } from "@shared/pages/ui";
import { HyperLink, Text, TopicButton } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { getTopics, getUser } from "@shared/@common/model/selectors";

const TopicsPage = () => {
  const topics = useSelector(getTopics);
  const user = useSelector(getUser);
  const {
    pageTitle,
    tabList,
    description1,
    heading,
    expl,
    hyperlink,
    description2,
  } = useLanguageMode(["pages", "TopicsPage"]);

  const recs = ["강해린", "뉴진스"];

  const list = topics.length !== 0 ? topics : recs;
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Tab list={tabList(user.userId)} />}
      bottomContent={
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
      }
    />
  );
};

export default TopicsPage;
