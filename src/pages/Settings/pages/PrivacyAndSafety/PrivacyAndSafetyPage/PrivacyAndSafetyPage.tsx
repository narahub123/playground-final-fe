import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const PrivacyAndSafetyPage = () => {
  return (
    <MainLayout
      pageTitle={"개인 정보 및 안전"}
      topContent={<Description text={""} />}
      bottomContent={
        <MainContentListLayout
          listName={["accountBranchList"]}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default PrivacyAndSafetyPage;
