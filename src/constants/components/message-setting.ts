const messageSetting = {
  headerTitle: "채팅",
  // api에서 받아와야 하는 내용
  settings: {
    allowMessage: "all",
    filtering: true,
    readIndicator: false,
  },
  heading1: "다음 사용자의 채팅 요청 허용",
  description1: "내가 팔로우 하는 사용자가 보낸 채팅는 항상 받을 수 있습니다.",
  allowMessageListSetup: { checked: "circleChecked", unchecked: "circleEmpty" },
  allowMessageList: [
    {
      type: "none",
      name: "받지 않음",
    },
    {
      type: "verified",
      name: "인증된 사용자",
    },
    {
      type: "all",
      name: "모든 사람",
    },
  ],
  settingCardList: [
    {
      title: "저질스러운 쪽지 필터링하기",
      checked: "squareChecked",
      unchecked: "squareEmpty",
      settings: "filtering",
      description:
        "스팸 또는 저질스러운 내용이 포함된 것으로 파악되는 쪽지 요청을 숨깁니다. 이러한 요청은 쪽지 요청함의 하단에 있는 별도의 받은 쪽지함으로 전송됩니다. 원하는 경우 여전히 확인할 수 있습니다",
    },
    {
      title: "읽음 표시 보기",
      checked: "squareChecked",
      unchecked: "squareEmpty",
      settings: "readIndicator",
      description:
        "쪽지를 주고 받는 사람들이 내가 메시지를 확인했을 때를 알 수 있도록 허용합니다. 읽음 표시는 쪽지 요청에 나타나지 않습니다.",
    },
  ],
};

export default messageSetting;
