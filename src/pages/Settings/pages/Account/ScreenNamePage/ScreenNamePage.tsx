import { getUserId } from "@shared/@common/model/selectors";
import styles from "./ScreenNamePage.module.css";
import { InputValueType } from "@shared/@common/types";
import { Button, HyperLink, Input, Title } from "@shared/@common/ui/components";
import { MainLayout } from "@shared/pages/layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { createNewUserIdByIds } from "@features/settings-branch-list/data";
import useValidationChecker from "@shared/@common/model/hooks/useValidationChecker";
import { useAppDispatch } from "@app/store";
import { setUserId } from "@shared/@common/model/slices/userSlice";

const ScreenNamePage = () => {
  const dispatch = useAppDispatch();
  const userId = useSelector(getUserId);
  // 아이디 값
  const [value, setValue] = useState<InputValueType>(userId);

  // 유효성
  const [isValid, setIsValid] = useState(true);
  // 추천 아이디
  const [recommendedUserIds, setRecommnedUserIds] = useState<string[]>([]);

  const { pageTitle, input, title, button, validations } = useLanguageMode([
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

  const { errorMessage } = useValidationChecker(value as string, validations);

  const handleClick = () => {
    dispatch(setUserId(value as string));
  };

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
              errorMessage={errorMessage}
            />
          </div>
          <div className={styles[`recom-container`]}>
            <Title text={title} />
            <ul className={styles.recoms}>
              {recommendedUserIds.map((item, index) => (
                <HyperLink text={item} path="" key={index} setter={setValue} />
              ))}
            </ul>
          </div>
          <div className={styles[`button-container`]}>
            <Button
              text={button.text}
              isValid={isValid && userId !== value}
              handleClick={handleClick}
            />
          </div>
        </>
      }
    />
  );
};

export default ScreenNamePage;
