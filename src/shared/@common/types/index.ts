interface listModalCardType {
  text: string | number; // 목록에 표시될 text
  cardTitle: string;
  iconName?: string;
  value?: string | number;
  url?: string;
}

// Select 컴포넌트에 사용하는 types
import { SelectOptionType } from "./Select";

import UserType, { GenderType, UserRoleType, SocialType } from "./user";

import { SigninType, SigninUserType, SigninUserSettingsType } from "./signin";

// 설정 타입
import {
  SettingsType,
  ColorThemeType,
  ThemeKey,
  ThemeColorType,
  FontSizeType,
  AllowMessageType,
  AutoplayType,
  NotificationsType,
  MutesType,
  TwoFactorAuthentication,
  TaggingWhomType,
  MuteType,
  MuteTargetType,
  MuteDurationType,
  PopularPostsType,
} from "./settings";

// 컴포넌트
import { HyperLinkCardType, InputValueType } from "./components";

// utils
import { alphabetGeneratorModeType } from "./utils";

// hooks
import { ValidationCheckerType } from "./hooks";

export type {
  // user 타입
  GenderType,
  UserRoleType,
  SocialType,

  //
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
  SettingsType,
  AllowMessageType,
  AutoplayType,
  NotificationsType,
  MutesType,
  TwoFactorAuthentication,
  TaggingWhomType,
  MuteType,
  MuteTargetType,
  MuteDurationType,
  PopularPostsType,

  // components
  HyperLinkCardType,
  InputValueType,

  // utils
  alphabetGeneratorModeType,

  // hooks
  ValidationCheckerType,
};
