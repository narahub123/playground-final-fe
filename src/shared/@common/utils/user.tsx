import { langList } from "../data";
import { useLanguageMode } from "../model/hooks";
import { GenderType } from "../types/user";

const translateGender = (gender: GenderType) => {
  const { m, f, n } = useLanguageMode(["utils", "translateGender"]);
  if (gender === "m") {
    return m;
  } else if (gender === "f") {
    return f;
  } else if (gender === "n") {
    return n;
  }
};

const convertBirthToLocalString = (birth: string) => {
  const { yearUnit, monthUnit, dateUnit } = useLanguageMode([
    "utils",
    "convertBirthToLocalString",
  ]);
  const year = Number(birth.slice(0, 4));
  const month = Number(birth.slice(5, 6));
  const date = Number(birth.slice(7, 8));

  return `${year}${yearUnit}${month}${monthUnit}${date}${dateUnit}`;
};

const calculateAge = (birth: string) => {
  const year = Number(birth.slice(0, 4));

  const thisYear = new Date().getFullYear();

  return thisYear - year;
};

const getLangName = (lang: string) => {
  return langList.find((item) => item.value === lang);
};

export {
  translateGender,
  convertBirthToLocalString,
  calculateAge,
  getLangName,
};
