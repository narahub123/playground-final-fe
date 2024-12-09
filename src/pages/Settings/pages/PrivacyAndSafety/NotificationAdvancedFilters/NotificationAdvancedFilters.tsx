import {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
} from "@features/settings-setting/types";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { MainLayout } from "@shared/pages/layout";

const NotificationAdvancedFilters = () => {
  const { pageTitle, list } = useLanguageMode([
    "pages",
    "NotificationAdvancedFilters",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<></>}
      bottomContent={
        <>
          {(
            list as (
              | SettingsBranchListContainerType
              | SettingsCheckBoxContainerType
            )[]
          ).map((item, index) => (
            <SettingsContainer item={item} key={index} />
          ))}
        </>
      }
    />
  );
};

export default NotificationAdvancedFilters;
