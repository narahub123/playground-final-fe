import { profile1, profile2 } from "@shared/@common/assets/images";
import styles from "./ProfileImage.module.css";
import { useRef } from "react";

interface ProfileImageProps {
  size?: number;
  unit?: string;
}

const ProfileImage = ({ size = 100, unit = "px" }: ProfileImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
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
        <input type="file" hidden ref={inputRef} />
        <img
          className={styles.img}
          src={profile2}
          alt={`프로필 사진`}
          style={{
            width: `${size}${unit}`,
            height: `${size}${unit}`,
            borderRadius: "50%",
            objectFit: `cover`,
            cursor: "pointer",
          }}
          onClick={() => {
            // 이미지를 클릭하면 input이 열리도록하는 메서드
            inputRef.current?.click();
          }}
          tabIndex={0}
        />
      </figure>
    </div>
  );
};

export default ProfileImage;
