const replyOptions = {
  all: "모든사람이 답글을 달 수 있습니다.",
  following: "내가 팔로우하는 계정은 답글을 달 수 있습니다.",
  authenticated: "인증된 계정은 답글을 달 수 있습니다.",
  mention: "내가 멘션하는 계정만 답글을 달 수 있습니다.",
};

const replyOptionArr = [
  { type: "all", text: "모든 사람" },
  { type: "following", text: "내가 팔로우한 사람" },
  { type: "authenticated", text: "인증된 사람" },
  { type: "mention", text: "내가 멘션한 사람만" },
];

export { replyOptions, replyOptionArr };
