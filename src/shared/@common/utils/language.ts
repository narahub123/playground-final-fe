import { language } from "../data";

// 언어 설정에 맞는 값 가져오기
const getLangObjValue = (lang: string, ObjNames: string[]) => {
  const langObj = language[lang as keyof typeof language];

  const compoObj = ObjNames.reduce((acc: any, name: string) => {
    if (acc && name in acc) {
      return acc[name as keyof typeof acc];
    }

    return undefined;
  }, langObj);

  return compoObj;
};

export { getLangObjValue };
