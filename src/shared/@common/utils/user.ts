import { langList } from "../data";
import { GenderType } from "../types/user";

const getGender = (gender: GenderType) => {
  if (gender === "m") {
    return "남성";
  } else if (gender === "f") {
    return "여성";
  } else if (gender === "n") {
    return "중성";
  }
};

const getBirth = (birth: string) => {
  const year = Number(birth.slice(0, 4));
  const month = Number(birth.slice(5, 6));
  const date = Number(birth.slice(7, 8));

  return `${year}년${month}월${date}일`;
};

const calculateAge = (birth: string) => {
  const year = Number(birth.slice(0, 4));

  const thisYear = new Date().getFullYear();

  return thisYear - year;
};

const getLangName = (lang: string) => {
  return langList.find((item) => item.value === lang);
};

export { getGender, getBirth, calculateAge, getLangName };
