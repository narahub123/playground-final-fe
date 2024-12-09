import { SettingsContainer } from "@features/settings-setting/ui/components";
import { getAutoplay } from "@shared/@common/model/selectors";
import { setAutoplay } from "@shared/@common/model/slices/settingsSlice";
import { MainLayout } from "@shared/pages/layout";

const AutoplayPage = () => {
  const item = {
    text: "자동 재생",
    detail:
      "이 디바이스에서 동영상 및 GIF를 자동으로 재생할지 여부를 선택하세요.",
    type: "checkboxlist",
    selector: getAutoplay,
    comp: [
      {
        text: "셀룰러 데이터 또는 Wi-Fi 사용 시",
        reducer: setAutoplay,
        value: "on",
      },
      {
        text: "사용하지 않음",
        reducer: setAutoplay,
        value: "off",
      },
    ],
  };
  return (
    <MainLayout
      pageTitle="자동 재생"
      backward
      topContent={<></>}
      bottomContent={<SettingsContainer item={item} gap={0} />}
    />
  );
};

export default AutoplayPage;
