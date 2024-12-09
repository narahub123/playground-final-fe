import {
  FaArrowLeft as backward,
  FaCircleCheck as valid,
  FaCircleXmark as invalid,
} from "react-icons/fa6";
import {
  FaRegSquare as checkbox,
  FaCheckSquare as checkedbox,
  FaRegCircle as roundedCheckbox,
  FaCheckCircle as roundedCheckedbox,
} from "react-icons/fa";

import {
  LuX as close,
  LuChevronDown as down,
  LuSearch as search,
  LuUser as user,
  LuKeyRound as key,
  LuDownload as download,
  LuHeartCrack as crackedHeart,
  LuLock as lock,
  LuCopy as apps,
  LuArrowLeftRight as twoWay,
  LuSmartphoneNfc as preferences,
  LuPen as pen,
  LuChevronRight as right,
  LuUsers as users,
  LuPenLine as penLine,
  LuText as content,
  LuVolumeX as mute,
  LuMail as message,
  LuContact as contact,
  LuMapPin as pin,
  LuSlidersHorizontal as filter,
} from "react-icons/lu";
import { CiLight as light, CiDark as dark } from "react-icons/ci";
import {
  RiEyeLine as eye,
  RiEyeOffLine as eyeoff,
  RiAdvertisementLine as ads,
} from "react-icons/ri";
import { GiEarthAsiaOceania as map } from "react-icons/gi";
import { BiBarChart as barChart } from "react-icons/bi";
import { PiPersonSimpleCircle as shortcut } from "react-icons/pi";
import { IoPeopleOutline as delegate } from "react-icons/io5";

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
  search, // 검색
  user, // 유저
  key, // 키
  download, // 다운로드
  crackedHeart, // 금이 간 하트
  lock, // 자물쇠
  apps, // 앱들
  twoWay, // 쌍방향 화살표
  delegate, // 위임
  pen, // 펜
  map, // 지도
  barChart, // 막대 그래프
  shortcut, // 단축키
  right, // 우측 화살표
  users, // 오디언스
  penLine, // 내 게시물
  content, // 표시되는 콘텐츠
  mute, // 뮤트
  message, // 메시지
  contact, // 연락처
  ads, // 광고
  pin, // 맵 핀
  filter, // 알림 필터
  preferences, // 알림 환경 설정
  checkbox, // 체크 박스
  checkedbox, // 체크된 박스
  roundedCheckbox, // 둥근 체크 박스
  roundedCheckedbox, // 둥근 체크된 박스
};

export default ICONS;
