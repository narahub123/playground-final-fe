import styles from "./AuthButton.module.css";

type AuthButtonProps = {
  name: string;
};

const AuthButton = ({ name }: AuthButtonProps) => {
  return <button className={styles.container}>{name}</button>;
};

export default AuthButton;
