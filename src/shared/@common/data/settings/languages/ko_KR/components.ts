import { countryNamesKor } from "@shared/@common/data/countries";

const components = {
  // 언어 선택
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
  mainHeader: {
    backwardIconTitle: "이전 페이지로",
  },
  mainContentListLayout: {
    title: ["에 대한 검색 결과가 없습니다."],
    description:
      "입력하신 단어에 대한 결과가 없습니다. 다른 검색어를 사용해보세요.",
  },
};

export default components;
