import {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
} from "@features/settings-setting/types";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const AudienceAndTaggingPage = () => {
  const { pageTitle, description, list } = useLanguageMode([
    "pages",
    "AudienceAndTaggingPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <>
          {(
            list as (
              | SettingsBranchListContainerType
              | SettingsCheckBoxContainerType
            )[]
          ).map((item, index) => (
            <SettingsContainer item={item} gap={0} key={index} />
          ))}
        </>
      }
    />
  );
};

export default AudienceAndTaggingPage;
