import styles from "./LocationPage.module.css";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { getFindByEmail } from "@shared/@common/model/selectors";
import { setFindByEmail } from "@shared/@common/model/slices/settingsSlice";
import { Description, HyperLink } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const LocationPage = () => {
  const item = {
    type: "checkbox",
    selector: getFindByEmail,
    comp: {
      text: "게시물에 위치 정보 넣기",
      reducer: setFindByEmail,
    },
  };
  return (
    <MainLayout
      pageTitle="게시물에 위치 정보 넣기"
      backward
      topContent={
        <Description text="활성화하면 게시물에 위치 정보를 첨부할 수 있습니다." />
      }
      bottomContent={
        <>
          <SettingsContainer item={item} gap={0} />
          {/* 모달창이 뜰 수 있게 변경할 것 */}
          <HyperLink
            text="게시물에 추가된 모든 위치 정보를 삭제합니다."
            path=""
            out={false}
            className={styles.hyperlink}
          />
        </>
      }
    />
  );
};

export default LocationPage;
