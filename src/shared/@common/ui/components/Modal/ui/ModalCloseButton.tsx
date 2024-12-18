import styles from "../styles/Modal.module.css";
import Icon from "../../Icon/Icon";
import { useAppDispatch } from "@app/store";

interface ModalCloseButtonProps {
  reducer: { type: string; payload: any };
}

const ModalCloseButton = ({ reducer }: ModalCloseButtonProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(reducer);
  };
  return (
    <Icon
      iconName="close"
      iconTitle="닫기"
      handleClick={handleClick}
      className={styles.close}
    />
  );
};

export default ModalCloseButton;
