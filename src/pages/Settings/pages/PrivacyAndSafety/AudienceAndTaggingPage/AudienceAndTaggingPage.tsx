import { SettingsContainer } from "@features/settings-setting/ui/components";
import { setBackgroundTheme } from "@shared/@common/model/slices/settingsSlice";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const AudienceAndTaggingPage = () => {
  const list = [
    {
      title: "",
      type: "checkbox",
      comp: {
        text: "내 게시물을 비공개로 설정",
        reducer: setBackgroundTheme,
        initialValue: false,
      },
      description:
        "선택하면 나를 팔로우하는 사람들만 내 게시물 및 기타 계정 정보를 볼 수 있게 됩니다.",
    },
    {
      title: "",
      type: "checkbox",
      comp: {
        text: "동영상 보호하기",
        reducer: setBackgroundTheme,
        initialValue: false,
      },
      description:
        "이 설정을 선택하면 기본적으로 게시물의 동영상을 다운로드할 수 없게 됩니다. 이 설정은 앞으로 작성하는 게시물에 적용되며 소급 적용되지 않습니다. ",
    },
    {
      title: "",
      type: "card",
      comp: {
        title: "사진 태그하기",
        path: "/settings/tagging",
      },
      description: "누구나 나를 태그할 수 있도록 허용",
    },
  ];
  return (
    <MainLayout
      pageTitle="오디언스, 미디어 및 태그하기"
      backward
      topContent={
        <Description
          text={"PlayGround에서 다른 사람들에게 공개하는 정보를 관리합니다."}
        />
      }
      bottomContent={<SettingsContainer list={list} />}
    />
  );
};

export default AudienceAndTaggingPage;
