interface listModalCardType {
  text: string | number; // 목록에 표시될 text
  cardTitle: string;
  iconName?: string;
  value?: string | number;
  url?: string;
}

// Select 컴포넌트에 사용하는 types
import { SelectOptionType } from "./Select";

import UserType from "./user";
import { SigninType, SigninUserType, SigninUserSettingsType } from "./signin";

import {
  ColorThemeType,
  ThemeKey,
  ThemeColorType,
  FontSizeType,
} from "./settings";

export type {
  listModalCardType,
  ThemeColorType,
  ThemeKey,
  SelectOptionType,
  UserType,
  SigninType,
  SigninUserType,
  SigninUserSettingsType,
  ColorThemeType,
  FontSizeType,
};
