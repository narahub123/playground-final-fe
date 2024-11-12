import { useEffect, useState } from "react";
import styles from "./Bookmarks.module.css";
import Post from "./components/Post/Post";
import Empty from "./components/Empty/Empty";
import Constant from "@constants/index";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  // 피드에 필요한 목록을 받는 api
  useEffect(() => {}, []);
  return (
    <div className={styles.bookmarks}>
      <Header title={Constant.bookmarks.title} />
      <Search
        placeholder={Constant.bookmarks.placeholder}
        pageName={Constant.bookmarks.pageName}
      />
      <section className={styles.feeds}>
        {bookmarks.length === 0 ? (
          <Empty
            title={Constant.bookmarks.empty.title}
            description={Constant.bookmarks.empty.description}
          />
        ) : (
          bookmarks.map((bookmark) => <Post post={bookmark} />)
        )}
      </section>
    </div>
  );
};

export default Bookmarks;
