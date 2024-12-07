import { Icon } from "@shared/@common/ui/components";
import styles from "./CheckBox.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@app/store";

interface CheckBoxProps {
  text: string;
  reducer: (value: boolean) => { type: string; payload: boolean };
  initialValue: boolean;
}

const CheckBox = ({ text, reducer, initialValue }: CheckBoxProps) => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(initialValue);

  useEffect(() => {
    dispatch(reducer(isChecked));
  }, [isChecked]);

  return (
    <div className={styles.checkbox} onClick={() => setIsChecked(!isChecked)}>
      <span>{text}</span>
      {isChecked ? (
        <Icon
          iconName="checkedbox"
          iconTitle=""
          fontSize={20}
          color="cornflowerblue"
        />
      ) : (
        <Icon iconName="checkbox" iconTitle="" fontSize={20} />
      )}
    </div>
  );
};

export default CheckBox;
