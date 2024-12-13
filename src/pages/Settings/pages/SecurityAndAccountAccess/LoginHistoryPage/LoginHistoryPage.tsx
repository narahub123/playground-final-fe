import { MainLayout } from "@shared/pages/layout";
import styles from "./LoginHistoryPage.module.css";
import { useLanguageMode } from "@shared/@common/model/hooks";
import {
  Button,
  Description,
  HyperLink,
  Input,
  Title,
} from "@shared/@common/ui/components";
import { useState } from "react";
import { InputValueType } from "@shared/@common/types";
import { useSelector } from "react-redux";
import { getLoginHistory } from "@shared/@common/model/selectors";

const LoginHistoryPage = () => {
  const [value, setValue] = useState<InputValueType>("");
  const [isValid, setIsValid] = useState(false);

  // 비밀번호 인증 여부
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // 로그인 기록
  const loginHistory = useSelector(getLoginHistory);

  // 비밀번호 인증이 되면 로그인 기록을 볼 수 있음

  const {
    pageTitle,
    description,
    heading1,
    expl1,
    fieldTitle,
    hyperlink,
    button,
  } = useLanguageMode(["pages", "LoginHistoryPage"]);

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<Description text={description} />}
      bottomContent={
        isAuthenticated ? (
          <></>
        ) : (
          <>
            <div className={styles.section}>
              <Title text={heading1} />
              <Description text={expl1} />
              <Input
                field="password"
                fieldTitle={fieldTitle}
                value={value}
                setValue={setValue}
                isValid={isValid}
                setIsValid={setIsValid}
              />
              <div className={styles[`hyperlink-container`]}>
                <HyperLink
                  text={hyperlink}
                  path=""
                  className={styles.hyperlink}
                />
              </div>
            </div>
            <div className={styles[`button-container`]}>
              <Button text={button.text} handleClick={() => {}} />
            </div>
          </>
        )
      }
    />
  );
};

export default LoginHistoryPage;
