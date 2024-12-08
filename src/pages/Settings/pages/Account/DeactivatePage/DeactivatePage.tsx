import { useLanguageMode } from "@shared/@common/model/hooks";
import styles from "./Deactivate.module.css";
import {
  Description,
  HyperLink,
  ProfileContainer,
  Title,
} from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { ReactNode } from "react";

const DeactivatePage = () => {
  const { pageTitle, section1, section2, deactivate } = useLanguageMode([
    "pages",
    "DeactivatePage",
  ]);

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<ProfileContainer />}
      bottomContent={
        <>
          <div className={styles.section}>
            <Title text={section1.title} className={styles.title} />
            <Description
              text={section1.description}
              className={styles.description}
            />
          </div>
          <div className={styles.section}>
            <Title text={section2.title} className={styles.title} />
            <div>
              {(section2.list as (string | ReactNode)[]).map((item, index) => (
                <Description text={item} className={styles.item} key={index} />
              ))}
            </div>
          </div>
          <HyperLink
            text={deactivate.text}
            path="confirm"
            out={false}
            className={styles.deactivate}
          />
        </>
      }
    />
  );
};

export default DeactivatePage;
