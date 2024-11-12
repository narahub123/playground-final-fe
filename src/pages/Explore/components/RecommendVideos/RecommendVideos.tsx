import RecommendVideo from "../RecommendVideo/RecommendVideo";
import styles from "./RecommendVideos.module.css";

export type RecommendVideosProps = {
  list: any[];
};

const RecommendVideos = ({ list }: RecommendVideosProps) => {
  return (
    <div className={styles.videos}>
      <ul className={styles.cover}>
        {list.map((item, index) => (
          <li className={styles.container}>
            <RecommendVideo item={item} key={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendVideos;
