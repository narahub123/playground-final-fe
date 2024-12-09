import {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
} from "@features/settings-setting/types";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const LanguagesPage = () => {
  const list = [
    {
      title: "표시 언어",
      detail:
        "PG 헤드라인, 버튼 및 기타 텍스트에 사용하는 기본 언어를 선택합니다.",
      type: "card",
      comp: {
        title: "표시 언어",
        expl: "한국어",
        path: "/settings/language",
      },
    },
    {
      title: "추가 언어 선택",
      detail: "PG에 표시하고 싶은 콘텐트의 추가 언어를 선택합니다.",
      type: "card",
      comp: {
        title: "추가 언어",
        path: "/i/flow/language_selector",
      },
    },
    {
      title: "알 수 있는 언어",
      detail:
        "팔로우하는 계정과 반응을 보낸 게시물 같이 사용자 활동을 토대로 PG가 추정한 언어를 관리합니다.",
      type: "card",
      comp: {
        title: "알 수 있는 언어",
        path: "/settings/your_twitter_data/language",
      },
    },
  ];
  return (
    <MainLayout
      pageTitle="언어"
      backward
      topContent={
        <Description
          text={"사용자 환경을 맞춤 설정할 때 사용되는 언어를 관리합니다."}
        />
      }
      bottomContent={
        <>
          {(
            list as (
              | SettingsBranchListContainerType
              | SettingsCheckBoxContainerType
            )[]
          ).map((item, index) => (
            <SettingsContainer item={item} key={index} />
          ))}
        </>
      }
    />
  );
};

export default LanguagesPage;
