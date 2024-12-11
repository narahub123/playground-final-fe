import { getUserId } from "@shared/@common/model/selectors";
import styles from "./ScreenNamePage.module.css";
import { InputValueType } from "@shared/@common/types";
import { Input, Title } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { createNewUserIdByIds } from "@features/settings-branch-list/data";

const ScreenNamePage = () => {
  const userId = useSelector(getUserId);
  // 아이디 값
  const [value, setValue] = useState<InputValueType>(userId);
  // 유효성
  const [isValid, setIsValid] = useState(true);
  // 추천 아이디
  const [recommendedUserIds, setRecommnedUserIds] = useState<string[]>([]);

  const { pageTitle, input, title, button } = useLanguageMode([
    "pages",
    "ScreenNamePage",
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const newUserId = await createNewUserIdByIds(userId);
      if (newUserId) {
        setRecommnedUserIds(newUserId); // 추천 아이디 업데이트
      }
    };

    fetchData(); // 비동기 함수 호출
  }, [userId]); // 의존성 배열에 userId 추가

  console.log(recommendedUserIds);

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={<></>}
      bottomContent={
        <>
          <div className={styles[`input-container`]}>
            <Input
              field="userId"
              fieldTitle={input.fieldTitle}
              value={value}
              setValue={setValue}
              isValid={isValid}
              setIsValid={setIsValid}
              valueMaxLength={15}
              validation={input.validation} // 유효성 검사
            />
          </div>
          <div className={styles[`recom-container`]}>
            <Title text={title} />
          </div>
          <div className={styles[`button-container`]}>
            <button
              className={`${styles.button} ${
                isValid ? undefined : styles.invalid
              }`}
            >
              {button.text}
            </button>
          </div>
        </>
      }
    />
  );
};

export default ScreenNamePage;
