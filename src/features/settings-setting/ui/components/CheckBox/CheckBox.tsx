import styles from "./CheckBox.module.css";
import { Icon } from "@shared/@common/ui/components";
import { RootState, useAppDispatch } from "@app/store";
import { CheckBoxType } from "@features/settings-setting/types/data";
import { useSelector } from "react-redux";

interface CheckBoxProps {
  item: CheckBoxType;
  selector: (value: RootState) => boolean | string | number;
  isRounded?: boolean;
  className?: string;
}

const CheckBox = ({
  item,
  selector, // 기본 값 가져오기 위한 selector
  isRounded = false,
  className,
}: CheckBoxProps) => {
  const dispatch = useAppDispatch();
  const { text, reducer, value } = item;

  // 기본 값
  const initialValue = useSelector(selector);

  // 클릭 이벤트
  const handleClick = (value: undefined | string | number) => {
    // value 값이 주어지지 않으면(true or false)
    if (!value) {
      dispatch(reducer(!initialValue));
      // value 값이 주어지면
    } else {
      dispatch(reducer(value));
    }
  };

  return (
    <div
      className={`${styles.checkbox} ${className}`}
      onClick={() => handleClick(value)}
    >
      <span>{text}</span>
      {(!value ? initialValue : initialValue === value) ? (
        // 일치하는 경우
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
      ) : // 일치하지 않은 경우
      isRounded ? (
        <Icon iconName="roundedCheckbox" iconTitle="" fontSize={22} />
      ) : (
        <Icon iconName="checkbox" iconTitle="" fontSize={22} />
      )}
    </div>
  );
};

export default CheckBox;
