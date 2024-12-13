import { MainLayout } from "@shared/pages/layout";
import styles from "./SessionsPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description, HyperLink, Title } from "@shared/@common/ui/components";
import { useSelector } from "react-redux";
import { getSessions } from "@shared/@common/model/selectors";

const SessionsPage = () => {
  const sessions = useSelector(getSessions);

  // 현재 세션과 기타 세션을 구분하는 방법을 생각할 것

  const {
    pageTitle,
    description,
    heading1,
    expl1,
    heading2,
    expl2,
    expl3,
    hyperlink,
  } = useLanguageMode(["pages", "SessionsPage"]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <>
          <div className={styles.section}>
            <Title text={heading1} />
            <Description text={expl1} />
          </div>
          <div className={styles.section}>
            <Title text={heading2} />
            <Description text={expl2} />
            <Description text={expl3} />
            <HyperLink text={hyperlink} />
          </div>
        </>
      }
    />
  );
};

export default SessionsPage;
