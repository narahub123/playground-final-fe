import styles from "../styles/Modal.module.css";
import { ReactNode } from "react";

interface ModalHeaderProps {
  children: ReactNode;
}

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <div className={styles.header}>{children}</div>;
};

export default ModalHeader;
