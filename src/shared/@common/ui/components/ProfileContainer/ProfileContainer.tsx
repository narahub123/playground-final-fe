import { Link } from "react-router-dom";
import Description from "../Description/Description";
import ProfileImage from "../ProfileImage/ProfileImage";
import styles from "./ProfileContainer.module.css";
import { useSelector } from "react-redux";
import { getUser } from "@shared/@common/model/selectors";

const ProfileContainer = () => {
  const user = useSelector(getUser);

  return (
    <Link className={styles[`profile-container`]} to={`/${user.userId}`}>
      <ProfileImage size={40} />
      <span className={styles.info}>
        <p className={styles.username}>{user.username}</p>
        <Description text={`@${user.userId}`} />
      </span>
    </Link>
  );
};

export default ProfileContainer;
