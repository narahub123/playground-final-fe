import { CheckBoxType } from "@features/settings-setting/types/data";
import {
  CheckBox,
  SettingsBranchCard,
} from "@features/settings-setting/ui/components";
import { getUser } from "@shared/@common/model/selectors";
import { setBackgroundTheme } from "@shared/@common/model/slices/settingsSlice";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";
import { useSelector } from "react-redux";

const ContentYouSeePage = () => {
  const user = useSelector(getUser);
  const item: CheckBoxType = {
    text: "민감한 내용을 포함할 수 있는 미디어 표시",
    reducer: setBackgroundTheme,
    initialValue: false,
  };
  const branchList = [
    {
      title: "토픽",
      path: `/${user.userId}/topics`,
    },
    {
      title: "관심사",
      path: `/settings/your_data/your_interests`,
    },
    {
      title: "탐색 설정",
      path: `/settings/explore`,
    },
    {
      title: "검색 설정",
      path: `/settings/search`,
    },
  ];
  return (
    <MainLayout
      pageTitle="표시되는 콘텐츠"
      backward
      topContent={<Description text />}
      bottomContent={
        <>
          <CheckBox item={item} />
          <MainContentListLayout
            item={<SettingsBranchCard />}
            list={branchList}
          />
        </>
      }
    />
  );
};

export default ContentYouSeePage;
