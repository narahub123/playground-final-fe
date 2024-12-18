import styles from "../styles/Modal.module.css";
import { ReactNode } from "react";

interface ModalContentProps {
  children: ReactNode;
}

const ModalContent = ({ children }: ModalContentProps) => {
  return <div className={styles.content}>{children}</div>;
};

export default ModalContent;
