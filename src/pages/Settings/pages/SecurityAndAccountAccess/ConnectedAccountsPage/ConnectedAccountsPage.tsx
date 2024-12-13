import { useLanguageMode } from "@shared/@common/model/hooks";
import { getConnectedAccounts } from "@shared/@common/model/selectors";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useSelector } from "react-redux";

const ConnectedAccountsPage = () => {
  const connectedAccounts = useSelector(getConnectedAccounts);

  const { pageTitle, description } = useLanguageMode([
    "pages",
    "ConnectedAccountsPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={<>{connectedAccounts}</>}
    />
  );
};

export default ConnectedAccountsPage;
