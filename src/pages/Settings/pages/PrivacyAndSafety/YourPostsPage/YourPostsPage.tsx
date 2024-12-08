import { SettingsContainer } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { setBackgroundTheme } from "@shared/@common/model/slices/settingsSlice";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const YourPostsPage = () => {
  const { pageTitle, description, list } = useLanguageMode([
    "pages",
    "YourPostsPage",
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

export default YourPostsPage;
