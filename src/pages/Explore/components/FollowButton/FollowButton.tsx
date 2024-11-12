import { useState } from "react";
import styles from "./FollowButton.module.css";
import Constant from "@constants/index";

type FollowButtonProps = {
  isFollowing: boolean;
};

const FollowButton = ({ isFollowing }: FollowButtonProps) => {
  const [isOver, setIsOver] = useState(false);
  // 팔로잉을 하고 있을 때 마우스 오버와 하고 있지 않을 때 마우스 오버가 다름
  const handleMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // 이동 방지
    e.preventDefault();
    setIsOver(true);
  };
  const handleMouseLeave = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // 이동 방지
    e.preventDefault();
    setIsOver(false);
  };
  return (
    <button
      className={styles.button}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
    >
      {
        // hover 아니고 팔로잉인 경우
        !isOver && isFollowing
          ? Constant.trend.followButton.following
          : // hover 아니고 팔로잉이 아닌 경우
          !isOver && !isFollowing
          ? Constant.trend.followButton.follow
          : // hover이고 팔로잉인 상태
          isOver && isFollowing
          ? Constant.trend.followButton.unfollow
          : // hover이고 팔로잉이 아닌 상태
          isOver && !isFollowing
          ? Constant.trend.followButton.follow
          : ""
      }
    </button>
  );
};

export default FollowButton;
