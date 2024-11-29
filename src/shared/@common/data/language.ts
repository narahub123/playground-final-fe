import { flags } from "../assets";
import { SelectOptionType } from "../types";
import countryNames from "./countries";

const getCountryCode = (code: string) => {
  return code.split("-")[1].toLowerCase();
};

const getImgSrc = (countryCode: string) => {
  return flags[countryCode as keyof typeof flags] || flags["un"];
};

const listLanguageList: SelectOptionType[] = [
  {
    value: "ko-KR",
    text: "한국어",
    optionTitle: "한국어",
    get imgSrc() {
      return (
        flags[getCountryCode(this.value as string) as keyof typeof flags] ||
        flags["un"]
      );
    },
    get imgAlt() {
      return countryNames[
        (getCountryCode(this.value as string) as keyof typeof countryNames) ||
          "잘못된 국가 코드"
      ];
    },
  },
  {
    value: "en-US",
    text: "영어",
    optionTitle: "영어",
    get imgSrc() {
      return (
        flags[getCountryCode(this.value as string) as keyof typeof flags] ||
        flags["un"]
      );
    },
    get imgAlt() {
      return countryNames[
        (getCountryCode(this.value as string) as keyof typeof countryNames) ||
          "잘못된 국가 코드"
      ];
    },
  },
  {
    value: "ja-JP",
    text: "일본어",
    optionTitle: "일본어",
    get imgSrc() {
      return (
        flags[getCountryCode(this.value as string) as keyof typeof flags] ||
        flags["un"]
      );
    },
    get imgAlt() {
      return countryNames[
        (getCountryCode(this.value as string) as keyof typeof countryNames) ||
          "잘못된 국가 코드"
      ];
    },
  },
  {
    value: "zh-CN",
    text: "중국어 간체",
    optionTitle: "중국어 간첸",
    get imgSrc() {
      return (
        flags[getCountryCode(this.value as string) as keyof typeof flags] ||
        flags["un"]
      );
    },
    get imgAlt() {
      return countryNames[
        (getCountryCode(this.value as string) as keyof typeof countryNames) ||
          "잘못된 국가 코드"
      ];
    },
  },
  {
    value: "zh-TW",
    text: "중국어 번체",
    optionTitle: "중국어 번체",
    get imgSrc() {
      return (
        flags[getCountryCode(this.value as string) as keyof typeof flags] ||
        flags["un"]
      );
    },
    get imgAlt() {
      return countryNames[
        (getCountryCode(this.value as string) as keyof typeof countryNames) ||
          "잘못된 국가 코드"
      ];
    },
  },
];

export { listLanguageList };
