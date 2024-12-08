import { SettingsContainer } from "@features/settings-setting/ui/components";
import { setBackgroundTheme } from "@shared/@common/model/slices/settingsSlice";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const YourPostsPage = () => {
  const list = [
    {
      title: "",
      type: "checkbox",
      comp: {
        text: "게시하는 미디어를 민감한 내용이 포함될 수 있는 미디어로 표시하기",
        reducer: setBackgroundTheme,
        initialValue: false,
      },
      description:
        "활성화하면 게시하는 사진과 동영상이 민감한 콘텐츠가 표시되기를 원치 않는 사람들에게 민감한 콘텐츠로 표시됩니다.",
    },
    {
      title: "",
      type: "card",
      comp: {
        title: "게시물에 위치 정보 넣기",
        path: "/settings/location",
      },
      description: "",
    },
  ];
  return (
    <MainLayout
      pageTitle="내 게시물"
      backward
      topContent={<Description text={"게시물과 관련된 정보를 관리합니다."} />}
      bottomContent={<SettingsContainer list={list} gap={0} />}
    />
  );
};

export default YourPostsPage;
