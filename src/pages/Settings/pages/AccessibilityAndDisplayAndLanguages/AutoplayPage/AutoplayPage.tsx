import { SettingsContainer } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { MainLayout } from "@shared/pages/layout";

const AutoplayPage = () => {
  const { pageTitle, item } = useLanguageMode(["pages", "AutoplayPage"]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<></>}
      bottomContent={<SettingsContainer item={item} gap={0} />}
    />
  );
};

export default AutoplayPage;
