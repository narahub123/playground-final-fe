interface listModalCardType {
  text: string | number; // 목록에 표시될 text
  cardTitle: string;
  iconName?: string;
  value?: string | number;
  url?: string;
}

import { ThemeColorType, ThemeKey } from "./bgThemes";

export type { listModalCardType, ThemeColorType, ThemeKey };
