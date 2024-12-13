import { MainLayout } from "@shared/pages/layout";
import styles from "./DelegateMembersPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { HyperLink, Text } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { getDelegateMembers } from "@shared/@common/model/selectors";

const DelegateMembersPage = () => {
  const members = useSelector(getDelegateMembers);
  const { pageTitle, description, hyperlink, empty } = useLanguageMode([
    "pages",
    "DelegateMembersPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Text text={description} type="description" />}
      bottomContent={
        <>
          <div className={styles[`hyperlink-container`]}>
            <HyperLink text={hyperlink} />
          </div>
          <div className={styles[`member-container`]}>
            {members.length === 0 ? (
              <div className={styles.empty}>{empty}</div>
            ) : (
              <></>
            )}
          </div>
        </>
      }
    />
  );
};

export default DelegateMembersPage;
