import { profile1, profile2 } from "@shared/@common/assets/images";
import styles from "./ProfileImage.module.css";
import { useRef, useState } from "react";

interface ProfileImageProps {
  size?: number;
  unit?: string;
}

const ProfileImage = ({ size = 100, unit = "px" }: ProfileImageProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState(profile1);

  // 업로드할 이미지 프리뷰를 생성하는 함수
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result as string);
    };
  };

  return (
    <div className={styles[`profile-image`]}>
      <figure
        className={styles.container}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: `${size}${unit}`,
          height: `${size}${unit}`,
        }}
      >
        <input
          type="file"
          hidden
          ref={inputRef}
          onChange={(e) => handleImage(e)}
        />
        <img
          className={styles.img}
          src={image}
          alt={`프로필 사진`}
          style={{
            width: `${size}${unit}`,
            height: `${size}${unit}`,
            borderRadius: "50%",
            objectFit: `cover`,
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            console.log("input이 눌림");

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
