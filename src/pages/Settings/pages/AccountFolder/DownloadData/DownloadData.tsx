import Constant from "@constants/index";
import styles from "./DownloadData.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";

const DownloadData = () => {
  const { title, detail, explanation, readyToDownload, downloadButton } =
    Constant.settings.account.download_data;
  return (
    <div className={styles.downloadData}>
      <Header title={title} />
      <p className={styles.detail}>{detail}</p>
      <main className={styles.main}>
        <p className={styles.explanation}>{explanation}</p>
        <div className={styles.btnContainer}>
          <span className={styles.text}>
            <p>{readyToDownload}</p>
          </span>
          <span className={styles.btn}>
            <button className={styles.button}>{downloadButton}</button>
          </span>
        </div>
      </main>
    </div>
  );
};

export default DownloadData;
