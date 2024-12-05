import { countryNamesZhCN } from "@shared/@common/data/countries";

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

const zh_TW = {
  languageSelect: {
    wrongCountryCode: "無效的國家代碼",
    countryNames: countryNamesZhCN,
  },
  // 프로필 이미지
  profileImage: {
    imgAlt: {
      login: "的個人資料照片",
      logout: "個人資料照片",
    },
    ariaLabel: "點擊更換個人資料照片。",
  },
  // 아미지
  image: {
    imgAlt: "圖片",
  },
  // 언어 설정
  colorTheme: {
    colorThemeTitles: {
      cornflowerblue: "預設色",
      red: "紅色",
      green: "綠色",
      yellow: "黃色",
      purple: "紫色",
      black: "黑色",
    },
  },
  // 글자 크기 설정
  fontSize: {
    fontSizeTitles: {
      xs: "非常小",
      s: "小",
      b: "預設",
      l: "大",
      xl: "非常大",
    },
  },
  // MainHeader
  mainHeader: {
    backwardIconTitle: "返回上一頁",
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

export default zh_TW;
