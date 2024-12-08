import { ReactNode } from "react";
import styles from "./Description.module.css";

interface DescriptionProps {
  text: string | ReactNode;
  className?: string;
}

const Description = ({ text, className }: DescriptionProps) => {
  return <p className={`${styles.description} ${className}`}>{text}</p>;
};

export default Description;
