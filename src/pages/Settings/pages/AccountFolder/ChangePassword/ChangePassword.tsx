import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./ChangePassword.module.css";
import Constant from "@constants/index";
import NormalInput from "@pages/ProfilePage/components/NormalInput/NormalInput";
import { Link } from "react-router-dom";

const ChangePassword = () => {
  const {
    title,
    curPassword,
    forgetPassword,
    newPassword,
    confirmPassword,
    explanation,
    changeButton,
  } = Constant.settings.account.password;
  return (
    <div className={styles.changePassword}>
      <Header title={title} />
      <main className={styles.main}>
        <section className={styles.section}>
          <NormalInput title={curPassword} value="" />
          <Link to={""} className={styles.link}>
            {forgetPassword}
          </Link>
        </section>
        <section className={styles.section}>
          <NormalInput title={newPassword} value="" />
          <NormalInput title={confirmPassword} value="" />
        </section>
        <section className={styles.section}>
          <p>{explanation}</p>
        </section>
        <div className={styles.btnContainer}>
          <button className={styles.button}>{changeButton}</button>
        </div>
      </main>
    </div>
  );
};

export default ChangePassword;
