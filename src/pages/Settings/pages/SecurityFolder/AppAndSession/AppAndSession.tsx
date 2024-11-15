import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./AppAndSession.module.css";
import Constant from "@constants/index";
import { Link } from "react-router-dom";
import Icon from "@pages/Settings/components/Icon/Icon";

const AppAndSession = () => {
  const { title, detail, settingsList } =
    Constant.settings.security.appAndSession;
  return (
    <div className={styles.appAndSession}>
      <header>
        <Header title={title} />
        <p className={styles.detail}>{detail}</p>
      </header>
      <main className={styles.main}>
        <ul className={styles.container}>
          {settingsList.map((item, index) => (
            <Link
              to={`/settings/${item.path}`}
              key={index}
              className={styles.item}
            >
              <span>
                <p>{item.title}</p>
              </span>
              <span>
                <Icon option="forward" />
              </span>
            </Link>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default AppAndSession;
