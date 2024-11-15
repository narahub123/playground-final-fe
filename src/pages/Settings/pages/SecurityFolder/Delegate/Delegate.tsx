import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./Delegate.module.css";
import Constant from "@constants/index";
import { Link } from "react-router-dom";
import Icon from "@pages/Settings/components/Icon/Icon";
import SlideButton from "@pages/Settings/components/SlideButton/SlideButton";

const Delegate = () => {
  const { title, detail, heading, settingsList, text, description } =
    Constant.settings.security.delegate;
  return (
    <div className={styles.delegate}>
      <header>
        <Header title={title} />
        <p className={styles.detail}>{detail}</p>
      </header>
      <main className={styles.main}>
        <section>
          <div className={styles.slideContainer}>
            <span className={styles.text}>{text}</span>
            <span>
              <SlideButton setting={false} />
            </span>
          </div>
          <p className={styles.description}>{description}</p>
        </section>
        <section>
          <h3 className={styles.heading}>{heading}</h3>
          <ul className={styles.container}>
            {settingsList.map((item, index) => (
              <Link to={`${item.path}`} key={index} className={styles.item}>
                <span>
                  <p>{item.title}</p>
                </span>
                <span>
                  <Icon option="forward" />
                </span>
              </Link>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Delegate;
