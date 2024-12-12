import styles from "./LanguagePage.module.css";
import { MainLayout } from "@shared/pages/layout";
import Select from "@shared/@common/ui/components/Select/Select";
import { Description } from "@shared/@common/ui/components";
import { useRef, useState } from "react";
import { useFocusTrap, useLanguageMode } from "@shared/@common/model/hooks";
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

  const { pageTitle, description } = useLanguageMode(["pages", "LanguagePage"]);

  return (
    <div ref={pageRef}>
      <MainLayout
        pageTitle={pageTitle}
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
            <Description text={description} />
          </div>
        }
      />
    </div>
  );
};

export default LanguagePage;
