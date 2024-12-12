import { MainLayout } from "@shared/pages/layout";
import styles from "./PasswordPage.module.css";
import { Button, HyperLink, Input } from "@shared/@common/ui/components";
import { useState } from "react";
import { InputValueType } from "@shared/@common/types";
import { useLanguageMode } from "@shared/@common/model/hooks";
import useValidationChecker from "@shared/@common/model/hooks/useValidationChecker";

const PasswordPage = () => {
  // 현재 비밀번호
  const [value, setValue] = useState<InputValueType>("");
  const [isValid, setIsValid] = useState(false);

  // 새 비밀번호
  const [newPw, setNewPw] = useState<InputValueType>("");
  const [isNewPwValid, setIsNewPwValid] = useState(false);

  // 비밀번호 확인
  const [newPwConfirm, setNewPwConfirm] = useState<InputValueType>("");
  const [isNewPwConfirmValid, setIsNewPwConfirmValid] = useState(false);

  // 새 비밀번호와 비밀번호 확인이 일치하는지 여부 확인
  const isMatched = newPw === newPwConfirm;

  const {
    pageTitle,
    fieldTitle1,
    hyperlink,
    fieldTitle2,
    fieldTitle3,
    validation,
    validations,
    button,
  } = useLanguageMode(["pages", "PasswordPage"]);

  const { errorMessage } = useValidationChecker(
    (newPw as string) || (newPwConfirm as string),
    validations
  );

  console.log(errorMessage);

  // DB에 직접 저장함
  const handleClick = () => {};
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<></>}
      bottomContent={
        <div className={styles.container}>
          <div className={styles.current}>
            <Input
              field="password"
              fieldTitle={fieldTitle1}
              value={value}
              setValue={setValue}
              setIsValid={setIsValid}
              isValid={isValid}
            />
            <HyperLink text={hyperlink} className={styles.text} />
          </div>
          <div className={styles.new}>
            <Input
              field="password"
              fieldTitle={fieldTitle2}
              value={newPw}
              setValue={setNewPw}
              isValid={isNewPwValid}
              setIsValid={setIsNewPwValid}
              validation={validation}
              errorMessage={errorMessage}
            />
            <Input
              field="password"
              fieldTitle={fieldTitle3}
              value={newPwConfirm}
              setValue={setNewPwConfirm}
              isValid={isNewPwConfirmValid}
              setIsValid={setIsNewPwConfirmValid}
              validation={validation}
              errorMessage={errorMessage}
            />
          </div>
          <div className={styles.button}>
            <Button
              text={button.text}
              handleClick={handleClick}
              // 새비밀번호가 유효하고 비밀번호 확인이 유효하고 새비밀번호와 비밀번호 확인이 일치하는 경우에 유효함
              isValid={isNewPwValid && isNewPwConfirmValid && isMatched}
            />
          </div>
        </div>
      }
    />
  );
};

export default PasswordPage;
