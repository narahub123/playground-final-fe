import { SettingsContainer } from "@features/settings-setting/ui/components";
import { setBackgroundTheme } from "@shared/@common/model/slices/settingsSlice";
import { MainLayout } from "@shared/pages/layout";

const MessageSettingPage = () => {
  const list = [
    {
      title: "다음 사용자의 쪽지 요청 허용",
      type: "checkbox",
      comp: {
        text: "받지 않음",
        reducer: setBackgroundTheme,
        initialValue: false,
      },
      description: "",
    },
    {
      title: "",
      type: "checkbox",
      comp: {
        text: "저질스러운 쪽지 필터링하기",
        reducer: setBackgroundTheme,
        initialValue: true,
      },
      description:
        "스팸 또는 저질스러운 내용이 포함된 것으로 파악되는 쪽지 요청을 숨깁니다. 이러한 요청은 쪽지 요청함의 하단에 있는 별도의 받은 쪽지함으로 전송됩니다. 원하는 경우 여전히 확인할 수 있습니다.",
    },
    {
      title: "",
      type: "checkbox",
      comp: {
        text: "읽음 표시 보기",
        reducer: setBackgroundTheme,
        initialValue: false,
      },
      description:
        "쪽지를 주고 받는 사람들이 내가 메시지를 확인했을 때를 알 수 있도록 허용합니다. 읽음 표시는 쪽지 요청에 나타나지 않습니다.",
    },
  ];
  return (
    <MainLayout
      pageTitle="쪽지"
      backward
      topContent={<></>}
      bottomContent={<SettingsContainer list={list} />}
    />
  );
};

export default MessageSettingPage;
