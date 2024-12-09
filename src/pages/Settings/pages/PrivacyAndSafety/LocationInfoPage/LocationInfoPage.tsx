import {
  SettingsBranchCard,
  SettingsContainer,
} from "@features/settings-setting/ui/components";
import { getAllowLocationAds } from "@shared/@common/model/selectors";
import { setAllowLocationAds } from "@shared/@common/model/slices/settingsSlice";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const LocationInfoPage = () => {
  const checkbox = {
    type: "checkbox",
    selector: getAllowLocationAds,
    comp: {
      text: "내가 머물렀던 장소를 기반으로 맞춤 설정",
      reducer: setAllowLocationAds,
    },
    description:
      "PlayGround는 항상 내게 맞춤 콘텐츠를 제공하기 위해 내가 가입한 위치나 현재 위치와 같은 정보를 사용합니다. 이 설정을 활성화하면 내가 방문한 장소를 통해 맞춤 콘텐츠를 제공할 수 있습니다.",
  };
  const branchList = [
    {
      title: "내가 방문한 장소",
      path: "/settings/your_twitter_data/locations",
    },
    {
      title: "게시물에 위치 정보 넣기",
      path: "/settings/location",
    },
    {
      title: "탐색 설정",
      path: "/settings/location",
    },
  ];
  return (
    <MainLayout
      pageTitle="위치 정보"
      backward
      topContent={
        <Description
          text={
            "PlayGroudn에서 사용자 환경을 맞춤 설정할 때 사용하는 위치 정보를 관리합니다."
          }
        />
      }
      bottomContent={
        <>
          <SettingsContainer item={checkbox} gap={0} />
          <MainContentListLayout
            list={branchList}
            item={<SettingsBranchCard />}
          />
        </>
      }
    />
  );
};

export default LocationInfoPage;
