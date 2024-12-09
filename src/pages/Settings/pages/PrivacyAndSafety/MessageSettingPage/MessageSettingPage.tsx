import {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
} from "@features/settings-setting/types";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { MainLayout } from "@shared/pages/layout";

const MessageSettingPage = () => {
  const { pageTitle, list } = useLanguageMode(["pages", "MessageSettingPage"]);
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
            <SettingsContainer item={item} key={index} gap={0} />
          ))}
        </>
      }
    />
  );
};

export default MessageSettingPage;
