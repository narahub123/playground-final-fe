import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { MdArrowBack } from "react-icons/md";

type HeaderProps = {
  title: string;
  detail?: string;
};

const Header = ({ title, detail }: HeaderProps) => {
  const navigate = useNavigate();
  // 클릭하면 이전 페이지로 이동함
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <header className={styles.header}>
      <div className={styles.upper}>
        <MdArrowBack className={styles.icon} onClick={handleClick} />
        <p className={styles.title}>{title}</p>
      </div>
      {detail && (
        <div className={styles.lower}>
          <p className={styles.detail}>{detail}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
