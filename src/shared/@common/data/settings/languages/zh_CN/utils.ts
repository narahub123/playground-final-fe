import { countryNamesZhTW } from "@shared/@common/data/countries";

const utils = {
  // 언어 선택
  languageSelect: {
    wrongCountryCode: "无效的国家代码",
    countryNames: countryNamesZhTW,
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
