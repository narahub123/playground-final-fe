const notifications = {
  pageName: "notifications",
  title: "알림",
  tabList: [
    { name: "전체", url: "" },
    { name: "인증됨", url: "verified" },
    { name: "멘션", url: "mentions" },
  ],
  empty: {
    title: "아직 여기에 아무것도 없습니다.",
    description: {
      all: "모든 알림 결과가 여기에 표시됩니다.",
      verified: "알림이 있으면 여기에 표시됩니다.",
      mentions: "누군가가 나를 멘션하면 여기에 표시됩니다.",
    },
  },
  notificationCard: {
    imageWidth: "40px",
    text: "님의 새게시물 알림",
  },
};

export default notifications;
