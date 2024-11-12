import styles from "./Post.module.css";

export type PostProps = {
  item: any; // 실제로는 post type을 이용해야 함
};
const Post = ({ item }: PostProps) => {
  return <article className={styles.post}>Post {item}</article>;
};

export default Post;
