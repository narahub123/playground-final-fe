import styles from "../styles/Modal.module.css";
import { ReactNode } from "react";

interface ModalContainerProps {
  children: ReactNode;
}

const ModalContainer = ({ children }: ModalContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default ModalContainer;
