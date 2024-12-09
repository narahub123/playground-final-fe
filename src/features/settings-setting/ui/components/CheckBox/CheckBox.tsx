import { Icon } from "@shared/@common/ui/components";
import styles from "./CheckBox.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@app/store";
import { CheckBoxType } from "@features/settings-setting/types/data";

interface CheckBoxProps {
  item: CheckBoxType;
  isRounded?: boolean;
  className?: string;
}

const CheckBox = ({ item, isRounded = false, className }: CheckBoxProps) => {
  const { text, reducer, initialValue } = item;

  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(initialValue);

  useEffect(() => {
    dispatch(reducer(isChecked));
  }, [isChecked]);

  return (
    <div
      className={`${styles.checkbox} ${className}`}
      onClick={() => setIsChecked(!isChecked)}
    >
      <span>{text}</span>
      {isChecked ? (
        isRounded ? (
          <Icon
            iconName="roundedCheckedbox"
            iconTitle=""
            fontSize={22}
            className={styles.icon}
          />
        ) : (
          <Icon
            iconName="checkedbox"
            iconTitle=""
            fontSize={22}
            className={styles.icon}
          />
        )
      ) : isRounded ? (
        <Icon iconName="roundedCheckbox" iconTitle="" fontSize={22} />
      ) : (
        <Icon iconName="checkbox" iconTitle="" fontSize={22} />
      )}
    </div>
  );
};

export default CheckBox;
