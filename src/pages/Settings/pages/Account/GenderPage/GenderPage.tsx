import styles from "./GenderPage.module.css";
import { SettingsContainer } from "@features/settings-setting/ui/components";
import { getGender } from "@shared/@common/model/selectors";
import { setGender } from "@shared/@common/model/slices/userSlice";
import { Description, Input } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useState } from "react";

const GenderPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const list = [
    {
      type: "checkbox",
      selector: getGender,
      comp: {
        text: "여성",
        reducer: setGender,
        value: "f",
      },
    },
    {
      type: "checkbox",
      selector: getGender,
      comp: {
        text: "남성",
        reducer: setGender,
        value: "m",
      },
    },
  ];

  const item = {
    type: "checkbox",
    selector: getGender,
    comp: {
      text: "성별을 추가하세요.",
      reducer: setGender,
      value: "new",
    },
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
          {list.map((item, index) => (
            <SettingsContainer item={item} gap={0} key={index} isRounded />
          ))}
          <div className={styles.wrapper} onClick={() => setIsOpen(true)}>
            <SettingsContainer item={item} gap={0} isRounded />
          </div>
          {isOpen && (
            <div className={styles[`input-wrapper`]}>
              <Input field="gender" fieldTitle="성별" />
            </div>
          )}
          <div className={styles[`button-container`]}>
            <button className={styles.button}>저장</button>
          </div>
        </>
      }
    />
  );
};

export default GenderPage;
