import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const SecurityAndAccountAccessPage = () => {
  return (
    <MainLayout
      pageTitle="보안과 계정 접근 권한"
      topContent={
        <Description text="계정의 보안을 관리하고, 계정에 연결된 앱을 포함해 계정 사용을 추적합니다." />
      }
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
