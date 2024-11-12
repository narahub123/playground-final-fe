import { useRef, useState } from "react";
import styles from "./RecommendVideo.module.css";
import { BsFillPlayCircleFill } from "react-icons/bs";

export type RecommendVideoProps = {
  item: any;
};

const RecommendVideo = ({ item }: RecommendVideoProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const vidoeRef = useRef<HTMLVideoElement>(null);
  const hanldleClick = () => {
    if (!vidoeRef.current) return;
    const video = vidoeRef.current;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else if (!isPlaying) {
      video.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className={styles.container} onClick={hanldleClick}>
      <BsFillPlayCircleFill className={styles.icon} />
      <video
        src={item.video}
        className={styles.video}
        controls
        ref={vidoeRef}
      />
    </div>
  );
};

export default RecommendVideo;
