export type GenderType = "m" | "f" | string;
export type UserRoleType = "USER" | "ADMIN";
export type SocialType = "google" | "naver" | "kakao";

interface UserType {
  userId: string; // 유저 id
  username: string; // 유저 이름
  email: string; // 이메일
  birth: string; // 생년월일
  phone: string[]; // 전화번호 목록
  gender: GenderType; // 성별
  userRole: UserRoleType; // 유저 등급
  country: string; // 국가
  language: string; // 언어
  ip: string; // 가입시 ip 주소
  location: string; // 가입시 주소
  profileImage: string; // 프로필 사진
  profileCoverImage: string; // 프로필 배경 사진
  intro: string; // 자기 소개
  followings: string[]; // 팔로잉
  followers: string[]; // 팔로워
  blockedUsers: string[]; // 블록한 유저
  mutedUsers: string[]; // 뮤트한 유저
  social: string[]; // 소셜 로그인
  isAuthorized: boolean; // 유료 계정 여부
  isAuthenticated: boolean; // 인증 코드 인증 여부
  createdAt: Date; // 등록일
  updatedAt?: Date; // 수정일
}

export default UserType;
