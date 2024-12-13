import { useLanguageMode } from "@shared/@common/model/hooks";
import { getConnectedApps } from "@shared/@common/model/selectors";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useSelector } from "react-redux";

const ConnectedAppsPage = () => {
  const apps = useSelector(getConnectedApps);
  const { pageTitle, description } = useLanguageMode([
    "pages",
    "ConnectedAppsPage",
  ]);

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      // 연결된 앱 목록
      bottomContent={<></>}
    />
  );
};

export default ConnectedAppsPage;
