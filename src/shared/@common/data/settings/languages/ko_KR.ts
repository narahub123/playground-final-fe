import { countryNamesKor } from "../../countries";

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
};

export default ko_KR;
