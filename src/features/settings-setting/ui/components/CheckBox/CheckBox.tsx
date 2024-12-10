import styles from "./CheckBox.module.css";
import { Icon } from "@shared/@common/ui/components";
import { RootState, useAppDispatch } from "@app/store";
import { CheckBoxType } from "@features/settings-setting/types/data";
import { useSelector } from "react-redux";

interface CheckBoxProps {
  item: CheckBoxType;
  selector?: (value: RootState) => boolean | string | number; // redux에서 값 받아오기
  initialValue?: any; // 기본 값
  setter?: React.Dispatch<React.SetStateAction<any>>; // 값 변경 setter
  isRounded?: boolean;
  className?: string;
}

const CheckBox = ({
  item,
  selector, // 기본 값 가져오기 위한 selector
  setter,
  initialValue,
  isRounded = false,
  className,
}: CheckBoxProps) => {
  const dispatch = useAppDispatch();
  const { text, reducer, value } = item;

  // 타입 조건: 값이 빈문자열이 아니고 값이 없는 경우: boolean
  const typeCond = value !== "" && !value;

  // 기본 값 : selector가 있다면 사용 없다면 주어진 initialValue 사용
  const initVal = selector ? useSelector(selector) : initialValue;

  // 클릭 이벤트
  const handleClick = (value: undefined | string | number) => {
    // setter가 있다면 => 간접적으로 값 변경
    if (setter) {
      if (typeCond) {
        setter(!initVal);
      } else {
        setter(value);
      }
      return;
      // setter가 없다면: reducer 이용 => 직접적으로 값 변경
    } else if (reducer) {
      // value 값이 주어지지 않으면(true or false)
      if (!value) {
        dispatch(reducer(!initVal));
        // value 값이 주어지면
      } else {
        dispatch(reducer(value));
      }
      return;
    }
  };

  return (
    <div
      className={`${styles.checkbox} ${className}`}
      onClick={() => handleClick(value)}
    >
      <span>{text}</span>
      {(typeCond ? initVal : initVal === value) ? (
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
