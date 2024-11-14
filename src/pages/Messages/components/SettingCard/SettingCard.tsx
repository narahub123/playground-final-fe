import { useState } from "react";
import MessageIcon from "../MessageIcon/MessageIcon";
import styles from "./SettingCard.module.css";

type SettingCardProps = {
  text: string;
  checked: string;
  unchecked: string;
  setting: boolean | string;
  setDefaultValue?: React.Dispatch<React.SetStateAction<string>>;
  value?: string;
};

const SettingCard = ({
  text,
  checked,
  unchecked,
  setting,
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
  );
};

export default SettingCard;
