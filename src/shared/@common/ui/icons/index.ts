import { FaArrowLeft as backward } from "react-icons/fa6";
import { LuX as close } from "react-icons/lu";
import { CiLight as light, CiDark as dark } from "react-icons/ci";
import { RiEyeLine as eye, RiEyeOffLine as eyeoff } from "react-icons/ri";

const ICONS = {
  backward, // 뒤로 가기
  wrong: close, // 없는 아이콘 이름을 넣는 경우
  close, // 창 닫기
  dark, // 다크 모드
  light, // 라이트 모드
  eye, // 비밀번호 보이기
  eyeoff, // 비밀번호 숨기기
};

export default ICONS;
