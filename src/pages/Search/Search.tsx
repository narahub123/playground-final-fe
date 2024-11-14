import styles from "./Search.module.css";
import SearchBox from "../Bookmarks/components/Search/Search";
import Icon from "./components/Icon/Icon";
import Tabs from "@pages/Explore/components/Tabs/Tabs";
import Constant from "@constants/index";
import { useLocation } from "react-router-dom";
import Feeds from "@pages/Explore/components/Feeds/Feeds";
import RecommendAccount from "@pages/Explore/components/RecommendAccount/RecommendAccount";
import { userData, UserList } from "@data/example";
import { RecommendLayout } from "@layouts/index";
import RecommendAccounts from "@pages/Explore/components/RecommendAccounts/RecommendAccounts";
import MediaContainer from "./components/MediaContainer/MediaContainer";

const Search = () => {
  const { search } = useLocation();
  const f = search.split("&f=")[1];
  console.log(f);

  return (
    <div className={styles.search}>
      <header className={styles.header}>
        <Icon option="backward" />
        <SearchBox pageName="search" placeholder="" />
        <Icon option="more" />
      </header>
      <Tabs tabList={Constant.search.tabList} isQuery={true} />
      <main className={styles.main}>
        {!f ? (
          <>
            <RecommendLayout
              title="사용자"
              list={UserList}
              component={RecommendAccounts}
            />
            <Feeds list={[]} />
          </>
        ) : f === "live" ? (
          <Feeds list={[]} />
        ) : f === "user" ? (
          <RecommendLayout
            title=""
            list={UserList}
            component={RecommendAccounts}
          />
        ) : (
          <MediaContainer />
        )}
      </main>
    </div>
  );
};

export default Search;
