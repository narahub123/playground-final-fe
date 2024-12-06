import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const AccountPage = () => {
  return (
    <MainLayout
      pageTitle="계정"
      topContent={
        <Description text="계정 정보를 확인하고, 데이터 기록을 다운로드하거나, 계정 비활성화 옵션에 대해 자세히 알아보세요." />
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

export default AccountPage;
