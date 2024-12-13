import styles from "./DelegateGroupsPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { getDelegateGroups } from "@shared/@common/model/selectors";
import { Text } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useSelector } from "react-redux";

const DelegateGroupsPage = () => {
  const groups = useSelector(getDelegateGroups);
  const { pageTitle, description, empty } = useLanguageMode([
    "pages",
    "DelegateGroupsPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Text text={description} type="description" />}
      bottomContent={
        <>
          {groups.length === 0 ? (
            <div className={styles.empty}>{empty}</div>
          ) : (
            <>{/* groups 내용이 있다면 생성 */}</>
          )}
        </>
      }
    />
  );
};

export default DelegateGroupsPage;
