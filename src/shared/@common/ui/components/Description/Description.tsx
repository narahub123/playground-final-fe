import styles from "./Description.module.css";

interface DescriptionProps {
  text: string;
  className?: string;
}

const Description = ({ text, className }: DescriptionProps) => {
  return <p className={`${styles.description} ${className}`}>{text}</p>;
};

export default Description;
