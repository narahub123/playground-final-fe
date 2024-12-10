import styles from "./GenderPage.module.css";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { getGender } from "@shared/@common/model/selectors";
import { setGender } from "@shared/@common/model/slices/userSlice";
import { Description } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";

const GenderPage = () => {
  const item = {
    type: "checkboxlist",
    selector: getGender,
    comp: [
      {
        text: "여성",
        reducer: setGender,
        value: "f",
      },
      {
        text: "남성",
        reducer: setGender,
        value: "m",
      },
      {
        text: "성별을 추가하세요",
        reducer: setGender,
        value: "new",
      },
    ],
  };
  return (
    <MainLayout
      pageTitle="성별"
      backward
      topContent={
        <Description
          text={
            "아직 성별을 지정하지 않은 경우에는 계정의 프로필과 활동을 바탕으로 성별이 추정됩니다. 이 정보는 공개적으로 표시되지 않습니다."
          }
        />
      }
      bottomContent={
        <>
          <SettingsContainer item={item} gap={0} />
          <div className={styles[`button-container`]}>
            <button className={styles.button}>저장</button>
          </div>
        </>
      }
    />
  );
};

export default GenderPage;
