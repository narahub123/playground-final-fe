import { SettingsContainer } from "@features/settings-setting/ui/components";
import styles from "./TaggingPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Text, Toggle } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useSelector } from "react-redux";
import { getAllowTagging } from "@shared/@common/model/selectors";
import { setAllowTagging } from "@shared/@common/model/slices/settingsSlice";

const TaggingPage = () => {
  const allowTagging = useSelector(getAllowTagging);
  const { pageTitle, text, expl, item } = useLanguageMode([
    "pages",
    "TaggingPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<></>}
      bottomContent={
        <>
          <div className={styles.container}>
            <div className={styles.toggle}>
              <Text text={text} />
              <Toggle toggle={allowTagging} reducer={setAllowTagging} />
            </div>
            <Text text={expl} type="description" />
          </div>
          {allowTagging && <SettingsContainer item={item} gap={0} />}
        </>
      }
    />
  );
};

export default TaggingPage;
