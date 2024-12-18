import styles from "./AuthButton.module.css";
import { Link } from "react-router-dom";
import { AuthButtonType } from "@shared/@common/types";
import { Text } from "@shared/@common/ui/components";
import { useAppDispatch } from "@app/store";

interface AuthButtonProps {
  item: AuthButtonType;
  style?: string;
  handleClick?: (value: any) => any;
}

const AuthButton = ({ item, style, handleClick }: AuthButtonProps) => {
  const dispatch = useAppDispatch();
  const { text, path, img, colorTheme, reducer } = item;

  const Item = path ? Link : "button";

  const clickHandler = reducer
    ? () => {
        dispatch(reducer);
      }
    : handleClick;
  return (
    <Item
      to={path || ""}
      className={`${styles[`auth-button`]} ${style} ${
        colorTheme ? styles[`color-theme`] : ""
      }`}
      onClick={clickHandler}
    >
      <div className={styles.button}>
        {img && <img src={img} style={{ width: "20px" }} />}
        <Text text={text} bold />
      </div>
    </Item>
  );
};

export default AuthButton;
