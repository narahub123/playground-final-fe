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
