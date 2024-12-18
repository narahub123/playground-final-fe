import styles from "../styles/Modal.module.css";
import { ReactNode } from "react";

interface ModalMainProps {
  children: ReactNode;
}

const ModalMain = ({ children }: ModalMainProps) => {
  return <div className={styles.modal}>{children}</div>;
};

export default ModalMain;
