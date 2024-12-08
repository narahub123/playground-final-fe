import { countryNamesEng } from "@shared/@common/data/countries";

const utils = {
  // 언어 선택
  languageSelect: {
    wrongCountryCode: "Invalid country code",
    countryNames: countryNamesEng,
  },
  // 성별
  translateGender: {
    m: "Male",
    f: "Female",
    n: "Neutral",
  },
  // 생년월일
  convertBirthToLocalString: {
    yearUnit: ".",
    monthUnit: ".",
    dateUnit: ".",
  },
};

export default utils;
