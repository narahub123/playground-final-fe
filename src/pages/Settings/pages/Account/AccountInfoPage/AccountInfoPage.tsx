import {
  SettingsBranchType,
  SettingsMainBranchType,
} from "@features/settings-setting/types/data";
import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const AccountInfoPage = () => {
  const { pageTitle, branchList } = useLanguageMode([
    "pages",
    "AccountInfoPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<></>}
      bottomContent={
        <MainContentListLayout
          list={branchList}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default AccountInfoPage;
