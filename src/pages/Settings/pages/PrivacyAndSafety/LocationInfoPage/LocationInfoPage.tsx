import {
  SettingsBranchCard,
  SettingsContainer,
} from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const LocationInfoPage = () => {
  const { pageTitle, description, checkbox, branchList } = useLanguageMode([
    "pages",
    "LocationInfoPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <>
          <SettingsContainer item={checkbox} gap={0} />
          <MainContentListLayout
            list={branchList}
            item={<SettingsBranchCard />}
          />
        </>
      }
    />
  );
};

export default LocationInfoPage;
