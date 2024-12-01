// 언어를 선택할 수 있는 셀렉트 컴포넌트
import { flags } from "@shared/@common/assets";
import { SelectOptionType } from "@shared/@common/types";
import { getCountryCode, getLangObjValue } from "@shared/@common/utils";

// 공통 데이터
const langList = [
  { value: "ko-KR", text: "한국어" },
  { value: "en-US", text: "English" },
  { value: "ja-JP", text: "日本語" },
  { value: "zh-CN", text: "简体中文" },
  { value: "zh-TW", text: "繁體中文" },
];

// 언어 목록 데이터
const languageList: (lang: string) => SelectOptionType[] = (lang: string) => {
  return langList.map((item) => ({
    value: item.value,
    text: item.text,
    optionTitle: item.text,
    imgSrc: flags[(getCountryCode(item.value) as keyof typeof flags) || "un"],
    imgAlt:
      getLangObjValue(lang, "countryNames", getCountryCode(item.value)) ||
      getLangObjValue(lang, "languageSelect", "wrongCountryCode"),
  }));
};

export { languageList };
