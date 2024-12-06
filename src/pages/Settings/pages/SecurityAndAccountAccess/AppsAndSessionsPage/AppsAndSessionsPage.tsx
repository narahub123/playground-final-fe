import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const AppsAndSessionsPage = () => {
  const { pageTitle, description } = useLanguageMode([
    "pages",
    "AppsAndSessionsPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      topContent={<Description text={description} />}
      bottomContent={
        <MainContentListLayout
          listName={["appAndSessionsBranchList"]}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default AppsAndSessionsPage;
