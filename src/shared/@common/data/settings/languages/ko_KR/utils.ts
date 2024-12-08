import { countryNamesKor } from "@shared/@common/data/countries";

const utils = {
  // 언어 선택
  languageSelect: {
    wrongCountryCode: "잘못된 국가 코드",
    countryNames: countryNamesKor,
  },
  // 성별
  translateGender: {
    m: "남성",
    f: "여성",
    n: "중성",
  },
  // 생년월일
  convertBirthToLocalString: {
    yearUnit: "년",
    monthUnit: "월",
    dateUnit: "일",
  },
};

export default utils;
