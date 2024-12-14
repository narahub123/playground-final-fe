import styles from "./ProfileContainer.module.css";
import { Link } from "react-router-dom";
import Description from "../Description/Description";
import ProfileImage from "../ProfileImage/ProfileImage";
import { useSelector } from "react-redux";
import {
  getBlockedUsers,
  getFollowings,
} from "@shared/@common/model/selectors";
import Text from "../Text/Text";
import Button from "../Button/Button";
import { useAppDispatch } from "@app/store";
import {
  setBlockedUsers,
  setFollowings,
} from "@shared/@common/model/slices/userSlice";
import { useEffect, useState } from "react";
import { UserType } from "@shared/@common/types";
import { getUserByIdAPI } from "@shared/@common/model/apis";
import { useLanguageMode } from "@shared/@common/model/hooks";

interface ProfileContainerProps {
  item: string; // userId
}

const ProfileContainer = ({ item }: ProfileContainerProps) => {
  const dispatch = useAppDispatch();
  const blockedUsers = useSelector(getBlockedUsers);
  const followings = useSelector(getFollowings);
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    // userId를 통해서 user 데이터를 받음
    const user = getUserByIdAPI(item);

    if (!user) return;
    setUser(user);
  }, []);

  const isBlocked = user ? blockedUsers.includes(user.userId) : false;
  const isFollowing = user ? followings.includes(user.userId) : false;

  const handleBlock = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    const newBlocks = blockedUsers.filter((item) => item !== user?.userId);

    dispatch(setBlockedUsers(newBlocks));
  };
  const handleFollow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    let newFollowings: string[] = [];
    if (isFollowing) {
      newFollowings = followings.filter((item) => item !== user?.userId);
    } else {
      if (user) newFollowings = [...followings, user?.userId];
    }

    dispatch(setFollowings(newFollowings));
  };

  const { blocked, following, follow } = useLanguageMode([
    "components",
    "ProfileContainer",
  ]);

  return (
    <Link className={styles[`profile-container`]} to={`/${user?.userId}`}>
      <ProfileImage size={40} />
      <span className={styles.info}>
        <Text text={user?.username} style={styles.username} />
        <Text text={`@${user?.userId}`} type="description" />
        <Text text={user?.intro} />
      </span>
      <Button
        text={isBlocked ? blocked : isFollowing ? following : follow}
        handleClick={isBlocked ? handleBlock : handleFollow}
        style={isBlocked ? styles.blocked : ""}
        isValid
      />
    </Link>
  );
};

export default ProfileContainer;
