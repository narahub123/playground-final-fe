import {
  SettingsBranchType,
  SettingsMainBranchType,
} from "@features/settings-setting/types/data";
import { SettingsBranchCard } from "@features/settings-setting/ui/components";
import { MainContentListLayout, MainLayout } from "@shared/pages/layout";

const AccountInfoPage = () => {
  const branchList: (SettingsMainBranchType | SettingsBranchType)[] = [
    {
      title: "사용자 아이디",
      path: "/settings/screen_name",
      expl: "@abcdefg",
    },
    {
      title: "휴대폰",
      path: "/settings/phone",
    },
    {
      title: "이메일",
      path: "/settings/email",
      expl: "example@example.com",
    },
    {
      title: "인증여부",
      path: "",
      expl: "아니요",
    },
    {
      title: "비공개 게시물",
      path: "/settings/audience_and_tagging",
      expl: "아니요",
    },
    {
      title: "계정 생성",
      path: "",
      expl: "2022. 8. 6. 오후 5:35:42",
    },
    {
      title: "국가",
      path: "/settings/country",
      expl: "대한민국",
    },
    {
      title: "국가",
      path: "/settings/country",
      expl: "대한민국",
    },
    {
      title: "언어",
      path: "/settings/language",
      expl: "한국어",
    },
    {
      title: "성별",
      path: "/settings/gender",
      expl: "여성",
    },
    {
      title: "생년월일",
      path: "",
      expl: "2006년5월15일",
    },
    {
      title: "연령",
      path: "age",
      expl: "18",
    },
    {
      title: "자동화",
      path: "automation",
      expl: "자동화 계정을 관리합니다.",
    },
  ];
  return (
    <MainLayout
      pageTitle="계정 정보"
      backward
      topContent={<></>}
      bottomContent={
        <MainContentListLayout
          list={branchList}
          item={<SettingsBranchCard />}
        />
      }
    />
  );
};

export default AccountInfoPage;
