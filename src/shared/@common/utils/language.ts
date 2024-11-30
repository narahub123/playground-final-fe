import { language } from "../data";

const getLangObjValue = (lang: string, ObjName: string, key: string) => {
  const langObj = language[lang as keyof typeof language];

  const compoObj = langObj[ObjName as keyof typeof langObj];

  return compoObj[key as keyof typeof compoObj];
};

export { getLangObjValue };
