import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const NotificationsPage = () => {
  const { pageTitle, description } = useLanguageMode([
    "pages",
    "NotificationsPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <MainContentListLayout
          listName={["notificationBranchList"]}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default NotificationsPage;
