import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { MdArrowBack } from "react-icons/md";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  // 클릭하면 이전 페이지로 이동함
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <header className={styles.header}>
      <MdArrowBack className={styles.icon} onClick={handleClick} />
      <p className={styles.title}>{title}</p>
    </header>
  );
};

export default Header;
