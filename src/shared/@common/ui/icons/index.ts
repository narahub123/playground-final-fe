import { FaArrowLeft as backward } from "react-icons/fa6";
import { LuX as close } from "react-icons/lu";
import { CiLight as light, CiDark as dark } from "react-icons/ci";

const ICONS = {
  backward, // 뒤로 가기
  wrong: close, // 없는 아이콘 이름을 넣는 경우
  close, // 창 닫기
  dark, // 다크 모드
  light, // 라이트 모드
};

export default ICONS;
