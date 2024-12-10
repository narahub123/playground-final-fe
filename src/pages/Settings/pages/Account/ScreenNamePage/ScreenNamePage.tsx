import { getUserId } from "@shared/@common/model/selectors";
import styles from "./ScreenNamePage.module.css";
import { InputValueType } from "@shared/@common/types";
import { Input, Title } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useState } from "react";
import { useSelector } from "react-redux";

const ScreenNamePage = () => {
  const userId = useSelector(getUserId);
  // 아이디 값
  const [value, setValue] = useState<InputValueType>(userId);
  // 유효성
  const [isValid, setIsValid] = useState(true);

  return (
    <MainLayout
      pageTitle="사용자 이름 변경"
      backward
      topContent={<></>}
      bottomContent={
        <>
          <div className={styles[`input-container`]}>
            <Input
              field="userId"
              fieldTitle="사용자 아이디"
              value={value}
              setValue={setValue}
              isValid={isValid}
              setIsValid={setIsValid}
              valueMaxLength={15}
              validation={/^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,15}$/} // 유효성 검사
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
