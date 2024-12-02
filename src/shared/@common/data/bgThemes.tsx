import { ThemeColorType, ThemeKey } from "../types";

const bgThemes: Record<ThemeKey, ThemeColorType> = {
  light: {
    colorPrimary: "black",
    colorBackground: "white",
    outlineBasic: "2px solid black",
    borderModal: "2px solid transparent",
    borderList: "2px solid black",
    hoverIcon: "rgba(204, 204, 204, 0.5)",
    outlineImage: "2px solid cornflowerblue",
  },
  dark: {
    colorPrimary: "white",
    colorBackground: "black",
    outlineBasic: "2px solid white",
    borderModal: "2px solid white",
    borderList: "2px solid white",
    hoverIcon: "rgba(170, 170, 170, 0.5)",
    outlineImage: "2px solid cornflowerblue",
  },
};

export default bgThemes;
