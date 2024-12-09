import {
  SettingsBranchListContainerType,
  SettingsCheckBoxContainerType,
} from "@features/settings-setting/types";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { getDataSaver } from "@shared/@common/model/selectors";
import { setDataSaver } from "@shared/@common/model/slices/settingsSlice";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const DataPage = () => {
  const list = [
    {
      type: "checkbox",
      selector: getDataSaver,
      comp: {
        text: "데이터 세이버",
        reducer: setDataSaver,
      },
      description:
        "이 항목을 선택하면 PG에서 네트워크 데이터를 덜 사용하게 됩니다.",
    },
    {
      type: "card",
      comp: {
        title: "자동 재생",
        expl: "셀룰러 데이터 또는 Wi-Fi 사용 시",
        path: "/settings/autoplay",
      },
    },
  ];
  return (
    <MainLayout
      pageTitle="데이터 사용량"
      backward
      topContent={
        <Description text="PG는 이 디바이스에서 사용자의 일부 네트워크 데이터를 사용하는 방식을 제한합니다." />
      }
      bottomContent={
        <>
          {(
            list as (
              | SettingsBranchListContainerType
              | SettingsCheckBoxContainerType
            )[]
          ).map((item, index) => (
            <SettingsContainer item={item} gap={0} key={index} />
          ))}
        </>
      }
    />
  );
};

export default DataPage;
