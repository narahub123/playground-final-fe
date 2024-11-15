import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./About.module.css";
import Constant from "@constants/index";
import { Link } from "react-router-dom";
import Icon from "@pages/Settings/components/Icon/Icon";

const About = () => {
  const { title, detail, settingsBranchList, linkIcon } =
    Constant.settings.about;
  return (
    <div className={styles.about}>
      <Header title={title} />
      <p className={styles.detail}>{detail}</p>
      <main className={styles.main}>
        <ul className={styles.container}>
          {settingsBranchList.map((section) => (
            <li key={section.section} className={styles.section}>
              <p className={styles.title}>{section.section}</p>
              <ul className={styles.linkContainer}>
                {section.list.map((item) => (
                  <Link to={item.url} key={item.title} className={styles.item}>
                    <p>{item.title}</p>
                    <Icon option={linkIcon} />
                  </Link>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default About;
