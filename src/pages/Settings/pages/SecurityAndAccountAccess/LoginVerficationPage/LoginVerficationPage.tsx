import { SettingsContainer } from "@features/settings-setting/ui/components";
import { getTwoFactorAuthentication } from "@shared/@common/model/selectors";
import { setTwoFactorAuthentication } from "@shared/@common/model/slices/settingsSlice";
import { MainLayout } from "@shared/pages/layout";

const LoginVerficationPage = () => {
  const list = [
    {
      title: "2단계 인증",
      type: "checkbox",
      selector: getTwoFactorAuthentication,
      comp: {
        text: "문자 메시지",
        reducer: setTwoFactorAuthentication,
        value: "sms",
      },
      description:
        "PG에 로그인할 때 입력할 인증 코드가 포함된 문자 메시지를 휴대폰으로 받습니다.",
      top: true,
    },
    {
      type: "checkbox",
      selector: getTwoFactorAuthentication,
      comp: {
        text: "인증 앱",
        reducer: setTwoFactorAuthentication,
        value: "app",
      },
      description:
        "모바일 인증 앱을 사용하여 PG에 로그인할 때마다 입력할 인증 코드를 받으세요.",
      top: true,
    },
    {
      type: "checkbox",
      selector: getTwoFactorAuthentication,
      comp: {
        text: "보안 키",
        reducer: setTwoFactorAuthentication,
        value: "key",
      },
      description:
        "PG에 로그인할 때 컴퓨터에 입력하거나 모바일 디바이스와 동기화되는 보안 키를 사용하세요. 지원되는 모바일 디바이스나 웹 브라우저를 사용해야 합니다.",
      top: true,
    },
  ];
  return (
    <MainLayout
      pageTitle="2단계 인증"
      backward
      topContent={<></>}
      bottomContent={
        <>
          {list.map((item, index) => (
            <SettingsContainer item={item} key={index} gap={0} />
          ))}
        </>
      }
    />
  );
};

export default LoginVerficationPage;
