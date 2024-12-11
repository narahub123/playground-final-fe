import { HyperLink } from "@shared/@common/ui/components";
import styles from "./PhonePage.module.css";
import { MainLayout } from "@shared/pages/layout";
import { setFindByEmail } from "@shared/@common/model/slices/settingsSlice";
import { useSelector } from "react-redux";
import { getPhone } from "@shared/@common/model/selectors";

const PhonePage = () => {
  const phoneList = useSelector(getPhone);
  // 클릭시 모달창이 열리는 함수 작성 필요

  return (
    <MainLayout
      pageTitle="휴대폰 변경"
      backward
      topContent={<></>}
      bottomContent={
        <>
          {phoneList && (
            <ul className={styles.list}>
              {phoneList.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          )}
          <div className={styles.container}>
            <HyperLink text="휴대폰 번호 추가" setter={setFindByEmail} />
          </div>
        </>
      }
    />
  );
};

export default PhonePage;
