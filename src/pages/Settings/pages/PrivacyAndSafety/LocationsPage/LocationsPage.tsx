import styles from "./LocationsPage.module.css";
import { MainLayout } from "@shared/pages/layout";
import { useLanguageMode } from "@shared/@common/model/hooks";
import { useState } from "react";
import { Button, HyperLink, Input, Text } from "@shared/@common/ui/components";
import { InputValueType } from "@shared/@common/types";
import { useSelector } from "react-redux";
import { getLocations } from "@shared/@common/model/selectors";

const LocationsPage = () => {
  const locations = useSelector(getLocations);

  const [isVerified, setIsVerified] = useState(false);
  const [value, setValue] = useState<InputValueType>("");
  const [isValid, setIsValid] = useState(false);

  const { pageTitle, verification, verified } = useLanguageMode([
    "pages",
    "LocationsPage",
  ]);
  return (
    <MainLayout
      pageTitle={pageTitle}
      backward
      topContent={
        <Text
          text={isVerified ? verified.description : verification.description}
          type={isVerified ? "text" : "description"}
        />
      }
      bottomContent={
        <>
          {isVerified ? (
            <>
              {locations.length === 0 ? (
                <div className={styles.empty}>
                  <Text text={verified.empty.heading} type="heading" />
                  <Text text={verified.empty.expl} type="description" />
                </div>
              ) : (
                <>
                  {locations.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </>
              )}
            </>
          ) : (
            <>
              <div className={styles[`input-container`]}>
                <Input
                  field="password"
                  fieldTitle={verification.inputFieldTitle}
                  value={value}
                  setValue={setValue}
                  isValid={isValid}
                  setIsValid={setIsValid}
                />
                <HyperLink
                  text={verification.hyperlink}
                  className={styles.hyperlink}
                />
              </div>
              <div className={styles[`button-container`]}>
                <Button
                  text={verification.button.text}
                  handleClick={() => {}}
                  isValid={isValid}
                />
              </div>
            </>
          )}
        </>
      }
    />
  );
};

export default LocationsPage;
