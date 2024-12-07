import { SettingsContainer } from "@features/settings-setting/ui/components";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useLanguageMode } from "@shared/@common/model/hooks";

const SecurityPage = () => {
  const { pageTitle, description, list } = useLanguageMode([
    "pages",
    "SecurityPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={<SettingsContainer list={list} />}
    />
  );
};

export default SecurityPage;
