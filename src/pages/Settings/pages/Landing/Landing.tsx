import styles from "./Landing.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";
import Search from "@pages/Bookmarks/components/Search/Search";
import Icon from "@pages/Settings/components/Icon/Icon";
import Constant from "@constants/index";
import { Link } from "react-router-dom";

const Landing = () => {
  const { title, pageName, search, settingsList, moveForwardBtn } =
    Constant.settings.landing;
  return (
    <div className={styles.landing}>
      <Header title={title} />
      <Search pageName={pageName} placeholder={search.placeholder} />
      <ul className={styles.container}>
        {settingsList.map((item, index) => (
          <Link to={item.url} key={index} className={styles.setting}>
            <p>{item.name}</p>
            <Icon option={moveForwardBtn} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Landing;
