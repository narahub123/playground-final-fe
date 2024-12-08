import { countryNamesJap } from "@shared/@common/data/countries";

const utils = {
  // 언어 선택
  languageSelect: {
    wrongCountryCode: "無効な国コード",
    countryNames: countryNamesJap,
  },
  // 성별
  translateGender: {
    m: "男性",
    f: "女性",
    n: "中性",
  },
  // 생년월일
  convertBirthToLocalString: {
    yearUnit: "年",
    monthUnit: "月",
    dateUnit: "日",
  },
};

export default utils;
