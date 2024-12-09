import {
  SettingsBranchCard,
  SettingsContainer,
} from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { getUser } from "@shared/@common/model/selectors";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";
import { useSelector } from "react-redux";

const ContentYouSeePage = () => {
  const user = useSelector(getUser);
  const { pageTitle, description, checkboxItem, branchList } = useLanguageMode([
    "pages",
    "ContentYouSeePage",
  ]);

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <>
          <SettingsContainer item={checkboxItem} />
          <MainContentListLayout
            item={<SettingsBranchCard />}
            list={branchList(user)}
          />
        </>
      }
    />
  );
};

export default ContentYouSeePage;
