import { MainLayout } from "@shared/pages/layout";
import styles from "./DownloadDataPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Button, Description } from "@shared/@common/ui/components";

const DownloadDataPage = () => {
  const { pageTitle, description, expl1, expl2, button } = useLanguageMode([
    "pages",
    "DownloadDataPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <>
          <p>{expl1}</p>
          <p>{expl2}</p>
          <div className={styles[`button-container`]}>
            <Button text={button.text} handleClick={() => {}} />
          </div>
        </>
      }
    />
  );
};

export default DownloadDataPage;
