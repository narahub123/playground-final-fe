import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const AccountPage = () => {
  const { pageTitle, description, branchList } = useLanguageMode([
    "pages",
    "AccountPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <MainContentListLayout
          list={branchList}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default AccountPage;
