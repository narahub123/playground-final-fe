import { countryNamesEng } from "@shared/@common/data/countries";

// 페이지
import pages from "./pages";

// 컴포넌트
import components from "./components";

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

  // 페이지
  pages,

  // 컴포넌트
  components,
};

export default en_US;
