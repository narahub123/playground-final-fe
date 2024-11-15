import Constant from "@constants/index";
import styles from "./ConnectedAccounts.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";

const ConnectedAccounts = () => {
  const { title, detail } = Constant.settings.security.connectedAccounts;
  return (
    <div className={styles.connectedAccounts}>
      <header>
        <Header title={title} />
        <p className={styles.detail}>{detail}</p>
      </header>
    </div>
  );
};

export default ConnectedAccounts;
