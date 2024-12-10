import styles from "./ScreenNamePage.module.css";
import { InputValueType } from "@shared/@common/types";
import { Input, Title } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useState } from "react";

const ScreenNamePage = () => {
  // 아이디 값
  const [value, setValue] = useState<InputValueType>("");
  // 유효성
  const [isValid, setIsValid] = useState(false);
  return (
    <MainLayout
      pageTitle="사용자 이름 변경"
      backward
      topContent={<></>}
      bottomContent={
        <>
          <div className={styles[`input-container`]}>
            <Input
              field="username"
              fieldTitle="사용자 아이디"
              value={value}
              setValue={setValue}
              isValid={isValid}
              setIsValid={setIsValid}
            />
          </div>
          <div className={styles[`recom-container`]}>
            <Title text="추천" />
          </div>
          <div className={styles[`button-container`]}>
            <button
              className={`${styles.button} ${
                isValid ? undefined : styles.invalid
              }`}
            >
              {"저장"}
            </button>
          </div>
        </>
      }
    />
  );
};

export default ScreenNamePage;
