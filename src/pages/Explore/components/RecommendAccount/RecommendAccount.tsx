import UserType from "@pages/Explore/types/user";
import Image from "../Image/Image";
import styles from "./RecommendAccount.module.css";
import FollowButton from "../FollowButton/FollowButton";
import { Link } from "react-router-dom";

export type RecommendAccountProps = {
  item: UserType;
};

const RecommendAccount = ({ item }: RecommendAccountProps) => {
  // 주어진 user가 현재 유저의 팔로잉에 포함되는지 여부에 따라서 text가 바뀜
  const isFollowing = false;
  return (
    <Link to={``} className={styles.link}>
      <div className={styles.account}>
        <Image url={item.imgUrl} />
        <div className={styles.text}>
          <p>{item.name}</p>
          <p>{item.id}</p>
          {/* 너비에 따라서 없어지기도 함  */}
          <p>{item.intro}</p>
        </div>
        <FollowButton isFollowing={isFollowing} />
      </div>
    </Link>
  );
};

export default RecommendAccount;
