import { useLanguageMode } from "@shared/@common/model/hooks";
import styles from "./ContactsDashboardPage.module.css";
import { MainLayout } from "@shared/pages/layout";
import { HyperLink, Input, Text } from "@shared/@common/ui/components";
import { useState } from "react";
import { InputValueType } from "@shared/@common/types";
import { useSelector } from "react-redux";
import { getContacts } from "@shared/@common/model/selectors";
import { setContacts } from "@shared/@common/model/slices/settingsSlice";

const ContactsDashboardPage = () => {
  const [value, setValue] = useState<InputValueType>("");
  const [isValid, setIsValid] = useState(false);

  const [isVerified, setVerfied] = useState(false);

  const contacts = useSelector(getContacts);

  const { pageTitle, hyperlink1, expl, heading, inputFieldTitle, hyperlink2 } =
    useLanguageMode(["pages", "ContactsDashboardPage"]);

  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={
        <div className={styles.heading}>
          <HyperLink
            text={hyperlink1}
            className={styles.hyperlink}
            setter={setContacts}
          />
          <Text text={expl} type="description" />
        </div>
      }
      bottomContent={
        isVerified ? (
          <>{contacts}</>
        ) : (
          <div className={styles.container}>
            <Text text={heading} type="heading" />
            <Input
              field="password"
              fieldTitle={inputFieldTitle}
              value={value}
              setValue={setValue}
              isValid={isValid}
              setIsValid={setIsValid}
            />
            <HyperLink text={hyperlink2} className={styles.forget} />
          </div>
        )
      }
    />
  );
};

export default ContactsDashboardPage;
