// 설정 타입
type SettingsType = {
  bgTheme: string;
  language: string;
  colorTheme: ColorThemeType;
  fontSize: FontSizeType;
  isVisible: boolean;
};

// 배경 설정 키
type ThemeKey = "light" | "dark";

// 배경 설정 색상 타입
type ThemeColorType = {
  colorPrimary: string;
  colorBackground: string;
  outlineBasic: string;
  borderModal: string;
  borderList: string;
  hoverIcon: string;
  outlineImage: string;
};

// 색상 설정 색상 타입
type ColorThemeType =
  | "cornflowerblue"
  | "red"
  | "green"
  | "yellow"
  | "purple"
  | "black";

type FontSizeType = "xs" | "s" | "b" | "l" | "xl";

export type {
  SettingsType,
  ColorThemeType,
  ThemeKey,
  ThemeColorType,
  FontSizeType,
};
