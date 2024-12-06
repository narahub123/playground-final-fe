import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const PrivacyAndSafetyPage = () => {
  const { pageTitle, description } = useLanguageMode([
    "pages",
    "PrivacyAndSafetyPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      topContent={<Description text={description} />}
      bottomContent={
        <MainContentListLayout
          listName={["privacyAndSafetyBranchList"]}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default PrivacyAndSafetyPage;
