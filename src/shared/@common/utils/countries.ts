import {
  countryNamesEng,
  countryNamesJap,
  countryNamesKor,
  countryNamesZhCN,
  countryNamesZhTW,
} from "../data/countries";

// 언어 파일 가져오기
const getCountryFile = (langCode: string) => {
  return langCode === "ko-KR"
    ? countryNamesKor
    : langCode === "en-US"
    ? countryNamesEng
    : langCode === "ja-JP"
    ? countryNamesJap
    : langCode === "zh-CN"
    ? countryNamesZhCN
    : langCode === "zh-TW"
    ? countryNamesZhTW
    : countryNamesEng;
};

const countryList = (langCode: string) => {
  const file = Object.entries(getCountryFile(langCode));

  const list = file
    .map((item) => ({
      value: item[0],
      text: item[1],
    }))
    .sort((a, b) => {
      const collator = new Intl.Collator();
      const result = collator.compare(a.text, b.text);

      if (result !== 0) return result;
      else return 1;
    });

  return list;
};

export { getCountryFile, countryList };
