import { countryNamesZhTW } from "@shared/@common/data/countries";

// 설정 브랜치 목록
import settingsMainBranchList from "./settings-main-branch-list";
import {
  accountBranchList,
  securityAndAccountAccessBranchList,
  privacyAndSafetyBranchList,
  notificationBranchList,
  AccessibilityAndDisplayAndLanguages,
} from "./settings-mid-branch-list";
import {
  appAndSessionsBranchList,
  muteAndBlockBranchList,
  notificationPreferenceBranchList,
} from "./settings-sub-branch-list";

const zh_CN = {
  languageSelect: {
    wrongCountryCode: "无效的国家代码",
    countryNames: countryNamesZhTW,
  },
  // 프로필 이미지
  profileImage: {
    imgAlt: {
      login: "的个人资料照片",
      logout: "个人资料照片",
    },
    ariaLabel: "点击更换个人资料照片。",
  },
  // 아미지
  image: {
    imgAlt: "图片",
  },
  // 언어 설정
  colorTheme: {
    colorThemeTitles: {
      cornflowerblue: "默认色",
      red: "红色",
      green: "绿色",
      yellow: "黄色",
      purple: "紫色",
      black: "黑色",
    },
  },
  // 글자 크기 설정
  fontSize: {
    fontSizeTitles: {
      xs: "非常小",
      s: "小",
      b: "默认",
      l: "大",
      xl: "非常大",
    },
  },
  // MainHeader
  mainHeader: {
    backwardIconTitle: "返回上一页",
  },
  // Settings 브랜치 목록
  settingsMainBranchList, // Settings 메인 브랜치 목록
  accountBranchList, // 계정
  securityAndAccountAccessBranchList, // 보안 및 계정 접근 권한
  privacyAndSafetyBranchList, // 개인 정보 및 안전
  notificationBranchList, // 알림
  AccessibilityAndDisplayAndLanguages, // 접근성, 표시, 언어
  appAndSessionsBranchList, // 앱 및 세션
  muteAndBlockBranchList, // 뮤트 및 차단
  notificationPreferenceBranchList, // 알림 환경설정
};

export default zh_CN;
