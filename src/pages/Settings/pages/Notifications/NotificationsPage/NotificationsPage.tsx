import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const NotificationsPage = () => {
  return (
    <MainLayout
      pageTitle={"알림"}
      topContent={
        <Description
          text={"활동, 관심사 및 추천에 관해 받는 알림의 종류를 선택합니다."}
        />
      }
      bottomContent={
        <MainContentListLayout
          listName={["accountBranchList"]}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default NotificationsPage;
