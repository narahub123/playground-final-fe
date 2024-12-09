import { SettingsContainer } from "@features/settings-setting/ui/components";
import {
  getFindByEmail,
  getQualityFilter,
} from "@shared/@common/model/selectors";
import {
  setFindByEmail,
  setQualityFilter,
} from "@shared/@common/model/slices/settingsSlice";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const NotificationFilterPage = () => {
  const list = [
    {
      type: "checkbox",
      selector: getQualityFilter,
      comp: {
        text: "퀄리티 필터",
        reducer: setQualityFilter,
      },
      description:
        "선택하면 중복 및 자동 게시물과 같은 콘텐츠가 필터링됩니다. 팔로우 중이거나 최근 대화한 계정의 알림에 적용되지 않습니다.",
    },
    {
      type: "card",
      comp: {
        title: "뮤트 상태의 알림",
        path: "/settings/notifications/advanced_filters",
      },
    },
  ];
  return (
    <MainLayout
      pageTitle="필터"
      backward
      topContent={
        <Description
          text={"확인하고자 하는 알림과 확인하고 싶지 않은 알림을 선택하세요."}
        />
      }
      bottomContent={
        <>
          {list.map((item, index) => (
            <SettingsContainer item={item} key={index} gap={0} />
          ))}
        </>
      }
    />
  );
};

export default NotificationFilterPage;
