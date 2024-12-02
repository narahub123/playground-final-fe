import { defaultProfile } from "@shared/@common/assets/images";
import styles from "./ProfileImage.module.css";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  getIsLoggedIn,
  getProfileImage,
} from "@shared/@common/model/selectors";
import { useAppDispatch } from "@app/store";
import { setUser } from "@shared/@common/model/slices/userSlice";
import { UserType } from "@shared/@common/types";

interface ProfileImageProps {
  size?: number;
  unit?: string;
}

const ProfileImage = ({ size = 100, unit = "px" }: ProfileImageProps) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  // 로그인 여부 확인 하기
  const login = useSelector(getIsLoggedIn);

  // 로그인을 한 경우: user 상태에서 프로필 이미지 가져오기
  const profileImage = useSelector(getProfileImage);

  // 기본 이미지 : 로그인을 한 경우 안 한 경우에 따라 다름
  const defaultImage = login
    ? profileImage // login 한 경우
      ? profileImage // 이미지가 있는 경우
      : defaultProfile // 이미지가 없는 경우
    : defaultProfile; // login 안 한 경우

  // 이미지 상태
  const [image, setImage] = useState(defaultImage);

  console.log(profileImage);

  // 업로드할 이미지 프리뷰를 생성하는 함수
  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      setImage(result);
      if (login) {
        dispatch(
          setUser({
            profileImage: result,
          })
        );
      }
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
            padding: `${image === defaultProfile ? "10px 0px 0px 0px" : "0px"}`,
            objectFit: `${image === defaultProfile ? "contain" : "cover"}`,
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
