import { MainLayout } from "@shared/pages/layout";
import styles from "./BlockedAllPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Tab } from "@shared/pages/ui";
import { ProfileContainer, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { getBlockedUsers } from "@shared/@common/model/selectors";

const BlockedAllPage = () => {
  const blockedUsers = useSelector(getBlockedUsers);
  const { pageTitle, tabList, description } = useLanguageMode([
    "pages",
    "BlockedAllPage",
  ]);

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Tab list={tabList} />}
      bottomContent={
        <>
          <div className={styles.container}>
            <Text text={description} type="description" />
          </div>
          {blockedUsers.map((userId, index) => (
            <ProfileContainer key={index} item={userId} />
          ))}
        </>
      }
    />
  );
};

export default BlockedAllPage;
