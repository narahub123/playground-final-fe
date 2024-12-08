const listModalExample = [
  { value: 1, text: "실패", cardTitle: "실패", iconName: "backward" },
  { value: 2, text: "그냥", cardTitle: "그냥", iconName: "" },
  {
    url: "/settings",
    text: "ㅋㅋㅋㅋㅋㅋ",
    cardTitle: "ㅋㅋㅋㅋㅋㅋ",
    iconName: "backward",
  },
  { value: 4, text: "안녕", cardTitle: "안녕", iconName: "close" },
];

const userExample = {
  userId: "abcdefg",
  phone: "01001010101",
  email: "example@example.com",
  isAuthenticated: false,
  isVisible: false,
  regDate: new Date(),
  language: "ko-KR",
  gender: "f",
  birth: "20060515",
};

export { listModalExample, userExample };
