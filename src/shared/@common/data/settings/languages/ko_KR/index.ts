import { countryNamesKor } from "@shared/@common/data/countries";

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
import components from "./components";

const ko_KR = {
  languageSelect: {
    wrongCountryCode: "잘못된 국가 코드",
    countryNames: countryNamesKor,
  },
  // 프로필 이미지
  profileImage: {
    imgAlt: { login: "의 프로필 사진", logout: "프로필 사진" },
    ariaLabel: "프로필 사진을 변경하려면 클릭하세요.",
  },
  // 아미지
  image: {
    imgAlt: "이미지",
  },
  // 언어 설정
  colorTheme: {
    colorThemeTitles: {
      cornflowerblue: "기본색",
      red: "빨강색",
      green: "초록색",
      yellow: "노랑색",
      purple: "보라색",
      black: "검은색",
    },
  },
  // 글자 크기 설정
  fontSize: {
    fontSizeTitles: {
      xs: "아주 작게",
      s: "작게",
      b: "기본",
      l: "크게",
      xl: "아주 크게",
    },
  },
  // MainHeader
  mainHeader: {
    backwardIconTitle: "이전 페이지로",
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

  // 컴포넌트
  components,
};

export default ko_KR;
