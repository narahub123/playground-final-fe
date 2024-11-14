import { background1, profile1, video1, video2 } from "@asset/index";
import styles from "./MediaContainer.module.css";
import Thumb from "../Thumb/Thumb";

export interface MediaType {
  postId: string;
  type: string;
  src: string;
}

const MediaContainer = () => {
  const mediaList: MediaType[] = [
    { postId: "abc", type: "image", src: profile1 },
    { postId: "abd", type: "video", src: video1 },
    { postId: "abd", type: "video", src: video2 },
    { postId: "abd", type: "image", src: background1 },
  ];
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
