import styles from "./NotFound.module.css";
import Constant from "@constants/index";
import { Link } from "react-router-dom";

type NotFoundProps = {};

const NotFound = ({}: NotFoundProps) => {
  const { title, button } = Constant.notFound;

  return (
    <div className={styles.notfound}>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <Link to={"/explore"} className={styles.link}>
          {button}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
