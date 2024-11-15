import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./Security.module.css";
import Constant from "@constants/index";
import { Link } from "react-router-dom";
import Icon from "@pages/Settings/components/Icon/Icon";
import SettingCard from "@pages/Messages/components/SettingCard/SettingCard";

const Security = () => {
  const {
    title,
    detail,
    heading1,
    desciption1,
    path1,
    pathTitle1,
    heading2,
    desciption2,
    path2,
    pathTitle2,
    heading3,
    desciption3,
    protectionForChangingPassword,
  } = Constant.settings.security.security;

  return (
    <div className={styles.security}>
      <header>
        <Header title={title} />
        <p className={styles.detail}>{detail}</p>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h3>{heading1}</h3>
          <Link to={`/settings/${path1}`} className={styles.item}>
            <span>
              <p>{pathTitle1}</p>
            </span>
            <span>
              <Icon option="forward" />
            </span>
          </Link>
          <p className={styles.description}>{desciption1}</p>
        </section>
        <section className={styles.section}>
          <h3>{heading2}</h3>
          <Link to={`/settings/${path2}`} className={styles.item}>
            <span>
              <p>{pathTitle2}</p>
            </span>
            <span>
              <Icon option="forward" />
            </span>
          </Link>
          <p className={styles.description}>{desciption2}</p>
        </section>
        <section className={styles.section}>
          <h3>{heading3}</h3>
          <SettingCard
            text="비밀번호 재설정 보호"
            checked="squareChecked"
            unchecked="squareEmpty"
            setting={protectionForChangingPassword}
          />
          <p className={styles.description}>{desciption3}</p>
        </section>
      </main>
    </div>
  );
};

export default Security;
