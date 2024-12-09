import { SettingsContainer } from "@features/settings-setting/ui/components";
import {
  getAddImgExpl,
  getColorContrast,
  getReduceMotion,
} from "@shared/@common/model/selectors";
import {
  setAddImgExpl,
  setColorContrast,
  setReduceMotion,
} from "@shared/@common/model/slices/settingsSlice";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const AccessibilityPage = () => {
  const list = [
    {
      title: "보기 지원",
      type: "checkbox",
      selector: getColorContrast,
      comp: {
        text: "색 대비 높이기",
        reducer: setColorContrast,
      },
      description: "텍스트와 배경색의 대비를 높여 가독성을 향상시킵니다.",
    },
    {
      title: "동작",
      type: "checkbox",
      selector: getReduceMotion,
      comp: {
        text: "동작 줄이기",
        reducer: setReduceMotion,
      },
      description: "생방송 참여수를 포함한 앱 내 애니메이션을 줄입니다.",
    },
    {
      type: "card",
      comp: {
        title: "자동 재생",
        expl: "셀룰러 데이터 또는 Wi-Fi 사용 시",
        path: "/settings/autoplay",
      },
    },
    {
      title: "미디어",
      type: "checkbox",
      selector: getAddImgExpl,
      comp: {
        text: "이미지 설명 알림을 받습니다.",
        reducer: setAddImgExpl,
      },
      description:
        "게시물을 전송하기 전에 이미지 설명을 추가하라는 알림을 받습니다.",
    },
  ];
  return (
    <MainLayout
      pageTitle="접근성"
      backward
      topContent={<Description text={""} />}
      bottomContent={
        <>
          {list.map((item, index) => (
            <SettingsContainer item={item} gap={0} key={index} />
          ))}
        </>
      }
    />
  );
};

export default AccessibilityPage;
