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

export { trendExample, UserList, postList, videoList };
