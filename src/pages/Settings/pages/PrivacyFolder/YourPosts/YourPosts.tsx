import Constant from "@constants/index";
import styles from "./YourPosts.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";
import SettingCard from "@pages/Messages/components/SettingCard/SettingCard";
import { Link } from "react-router-dom";
import Icon from "@pages/Settings/components/Icon/Icon";

const YourPosts = () => {
  const {
    title,
    detail,
    text1,
    unchecked,
    checked,
    description1,
    path1,
    pathTitle1,
  } = Constant.settings.privacy.your_posts;
  return (
    <div className={styles.yourPost}>
      <header>
        <Header title={title} />
        <p className={styles.detail}>{detail}</p>
      </header>
      <main className={styles.main}>
        <div className={styles.section}>
          <SettingCard
            text={text1}
            setting={false}
            unchecked={unchecked}
            checked={checked}
          />
          <p className={styles.description}>{description1}</p>
        </div>
        <div className={styles.section}>
          <Link to={`/settings/${path1}`} className={styles.item}>
            <span>
              <p>{pathTitle1}</p>
            </span>
            <span>
              <Icon option="forward" />
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default YourPosts;
