import { MainLayout } from "@shared/pages/layout";
import styles from "./DevicesPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description, Title } from "@shared/@common/ui/components";

const DevicesPage = () => {
  const { pageTitle, heading1, expl1 } = useLanguageMode([
    "pages",
    "DevicesPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<></>}
      bottomContent={
        <>
          <div className={styles.section}>
            <Title text={heading1} />
          </div>
          <div className={styles.section}>
            <Description text={expl1} />
          </div>
        </>
      }
    />
  );
};

export default DevicesPage;
