interface SelectOptionType {
  text: string | number; // 목록에 표시될 값
  optionTitle: string; // 설명
  iconName?: string; // 아이콘이 있다면 추가
  imgSrc?: string; // 이미지가 있는 경우
  imgAlt?: string;
  value?: string | number; // db에 저장될 값
  url?: string; // 링크
}

export type { SelectOptionType };
