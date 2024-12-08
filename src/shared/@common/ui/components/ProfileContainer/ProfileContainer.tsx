import { Link } from "react-router-dom";
import Description from "../Description/Description";
import ProfileImage from "../ProfileImage/ProfileImage";
import styles from "./ProfileContainer.module.css";

const ProfileContainer = () => {
  return (
    <Link className={styles[`profile-container`]} to={"/abced"}>
      <ProfileImage size={40} />
      <span className={styles.info}>
        <p className={styles.username}>몰러</p>
        <Description text={`@${"abced"}`} />
      </span>
    </Link>
  );
};

export default ProfileContainer;
