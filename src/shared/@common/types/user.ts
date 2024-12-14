export type GenderType = "m" | "f" | string;

interface UserType {
  userId: string;
  username: string;
  phone: string[];
  profileImage: string;
  email: string;
  isAuthenticated: boolean;
  regDate: Date;
  country: string;
  language: string;
  gender: GenderType;
  birth: string;
  intro: string;
  blockedUsers: string[];
  followings: string[];
  followers: string[];
  mutes: string[];
}

export default UserType;
