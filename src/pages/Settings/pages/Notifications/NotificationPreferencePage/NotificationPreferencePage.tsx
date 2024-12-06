import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const NotificationPreferencePage = () => {
  const { pageTitle, description } = useLanguageMode([
    "pages",
    "NotificationPreferencePage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      topContent={<Description text={description} />}
      bottomContent={
        <MainContentListLayout
          listName={["notificationPreferenceBranchList"]}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default NotificationPreferencePage;
