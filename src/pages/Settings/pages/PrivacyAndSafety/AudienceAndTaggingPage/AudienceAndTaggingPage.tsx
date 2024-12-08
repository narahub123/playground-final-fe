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
      bottomContent={<SettingsContainer list={list} gap={0} />}
    />
  );
};

export default AudienceAndTaggingPage;
