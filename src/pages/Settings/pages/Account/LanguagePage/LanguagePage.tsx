import styles from "./LanguagePage.module.css";
import { MainLayout } from "@shared/pages/layout";
import Select from "@shared/@common/ui/components/Select/Select";
import { Description } from "@shared/@common/ui/components";
import { useRef, useState } from "react";
import { useFocusTrap } from "@shared/@common/model/hooks";
import { langList } from "@shared/@common/data";
import { useSelector } from "react-redux";
import { getLanguage } from "@shared/@common/model/selectors";
import { setLanguage } from "@shared/@common/model/slices/settingsSlice";

const LanguagePage = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const lang = useSelector(getLanguage);

  const { setLastClick } = useFocusTrap({
    location: "language page",
    ref: pageRef,
    showModal: isOpen,
  });

  return (
    <div ref={pageRef}>
      <MainLayout
        pageTitle="표시 언어 변경"
        backward
        topContent={<></>}
        bottomContent={
          <div className={styles[`select-container`]}>
            <Select
              isOpen={isOpen}
              pageRef={pageRef}
              setIsOpen={setIsOpen}
              list={langList}
              setLastClick={setLastClick}
              initialValue={lang}
              reducer={setLanguage}
            />
            <Description
              text={
                "이 계정에서 PG 헤드라인, 버튼 및 기타 텍스트에 사용할 기본 언어를 선택하세요. 타임라인에 표시되는 콘텐츠의 언어는 변경되지 않습니다."
              }
            />
          </div>
        }
      />
    </div>
  );
};

export default LanguagePage;
