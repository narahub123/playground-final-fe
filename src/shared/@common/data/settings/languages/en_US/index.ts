import { countryNamesEng } from "@shared/@common/data/countries";
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

import pages from "./pages";

const en_US = {
  // 언어 선택
  languageSelect: {
    wrongCountryCode: "Invalid country code",
    countryNames: countryNamesEng,
  },
  // 프로필 이미지
  profileImage: {
    imgAlt: { login: "'s profile photo", logout: "Profile Photo" },
    ariaLabel: "Click to change the profile picture.",
  },
  // 아미지
  image: {
    imgAlt: "Image",
  },
  // 언어 설정
  colorTheme: {
    colorThemeTitles: {
      cornflowerblue: "default",
      red: "red",
      green: "green",
      yellow: "yellow",
      purple: "purple",
      black: "black",
    },
  },
  // 글자 크기 설정
  fontSize: {
    fontSizeTitles: {
      xs: "extra small",
      s: "small",
      b: "default",
      l: "large",
      xl: "extra large",
    },
  },
  // MainHeader
  mainHeader: {
    backwardIconTitle: "Go to Previous Page",
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

  // 페이지
  pages,
};

export default en_US;
