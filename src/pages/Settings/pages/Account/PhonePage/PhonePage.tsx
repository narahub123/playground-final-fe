import { HyperLink } from "@shared/@common/ui/components";
import styles from "./PhonePage.module.css";
import { MainLayout } from "@shared/pages/layout";
import { setFindByEmail } from "@shared/@common/model/slices/settingsSlice";

const PhonePage = () => {
  // 클릭시 모달창이 열리는 함수 작성 필요
  
  return (
    <MainLayout
      pageTitle="휴대폰 변경"
      backward
      topContent={<></>}
      bottomContent={
        <div className={styles.container}>
          <HyperLink text="휴대폰 번호 추가" setter={setFindByEmail} />
        </div>
      }
    />
  );
};

export default PhonePage;
