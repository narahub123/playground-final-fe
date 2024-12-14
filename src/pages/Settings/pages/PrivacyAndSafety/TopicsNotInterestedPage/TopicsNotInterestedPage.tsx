import { getUser } from "@shared/@common/model/selectors";
import styles from "./TopicsNotInterestedPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { TopicFollowCard } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { Tab } from "@shared/pages/ui";
import { useSelector } from "react-redux";

const TopicsNotInterestedPage = () => {
  const user = useSelector(getUser);
  const { pageTitle, tabList } = useLanguageMode(["pages", "TopicsPage"]);

  const list = ["아이즈원", "강혜원", "김민주"];
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Tab list={tabList(user.userId)} />}
      bottomContent={
        <ul className={styles.list}>
          {list.map((item, index) => (
            <TopicFollowCard key={index} text={item} />
          ))}
        </ul>
      }
    />
  );
};

export default TopicsNotInterestedPage;
