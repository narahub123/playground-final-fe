import Tabs from "@pages/Explore/components/Tabs/Tabs";
import styles from "./Home.module.css";
import Constant from "@constants/index";
import Feeds from "@pages/Explore/components/Feeds/Feeds";
import Write from "./components/Write/Write";

const Home = () => {
  const homeFeedsList: any[] = [];
  return (
    <div className={styles.home}>
      <Tabs tabList={Constant.home.tabList} />
      <Write />
      <Feeds list={homeFeedsList} />
    </div>
  );
};

export default Home;
