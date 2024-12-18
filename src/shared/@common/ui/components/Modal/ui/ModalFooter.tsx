import styles from "../styles/Modal.module.css";
import { ReactNode } from "react";

interface ModalFooterProps {
  children: ReactNode;
}

const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className={styles.footer}>{children}</div>;
};

export default ModalFooter;
