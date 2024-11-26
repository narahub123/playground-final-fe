import { useSelector } from "react-redux";
import { getBgTheme } from "../../selectors";
import { bgThemes } from "@shared/@common/data";
import { ThemeKey } from "@shared/@common/types";

const useGetBGThemeColor = (parameter: keyof (typeof bgThemes)["light"]) => {
  const bgTheme = useSelector(getBgTheme) as ThemeKey;

  const themeColor = bgThemes[bgTheme]?.[parameter];
  return themeColor;
};

export default useGetBGThemeColor;
