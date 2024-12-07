import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const SecurityAndAccountAccessPage = () => {
  const { pageTitle, description } = useLanguageMode([
    "pages",
    "SecurityAndAccountAccessPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <MainContentListLayout
          listName={["securityAndAccountAccessBranchList"]}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default SecurityAndAccountAccessPage;
