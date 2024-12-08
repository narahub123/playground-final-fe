import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { getUser } from "@shared/@common/model/selectors";
import { getSettings } from "@shared/@common/model/selectors/settingsSelectors";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";
import { useSelector } from "react-redux";

const AccountInfoPage = () => {
  const { pageTitle, branchList } = useLanguageMode([
    "pages",
    "AccountInfoPage",
  ]);

  const userInfo = useSelector(getUser);
  const settingsInfo = useSelector(getSettings);

  const user = { ...userInfo, ...settingsInfo };

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<></>}
      bottomContent={
        <MainContentListLayout
          list={branchList(user)}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default AccountInfoPage;
