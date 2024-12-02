interface SigninType {
  user: SigninUserType;
  userSetting: SigninUserSettingsType;
}

interface SigninUserType {
  profileImage?: string;
}

interface SigninUserSettingsType {}

export type { SigninType, SigninUserType, SigninUserSettingsType };
