type GenderType = "m" | "f" | "n";

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
