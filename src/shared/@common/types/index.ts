interface listModalCardType {
  text: string | number; // 목록에 표시될 text
  cardTitle: string;
  iconName?: string;
  value?: string | number;
  url?: string;
}

import { ThemeColorType, ThemeKey } from "./bgThemes";

// Select 컴포넌트에 사용하는 types
import { SelectOptionType } from "./Select";

import UserType from "./user";

export type {
  listModalCardType,
  ThemeColorType,
  ThemeKey,
  SelectOptionType,
  UserType,
};
