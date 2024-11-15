interface UserType {
  name: string;
  image: string;
  headerImage: string;
  id: string;
  intro: string;
  location: string;
  website: string;
  regDate: Date;
  followers: string[];
  followings: string[];
  birth: BirthType;
  phone: string;
  email: string;
  isAuthorized: boolean; // 인증 메일과 다른 인증
  isHidden: boolean; // 게시물 공개 여부
  ip: string;
  languages: string[];
  gender: "f" | "m";
}

interface BirthType {
  year: string;
  month: string;
  date: string;
}

interface DropdownListType {
  type: number | string;
  name: number | string;
}

export type { UserType, BirthType, DropdownListType };
