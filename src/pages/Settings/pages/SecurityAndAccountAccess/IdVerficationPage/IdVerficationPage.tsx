import {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
} from "@features/settings-setting/types";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const IdVerficationPage = () => {
  const { pageTitle, descriptioin, list } = useLanguageMode([
    "pages",
    "IdVerficationPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={descriptioin} />}
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

export default IdVerficationPage;
