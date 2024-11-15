import Constant from "@constants/index";
import styles from "./AudienceAndTagging.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";
import SettingCard from "@pages/Messages/components/SettingCard/SettingCard";
import { Link } from "react-router-dom";
import Icon from "@pages/Settings/components/Icon/Icon";

const AudienceAndTagging = () => {
  const {
    title,
    detail,
    description1,
    description2,
    path,
    pathTitle,
    pathDetail,
  } = Constant.settings.privacy.audience_and_tagging;
  return (
    <div className={styles.audienceAndTagging}>
      <header>
        <Header title={title} />
        <p className={styles.detail}>{detail}</p>
      </header>
      <main className={styles.main}>
        <div className={styles.section}>
          <SettingCard
            text="내게시물을 비공개로 설정"
            setting={false}
            unchecked="squareEmpty"
            checked="squareChecked"
          />
          <p className={styles.description}>{description1}</p>
        </div>
        <div className={styles.section}>
          <SettingCard
            text="동영상 보호하기"
            setting={false}
            unchecked="squareEmpty"
            checked="squareChecked"
          />
          <p className={styles.description}>{description2}</p>
        </div>
        <div className={styles.section}>
          <Link to={`/settings/${path}`} className={styles.item}>
            <span>
              <p>{pathTitle}</p>
              <p className={styles.detail}>{pathDetail}</p>
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

export default AudienceAndTagging;
