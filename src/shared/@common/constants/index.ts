import components from "./components";
import { CHAR_SET, NUMBER_SET } from "./data";
import { USERID_MAX, USERID_MIN, NUMOFRECUSERIDS } from "./admin";

const CONSTANTS = {
  components,
};

export default CONSTANTS;
export {
  // data
  CHAR_SET,
  NUMBER_SET,

  // admin
  USERID_MAX, // 유저 아이디 최대 길이
  USERID_MIN, // 유저 아이디 최소 길이
  NUMOFRECUSERIDS, // 추천 아이디 개수
};
