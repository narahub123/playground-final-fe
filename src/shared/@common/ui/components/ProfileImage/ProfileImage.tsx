import { profile1, profile2 } from "@shared/@common/assets/images";
import styles from "./ProfileImage.module.css";

interface ProfileImageProps {
  size?: number;
  unit?: string;
}

const ProfileImage = ({ size = 100, unit = "px" }: ProfileImageProps) => {
  return (
    <div className={styles[`profile-image`]}>
      <figure
        className={styles.container}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: `2px solid red`,
          width: `${size}${unit}`,
          height: `${size}${unit}`,
        }}
      >
        <img
          src={profile2}
          alt={`프로필 사진`}
          style={{
            width: `${size}${unit}`,
            height: `${size}${unit}`,
            borderRadius: "50%",
            border: `2px solid black`,
            objectFit: `cover`,
            cursor: "pointer",
          }}
        />
      </figure>
    </div>
  );
};

export default ProfileImage;
