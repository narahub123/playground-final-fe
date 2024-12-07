import {
  CheckBoxType,
  SettingsBranchType,
} from "@features/settings-setting/types/data";
import styles from "./SecurityPage.module.css";
import {
  CheckBox,
  SettingsBranchCard,
} from "@features/settings-setting/ui/components";
import { setBackgroundTheme } from "@shared/@common/model/slices/settingsSlice";
import { Description, Title } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

interface SettingsContainerType {
  title: string;
  type: string;
  description: string;
}

interface SettingsBranchListContainerType extends SettingsContainerType {
  comp: SettingsBranchType;
}

interface SettingsCheckBoxContainerType extends SettingsContainerType {
  comp: CheckBoxType;
}

const SecurityPage = () => {
  const list: (
    | SettingsBranchListContainerType
    | SettingsCheckBoxContainerType
  )[] = [
    {
      title: "2단계 인증",
      type: "card",
      comp: {
        title: "2단계 인증",
        path: "/settings/account/login_verification",
      },
      description:
        "PlayGround 비밀번호 외에 두 번째 인증 방법을 요구하도록 하여 무단 액세스로부터 계정을 보호하세요. 문자 메시지, 인증 앱 또는 보안 키 중에서 선택할 수 있습니다.",
    },
    {
      title: "ID 인증",
      type: "card",
      comp: {
        title: "ID 인증",
        path: "/settings/account/id_verification",
      },
      description:
        "계정의 진위 여부를 확인하기 위해 승인된 형식의 신분증을 업로드해 주세요. 보내주신 정보는 신원 확인을 위해서만 사용되며 안전하게 보안 처리됩니다. ",
    },
    {
      title: "비밀번호 재설정",
      type: "checkbox",
      comp: {
        text: "비밀번호 재설정 보호",
        reducer: setBackgroundTheme,
        initialValue: false,
      },
      description:
        "추가적인 보호 조치로서, PlayGround 비밀번호를 재설정하려면 이메일 주소 또는 휴대폰 번호를 확인해야 합니다",
    },
  ];
  return (
    <MainLayout
      pageTitle="보안"
      backward
      topContent={<Description text="계정의 보안을 관리합니다." />}
      bottomContent={
        <>
          {list.map((item) => {
            const { title, type, comp, description } = item;

            return (
              <div className={styles.section}>
                <Title text={title} />
                {type === "card" ? (
                  <SettingsBranchCard item={comp as SettingsBranchType} />
                ) : (
                  <CheckBox item={comp as CheckBoxType} />
                )}
                <Description text={description} />
              </div>
            );
          })}
        </>
      }
    />
  );
};

export default SecurityPage;
