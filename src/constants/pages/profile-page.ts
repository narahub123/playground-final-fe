const profilePage = {
  pageName: "profilePage",
  title: "프로필",
  tabList: [
    { name: "게시물", url: "" },
    { name: "답글", url: "with_replies" },
    { name: "미디어", url: "media" },
    { name: "맘에 들어요", url: "likes" },
  ],
  birthPrivacyLevels: [
    { type: "public", name: "공개" },
    { type: "followings", name: "내 팔로워" },
    { type: "followers", name: "내가 팔로우하는 사람들" },
    { type: "followingsAndFollowers", name: "나와 서로 팔로우하고 있습니다." },
    { type: "private", name: "비공개" },
  ],
  headerImageAlt: "헤더 이미지",
  profileImageWidth: "96px",
  editProfileButtonTitle: "프로필 수정",
  regDate: "가입일",
  following: "팔로우 중",
  follower: "팔로워",
  profileModalTitle: "프로필 수정",
  saveUpdatedProfileButton: "저장",
  addImageButton: {
    option: "addImage",
    color: "white",
    fontSize: "28px",
  },
  deleteImageButton: {
    option: "addImage",
    color: "white",
    fontSize: "28px",
  },
  nameInputTitle: "이름",
  introTextareaTitle: "자기소개",
  locationInputTitle: "위치",
  websiteInputTitle: "웹사이트",
  birthContainerTitle: "생년월일",
  bithEditButton: {
    cancel: "취소",
    update: "수정",
  },
  editBirthWarning1:
    "계정을 사용하는 사람의 생년월일을 입력해 주세요. 비즈니스, 이벤트 또는 고양이를 위한 계정인 경우에도 마찬가지입니다.",
  editBirthWarning2:
    "PlayGround는 광고를 포함한 사용자 경험을 맞춤 설정하기 위해 사용자의 연령을 사용합니다.",
  privacy: {
    title: "공개대상",
    detail: "PlayGround에서 내 생일을 공개할 대상을 정할 수 있습니다.",
    monthDropdownTitle: "태어난 달과 날짜",
    yearDropdownTitle: "년",
  },
  deleteBirth: "생년월일 삭제",
  nameMaxLength: 50,
  introMaxLength: 160,
};

export default profilePage;
