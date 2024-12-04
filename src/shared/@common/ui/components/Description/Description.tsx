import styles from "./Description.module.css";

interface DescriptionProps {
  text: string;
}

const Description = ({ text }: DescriptionProps) => {
  return <p className={styles.description}>{text}</p>;
};

export default Description;
