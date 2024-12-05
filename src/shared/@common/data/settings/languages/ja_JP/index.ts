import { countryNamesJap } from "@shared/@common/data/countries";

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

const ja_JP = {
  languageSelect: {
    wrongCountryCode: "無効な国コード",
    countryNames: countryNamesJap,
  },
  // 프로필 이미지
  profileImage: {
    imgAlt: {
      login: "のプロフィール写真",
      logout: "プロフィール写真",
    },
    ariaLabel: "プロフィール写真を変更するにはクリックしてください。",
  },
  // 아미지
  image: {
    imgAlt: "画像",
  },
  // 언어 설정
  colorTheme: {
    colorThemeTitles: {
      cornflowerblue: "基本色",
      red: "赤色",
      green: "緑色",
      yellow: "黄色",
      purple: "紫色",
      black: "黒色",
    },
  },
  // 글자 크기 설정
  fontSize: {
    fontSizeTitles: {
      xs: "非常に小さい",
      s: "小さい",
      b: "標準",
      l: "大きい",
      xl: "非常に大きい",
    },
  },
  // MainHeader
  mainHeader: {
    backwardIconTitle: "前のページへ",
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

export default ja_JP;
