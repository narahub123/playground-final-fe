import {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
} from "@features/settings-setting/types";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { getFindByEmail } from "@shared/@common/model/selectors";
import { setFindByEmail } from "@shared/@common/model/slices/settingsSlice";
import { MainLayout } from "@shared/pages/layout";

const NotificationAdvancedFilters = () => {
  const list = [
    {
      title: "다음 계정의 알림 뮤트하기:",
      type: "checkbox",
      selector: getFindByEmail,
      comp: {
        text: "내가 팔로하지 않는 계정",
        reducer: setFindByEmail,
      },
    },
    {
      type: "checkbox",
      selector: getFindByEmail,
      comp: {
        text: "나를 팔로하지 않는 계정",
        reducer: setFindByEmail,
      },
    },
    {
      type: "checkbox",
      selector: getFindByEmail,
      comp: {
        text: "새 계정",
        reducer: setFindByEmail,
      },
    },
    {
      type: "checkbox",
      selector: getFindByEmail,
      comp: {
        text: "기본 프로필 이미지를 사용하는 계정",
        reducer: setFindByEmail,
      },
    },
    {
      type: "checkbox",
      selector: getFindByEmail,
      comp: {
        text: "이메일을 인증하지 않은 계정",
        reducer: setFindByEmail,
      },
    },
    {
      type: "checkbox",
      selector: getFindByEmail,
      comp: {
        text: "휴대폰 번호를 인증하지 않는 계정",
        reducer: setFindByEmail,
      },
      description:
        "이 필터는 내가 팔로우하는 사람에게서 받는 알림에는 영향을 주지 않습니다.",
    },
  ];
  return (
    <MainLayout
      pageTitle="뮤트 상태의 알림"
      backward
      topContent={<></>}
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

export default NotificationAdvancedFilters;
