import Constant from "@constants/index";
import styles from "./Auth.module.css";
import AuthButton from "./components/AuthButton/AuthButton";

const Auth = () => {
  const { title, signin, login } = Constant.auth;
  return (
    <div className={styles.auth}>
      <section className={styles.section}>
        <h1 className={styles.intro}>{title}</h1>
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}>{signin.title}</h1>
        <ul className={styles.container}>
          {signin.buttons.map((item) => (
            <AuthButton name={`${item.name} ${signin.title}`} key={item.type} />
          ))}
        </ul>
      </section>
      <section className={styles.section}>
        <h1 className={styles.title}>{login.title}</h1>
        <ul className={styles.container}>
          {login.buttons.map((item) => (
            <AuthButton name={`${item.name} ${login.title}`} key={item.type} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Auth;
