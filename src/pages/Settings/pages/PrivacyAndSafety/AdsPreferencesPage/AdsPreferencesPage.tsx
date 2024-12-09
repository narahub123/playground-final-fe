import {
  SettingsBranchCard,
  SettingsContainer,
} from "@features/settings-setting/ui/components";
import { getAllowBehavioralAds } from "@shared/@common/model/selectors";
import { setAllowBehavioralAds } from "@shared/@common/model/slices/settingsSlice";
import { Description } from "@shared/@common/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const AdsPreferencesPage = () => {
  const checbox = {
    type: "checkbox",
    selector: getAllowBehavioralAds,
    comp: {
      text: "맞춤광고",
      reducer: setAllowBehavioralAds,
    },
    description:
      "PlayGround에서 항상 내 PlayGround 활동에 기반한 광고를 보게 됩니다. 이 설정이 활성화되어 있으면 PlayGround에서 내 PlayGround 활동과 파트너가 제공한 기타 온라인 활동 및 정보를 결합하여 PlayGround 내외에서 PlayGround 광고주의 광고를 맞춤 설정할 수 있습니다.",
  };

  const branchList = [
    {
      title: "관심사",
      path: "/settings/your_twitter_data/twitter_interests",
    },
    {
      title: "내 광고주 목록",
      path: "/settings/your_twitter_data/audiences",
    },
  ];
  return (
    <MainLayout
      pageTitle="광고 환경설정"
      backward
      topContent={
        <Description text={"PlayGround에서 광고 설정을 관리합니다."} />
      }
      bottomContent={
        <>
          <SettingsContainer item={checbox} gap={0} />
          <MainContentListLayout
            list={branchList}
            item={<SettingsBranchCard />}
          />
        </>
      }
    />
  );
};

export default AdsPreferencesPage;
