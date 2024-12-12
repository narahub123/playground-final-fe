import { MainLayout } from "@shared/pages/layout";
import styles from "./CountryPage.module.css";
import { Description } from "@shared/@common/ui/components";
import { useRef, useState } from "react";
import Select from "@shared/@common/ui/components/Select/Select";
import { useFocusTrap } from "@shared/@common/model/hooks";
import { langList } from "@shared/@common/data";

const CountryPage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const { setLastClick } = useFocusTrap({
    ref: pageRef,
    location: "country page",
    showModal: isOpen,
  });

  return (
    <div className={styles.page} ref={pageRef}>
      <MainLayout
        pageTitle="국가 변경"
        backward
        topContent={<></>}
        bottomContent={
          <div className={styles.container}>
            <Select
              pageRef={pageRef}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              setLastClick={setLastClick}
              list={langList}
            />
            <Description
              text={
                "사용자 계정과 연결된 기본 국가입니다. 사용자의 국가는 PG 환경을 맞춤화하는 데 사용됩니다. "
              }
            />
          </div>
        }
      />
    </div>
  );
};

export default CountryPage;
