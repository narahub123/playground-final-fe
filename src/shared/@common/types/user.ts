export type GenderType = "m" | "f" | string;

interface UserType {
  userId: string;
  username: string;
  phone: string;
  profileImage: string;
  email: string;
  isAuthenticated: boolean;
  regDate: Date;
  language: string;
  gender: GenderType;
  birth: string;
}

export default UserType;
