import { countryNamesZhTW } from "@shared/@common/data/countries";

// 페이지
import pages from "./pages";

// 컴포넌트
import components from "./components";

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

  // 페이지
  pages,

  // 컴포넌트
  components,
};

export default zh_CN;
