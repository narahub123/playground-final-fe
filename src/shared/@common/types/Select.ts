interface SelectListCardType {
  text: string | number; // 목록에 표시될 값
  cardTitle: string; // 설명
  iconName?: string; // 아이콘이 있다면 추가
  value?: string | number; // db에 저장될 값
  url?: string; // 링크
}

export type { SelectListCardType };
