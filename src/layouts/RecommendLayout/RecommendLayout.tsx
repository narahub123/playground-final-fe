import styles from "./RecommendLayout.module.css";
import { FeedsProps } from "@pages/Explore/components/Feeds/Feeds";
import { RecommendAccountsProps } from "@pages/Explore/components/RecommendAccounts/RecommendAccounts";
import { RecommendVideosProps } from "@pages/Explore/components/RecommendVideos/RecommendVideos";

type RecommendLayoutProps = {
  title: string;
  list: any[];
  component: React.ComponentType<
    RecommendAccountsProps | RecommendVideosProps | FeedsProps
  >;
};

const RecommendLayout = ({
  title,
  list,
  component: Component,
}: RecommendLayoutProps) => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.title}>{title}</h1>
      <Component list={list} />
    </div>
  );
};

export default RecommendLayout;
