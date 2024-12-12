import { MainLayout } from "@shared/pages/layout";
import styles from "./AgePage.module.css";
import { Description } from "@shared/@common/ui/components";
import { calculateAge } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import { getBirth } from "@shared/@common/model/selectors";
import { useLanguageMode } from "@shared/@common/model/hooks";

const AgePage = () => {
  const birth = useSelector(getBirth);

  const { pageTitle, description, info } = useLanguageMode([
    "pages",
    "AgePage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <div className={styles.container}>
          <p className={styles.age}>{calculateAge(birth)}</p>
          <Description text={info} />
        </div>
      }
    />
  );
};

export default AgePage;
