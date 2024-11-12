import styles from "./Image.module.css";

type ImageProps = {
  url: string;
  width?: string;
};

const Image = ({ url, width = "50px" }: ImageProps) => {
  return (
    <img
      src={url}
      className={styles.image}
      style={{ width: width, height: width }}
    />
  );
};

export default Image;
