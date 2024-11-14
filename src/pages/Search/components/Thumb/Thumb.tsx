import { Link } from "react-router-dom";
import { MediaType } from "../MediaContainer/MediaContainer";
import styles from "./Thumb.module.css";

type ThumbProps = {
  media: MediaType;
};

const Thumb = ({ media }: ThumbProps) => {
  return (
    <Link className={styles.thumb} to={""}>
      {media.type === "image" ? (
        <img src={media.src} alt="" />
      ) : (
        <video src={media.src} />
      )}
    </Link>
  );
};

export default Thumb;
