const components = {
  // 프로필 이미지
  profileImage: {
    imgAlt: { login: "'s profile photo", logout: "Profile Photo" },
    ariaLabel: "Click to change the profile picture.",
  },
  // 아미지
  image: {
    imgAlt: "Image",
  },
  // 언어 설정
  colorTheme: {
    colorThemeTitles: {
      cornflowerblue: "default",
      red: "red",
      green: "green",
      yellow: "yellow",
      purple: "purple",
      black: "black",
    },
  },
  // 글자 크기 설정
  fontSize: {
    fontSizeTitles: {
      xs: "extra small",
      s: "small",
      b: "default",
      l: "large",
      xl: "extra large",
    },
  },
  mainHeader: {
    backwardIconTitle: "Go to Previous Page",
  },
  mainContentListLayout: {
    title: ["No search results for"],
    description:
      "There are no results for your input. Please try using different keywords.",
  },
  TopicButton: {
    hideIconTitle: "Hide",
  },
  TopicFollowCard: {
    following: "Following",
    follow: "Follow",
  },
};

export default components;
