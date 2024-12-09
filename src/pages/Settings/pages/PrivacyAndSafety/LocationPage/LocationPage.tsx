import { useLanguageMode } from "@shared/@common/model/hooks";
import styles from "./LocationPage.module.css";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { Description, HyperLink } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const LocationPage = () => {
  const { pageTitle, description, item, hyperlink } = useLanguageMode([
    "pages",
    "LocationPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <>
          <SettingsContainer item={item} gap={0} />
          {/* 모달창이 뜰 수 있게 변경할 것 */}
          <HyperLink
            text={hyperlink}
            path=""
            out={false}
            className={styles.hyperlink}
          />
        </>
      }
    />
  );
};

export default LocationPage;
