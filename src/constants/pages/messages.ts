const messages = {
  pageName: "messages",
  title: "채팅",
  searchPlaceholder: "채팅 검색하기",
  empty: {
    title: "",
    description: "사람, 그룹 또는 쪽지를 검색해 보세요.",
  },
  resultEmpty: {
    title: "에 대한 검색 결과 없음",
    description: "입력하신 용어에 대한 검색 결과가 없습니다.",
  },
  moreList: [
    {
      type: "pin",
      text: "대화 메인에 올리기",
    },
    {
      type: "block",
      text: "대화 일시중지",
    },
    {
      type: "report",
      text: "대화 신고하기",
    },
    {
      type: "delConversation",
      text: "대화 삭제",
    },
  ],
  tabList: [
    { name: "전체", url: "" },
    { name: "사용자", url: "" },
    { name: "그룹", url: "" },
    { name: "채팅", url: "" },
  ],
  resultFields: {
    users: "사용자",
    groups: "그룹",
    conversations: "채팅",
  },
  settings: {
    allowMessage: "all",
    filtering: true,
    readIndicator: false,
  },
};

export default messages;
