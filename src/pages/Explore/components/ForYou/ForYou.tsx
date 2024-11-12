import styles from "./ForYou.module.css";
import { postList, UserList, videoList } from "@data/example";
import Trend from "../Trend/Trend";
import { RecommendLayout } from "@layouts/index";
import RecommendAccounts from "../RecommendAccounts/RecommendAccounts";
import RecommendVideos from "../RecommendVideos/RecommendVideos";
import Feeds from "../Feeds/Feeds";

const ForYou = () => {
  return (
    <div className={styles.container}>
      <Trend />
      <RecommendLayout
        title="추천 계정"
        list={UserList}
        component={RecommendAccounts}
      />
      <RecommendLayout
        title="추천 비디오"
        list={videoList}
        component={RecommendVideos}
      />
      <RecommendLayout title="추천 게시물" list={postList} component={Feeds} />
    </div>
  );
};

export default ForYou;
