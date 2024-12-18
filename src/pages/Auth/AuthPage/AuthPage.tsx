import { useLanguageMode } from "@shared/@common/model/hooks";
import styles from "./AuthPage.module.css";
import { Link } from "react-router-dom";
import { AuthButtonType } from "@shared/@common/types";
import { AuthButton } from "@shared/auth/ui/components";

const AuthPage = () => {
  const { title, heading1, list1, heading2, list2 } = useLanguageMode([
    "pages",
    "AuthPage",
  ]);
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </header>
      <main className={styles.main}>
        {/* 회원 가입 */}
        <div className={styles.section}>
          <h3 className={styles.heading}>{heading1}</h3>
          <ul className={styles.list}>
            {(list1 as AuthButtonType[]).map((item, index) => (
              <AuthButton item={item} key={index} />
            ))}
          </ul>
        </div>
        {/* 로그인 */}
        <div className={styles.section}>
          <h3 className={styles.heading}>{heading2}</h3>
          <ul className={styles.list}>
            {(list2 as AuthButtonType[]).map((item, index) => (
              <AuthButton item={item} key={index} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
