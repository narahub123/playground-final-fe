import {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
} from "@features/settings-setting/types";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { getBgTheme } from "@shared/@common/model/selectors";
import { setBackgroundTheme } from "@shared/@common/model/slices/settingsSlice";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const ContactsPage = () => {
  const list = [
    {
      title: "검색 가능성",
      detail:
        "내 이메일 주소 또는 휴대폰 번호를 알고 있는 사람들이 PG에서 나를 찾고 연락할 수 있게 할지 여부를 결정합니다.",
      type: "checkbox",
      selector: getBgTheme,
      comp: {
        text: "내 이메일 주소를 알고 있는 사람들이 PG에서 나를 찾을 수 있도록 허용",
        reducer: setBackgroundTheme,
      },
      description:
        "내 이메일 주소를 알고 있는 사람들이 PG에서 나를 찾고 연락할 수 있도록 합니다.",
    },
    {
      type: "checkbox",
      selector: getBgTheme,
      comp: {
        text: "내 휴대폰 번호를 알고 있는 사람들이 PG에서 나를 찾을 수 있도록 허용",
        reducer: setBackgroundTheme,
      },
      description:
        "내 휴대폰 번호를 알고 있는 사람이 PG에서 나를 찾고 연락할 수 있도록 합니다.",
    },
    {
      title: "연락처",
      detail: "내모바일 디바이스에서 가져온 연락처를 관리합니다. ",
      type: "card",
      selector: getBgTheme,
      comp: {
        title: "연락처 관리",
        path: "/settings/contacts_dashboard",
      },
      top: true,
    },
  ];
  return (
    <MainLayout
      pageTitle="계정찾기 및 연락처"
      backward
      topContent={
        <Description
          text={"계정찾기 설정을 제어하고 가져온 연락처를 관리합니다."}
        />
      }
      bottomContent={
        <>
          {(
            list as (
              | SettingsBranchListContainerType
              | SettingsCheckBoxContainerType
            )[]
          ).map((item, index) => (
            <SettingsContainer item={item} key={index} />
          ))}
        </>
      }
    />
  );
};

export default ContactsPage;
