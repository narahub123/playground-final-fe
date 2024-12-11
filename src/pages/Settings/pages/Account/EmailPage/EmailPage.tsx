import { MainLayout } from "@shared/pages/layout";
import styles from "./EmailPage.module.css";
import { HyperLink, Input } from "@shared/@common/ui/components";
import { useState } from "react";
import { InputValueType } from "@shared/@common/types";
import { useSelector } from "react-redux";
import { getEmail } from "@shared/@common/model/selectors";

const EmailPage = () => {
  const email = useSelector(getEmail);
  const [value, setValue] = useState<InputValueType>(email);
  const [isValid, setIsValid] = useState(true);

  return (
    <MainLayout
      pageTitle="이메일 변경"
      backward
      topContent={
        <div className={styles[`input-container`]}>
          <Input
            field="email"
            fieldTitle="현재 이메일"
            value={value}
            setValue={setValue}
            isValid={isValid}
            setIsValid={setIsValid}
            disabled={true}
          />
        </div>
      }
      bottomContent={
        <div className={styles.container}>
          <HyperLink text="이메일 주소 업데이트" setter={setIsValid} />
        </div>
      }
    />
  );
};

export default EmailPage;
