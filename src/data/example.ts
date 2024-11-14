import { profile1, profile2, video1, video2 } from "@asset/index";
import TrendType from "@pages/Explore/types/trend";
import UserType from "@pages/Explore/types/user";

const trendExample: TrendType[] = [
  {
    type: "current",
    keyword: "좌석배치도",
    count: 123,
  },

  {
    type: "ko",
    keyword: "종암 경찰서",
    count: 13,
  },
];

const UserList: UserType[] = [
  {
    name: "몰러",
    id: "adfe",
    intro: "ㅁㅇㄹㄴㅁㄹ",
    imgUrl: profile1,
  },
  {
    name: "그냥",
    id: "111adfsfef",
    intro: "이런저런그런메롱 하하힠ㅋ ㄴㅇㄹㄴ엶ㄴㄹ",
    imgUrl: profile2,
  },
];

const postList: any[] = [];

const videoList: any[] = [
  { video: video1 },
  { video: video2 },
  { video: video1 },
  { video: video2 },
];

const userData = {
  name: "몰러",
  image: profile1,
  id: "abc",
  intro: "이게 뭐여?",
  regDate: new Date(),
  followers: ["abc111", "abc222"],
  followings: ["abc111", "abc222"],
};

const currentUserData = {
  userId: "abc",
};

const conversationData = [
  {
    text: "안녕하세요",
    talkDate: new Date(),
    userId: "abc",
  },
  {
    text: "안녕하세요",
    talkDate: new Date(),
    userId: "def",
  },
];

export {
  trendExample,
  UserList,
  postList,
  videoList,
  currentUserData,
  userData,
  conversationData,
};
