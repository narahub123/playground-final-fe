import styles from "../styles/Modal.module.css";
import { ReactNode } from "react";

interface ModalBodyProps {
  children: ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps) => {
  return <div className={styles.body}>{children}</div>;
};

export default ModalBody;
