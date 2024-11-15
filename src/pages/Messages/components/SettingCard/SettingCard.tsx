import { useState } from "react";
import MessageIcon from "../MessageIcon/MessageIcon";
import styles from "./SettingCard.module.css";

type SettingCardProps = {
  text: string;
  checked: string;
  unchecked: string;
  setting: boolean | string;
  detail?: string;
  setDefaultValue?: React.Dispatch<React.SetStateAction<string>>;
  value?: string;
};

const SettingCard = ({
  text,
  checked,
  unchecked,
  setting,
  detail,
  setDefaultValue,
  value,
}: SettingCardProps) => {
  const [isChecked, setIsChecked] = useState(setting);

  const handleClick = () => {
    if (!value) {
      setIsChecked(!isChecked);
    } else {
      setDefaultValue && setDefaultValue(value);
    }

    // 설정 API와 연결해서 바꾸기
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.upper}>
        <p>{text}</p>
        {!value ? (
          <MessageIcon
            option={isChecked ? checked : unchecked}
            handleClick={() => {}}
          />
        ) : (
          <MessageIcon
            option={value === setting ? checked : unchecked}
            handleClick={() => {}}
          />
        )}
      </div>
      {detail && (
        <div className={styles.lower}>
          <p className={styles.detail}>{detail}</p>
        </div>
      )}
    </div>
  );
};

export default SettingCard;
