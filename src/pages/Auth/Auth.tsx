import styles from "./Auth.module.css";
import AuthButton from "./components/AuthButton/AuthButton";

const Auth = () => {
  return (
    <div className={styles.auth}>
      <section className={styles.section}>
        <h1 className={styles.intro}>PlayGround</h1>
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}>회원가입</h1>
        <div className={styles.container}>
          <AuthButton name={"구글 회원가입"} />
          <AuthButton name={"네이버 회원가입"} />
          <AuthButton name={"카카오 회원가입"} />
          <AuthButton name={"이메일 회원가입"} />
        </div>
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}>로그인</h1>
        <AuthButton name={"구글 로그인"} />
        <AuthButton name={"네이버 로그인"} />
        <AuthButton name={"카카오 로그인"} />
        <AuthButton name={"이메일 로그인"} />
      </section>
    </div>
  );
};

export default Auth;
