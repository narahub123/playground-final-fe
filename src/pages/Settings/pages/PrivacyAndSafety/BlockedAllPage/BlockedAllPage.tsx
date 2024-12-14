import { MainLayout } from "@shared/pages/layout";
import styles from "./BlockedAllPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Tab } from "@shared/pages/ui";
import { Text } from "@shared/@common/ui/components";
import { Outlet } from "react-router-dom";

const BlockedAllPage = () => {
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
          <Outlet />
        </>
      }
    />
  );
};

export default BlockedAllPage;
