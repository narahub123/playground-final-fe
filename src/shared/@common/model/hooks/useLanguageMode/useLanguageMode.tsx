import { useSelector } from "react-redux";
import { getLanguage } from "../../selectors";
import { getLangObjValue } from "@shared/@common/utils";

const useLanguageMode = (field: string) => {
  const lang = useSelector(getLanguage);

  return getLangObjValue(lang, [field]);
};

export default useLanguageMode;
