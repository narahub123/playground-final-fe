import {
  FaArrowLeft as backward,
  FaCircleCheck as valid,
  FaCircleXmark as invalid,
} from "react-icons/fa6";
import {
  LuX as close,
  LuChevronDown as down,
  LuSearch as search,
} from "react-icons/lu";
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
  valid, // 유효함 표시
  invalid, // 유효하지 않음 표시
  down, // dropdown 닫힘 표시
  search, // 검색 아이콘
};

export default ICONS;
