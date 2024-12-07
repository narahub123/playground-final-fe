import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";
import { Search } from "@shared/pages/ui";

const SettingsLandingPage = () => {
  // 언어 설정
  const { pageTitle, placeholder, branchList } = useLanguageMode([
    "pages",
    "settingsLandingPage",
  ]);

  return (
    <MainLayout
      pageTitle={pageTitle}
      topContent={<Search placeholder={placeholder} />}
      bottomContent={
        <MainContentListLayout
          list={branchList}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default SettingsLandingPage;
