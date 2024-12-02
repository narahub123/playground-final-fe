import { defaultProfile } from "@shared/@common/assets/images";
import styles from "./ProfileImage.module.css";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getIsLoggedIn, getUser } from "@shared/@common/model/selectors";
import { useAppDispatch } from "@app/store";
import { setUser } from "@shared/@common/model/slices/userSlice";

interface ProfileImageProps {
  size?: number;
  unit?: string;
  disabled?: boolean; // 이미지 업데이트 가능 여부 설정
}

const ProfileImage = ({
  size = 100,
  unit = "px",
  disabled = false,
}: ProfileImageProps) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  // 로그인 여부 확인 하기
  const login = useSelector(getIsLoggedIn);

  console.log("로그인 여부", login);

  // 로그인을 한 경우: user 상태에서 프로필 이미지 가져오기
  const user = useSelector(getUser);

  // 기본 이미지 : 로그인을 한 경우 안 한 경우에 따라 다름
  const defaultImage = login
    ? user.profileImage // login 한 경우
      ? user.profileImage // 이미지가 있는 경우
      : defaultProfile // 이미지가 없는 경우
    : defaultProfile; // login 안 한 경우

  console.log(defaultImage);

  // 이미지 상태
  const [image, setImage] = useState(defaultImage);

  console.log(user.profileImage);

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
          disabled={disabled}
        />
        <img
          className={styles.img}
          src={image}
          alt={`${login ? `${user.username} 프로필 사진` : "프로필 사진"}`}
          style={{
            width: `${size}${unit}`,
            height: `${size}${unit}`,
            borderRadius: "50%",
            padding: `${image === defaultProfile ? "10px 0px 0px 0px" : "0px"}`,
            objectFit: `${image === defaultProfile ? "contain" : "cover"}`,
            cursor: `${disabled ? "default" : "pointer"}`,
          }}
          onClick={(e) => {
            e.stopPropagation();
            // 이미지를 클릭하면 input이 열리도록하는 메서드
            inputRef.current?.click();
          }}
          tabIndex={0}
          aria-hidden={disabled} // disabled 라면 true 아니면 true
          title={`${login ? `${user.username} 프로필 사진` : "프로필 사진"}`}
        />
      </figure>
    </div>
  );
};

export default ProfileImage;
