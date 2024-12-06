import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";
import { Search } from "@shared/pages/ui";

const SettingsLandingPage = () => {
  return (
    <MainLayout
      pageTitle="설정"
      topContent={<Search placeholder="설정 검색하기" />}
      bottomContent={
        <MainContentListLayout
          listName="settingsMainBranchList"
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default SettingsLandingPage;
