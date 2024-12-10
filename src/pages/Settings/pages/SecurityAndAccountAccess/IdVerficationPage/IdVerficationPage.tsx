import { SettingsContainer } from "@features/settings-setting/ui/components";
import { getFindByEmail } from "@shared/@common/model/selectors";
import { setFindByEmail } from "@shared/@common/model/slices/settingsSlice";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const IdVerficationPage = () => {
  const list = [
    {
      type: "checkbox",
      selector: setFindByEmail,
      comp: {
        text: "ID 인증 라벨 숨기기",
        reducer: getFindByEmail,
      },
      description:
        "사람들이 내 프로필 페이지에서 파란색 체크마크를 탭했을 때 ID 인증 라벨이 표시되지 않도록 숨깁니다.",
      disabled: true,
    },
  ];
  return (
    <MainLayout
      pageTitle="ID 인증"
      backward
      topContent={
        <Description text="신분증을 인증하면 계정을 사칭으로부터 보호하고 프로필에 ID 인증 라벨을 표시할 수 있습니다." />
      }
      bottomContent={
        <>
          {list.map((item, index) => (
            <SettingsContainer item={item} gap={0} key={index} />
          ))}
        </>
      }
    />
  );
};

export default IdVerficationPage;
