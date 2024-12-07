import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const MuteAndBlockPage = () => {
  const { pageTitle, description } = useLanguageMode([
    "pages",
    "MuteAndBlockPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        <MainContentListLayout
          listName={["muteAndBlockBranchList"]}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default MuteAndBlockPage;
