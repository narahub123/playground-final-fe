import styles from "./MediaContainer.module.css";
import Thumb from "../Thumb/Thumb";
import { mediaList } from "@data/example";

export interface MediaType {
  postId: string;
  type: string;
  src: string;
}

const MediaContainer = () => {
  return (
    <div className={styles.mediaContainer}>
      <ul className={styles.container}>
        {mediaList.map((media, index) => (
          <Thumb media={media} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default MediaContainer;
