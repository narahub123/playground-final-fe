import { useSelector } from "react-redux";
import { getLanguage } from "../../selectors";
import { getLangObjValue } from "@shared/@common/utils";

const useLanguageMode = (fields: string[]) => {
  const lang = useSelector(getLanguage);

  return getLangObjValue(lang, fields);
};

export default useLanguageMode;
