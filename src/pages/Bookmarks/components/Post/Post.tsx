import styles from "./Post.module.css";

type PostProps = {
  post: any; // 실제로는 post type을 이용해야 함
};
const Post = ({ post }: PostProps) => {
  return <article className={styles.post}>Post {post}</article>;
};

export default Post;
