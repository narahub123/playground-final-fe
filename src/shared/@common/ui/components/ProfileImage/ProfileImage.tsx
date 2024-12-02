import { defaultProfile, defaultProfile1 } from "@shared/@common/assets/images";
import styles from "./ProfileImage.module.css";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  getBgTheme,
  getIsLoggedIn,
  getLanguage,
  getUser,
} from "@shared/@common/model/selectors";
import { useAppDispatch } from "@app/store";
import { setUser } from "@shared/@common/model/slices/userSlice";
import { setSigninUser } from "@shared/@common/model/slices/signinSlice";
import { getLangObjValue } from "@shared/@common/utils";
import { useImagePreview, useLanguageMode } from "@shared/@common/model/hooks";

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

  // 언어 설정
  const { imgAlt, ariaLabel } = useLanguageMode("profileImage");

  const bgTheme = useSelector(getBgTheme);

  // 로그인을 한 경우: user 상태에서 프로필 이미지 가져오기
  const user = useSelector(getUser);

  const { images, setImages, handleImagePreview } = useImagePreview();

  useEffect(() => {
    const defaultProfileImage =
      bgTheme === "light" ? defaultProfile : defaultProfile1;

    // 기본 이미지 : 로그인을 한 경우 안 한 경우에 따라 다름
    const defaultImage = login
      ? user.profileImage // login 한 경우
        ? user.profileImage // 이미지가 있는 경우
        : defaultProfileImage
      : defaultProfileImage; // login 안 한 경우

    setImages([defaultImage]);
  }, [login, bgTheme]);

  useEffect(() => {
    // 로그인한 경우
    if (login) {
      dispatch(setUser({ profileImage: images[0] }));
    } else {
      // 로그인 안 한 경우
      dispatch(setSigninUser({ profileImage: images[0] }));
    }
  }, [images]);

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
          onChange={(e) => handleImagePreview(e)}
          disabled={disabled}
        />
        <img
          className={styles.img}
          src={images[0]}
          alt={`${
            login ? `${user.username} ${imgAlt.login}` : `${imgAlt.logout}`
          }`}
          style={{
            width: `${size}${unit}`,
            height: `${size}${unit}`,
            borderRadius: "50%",
            padding: `${
              images[0] === defaultProfile || images[0] === defaultProfile1
                ? "10px 0px 0px 0px"
                : "0px"
            }`,
            objectFit: `${
              images[0] === defaultProfile || images[0] === defaultProfile1
                ? "contain"
                : "cover"
            }`,
            cursor: `${disabled ? "default" : "pointer"}`,
          }}
          onClick={(e) => {
            e.stopPropagation();
            // 이미지를 클릭하면 input이 열리도록하는 메서드
            inputRef.current?.click();
          }}
          tabIndex={disabled ? -1 : 0} // 포커스 가능 여부
          aria-hidden={disabled} // disabled 라면 true 아니면 true
          aria-label={ariaLabel}
          role="button" // 클릭 가능한 요소임을 명시
          title={`${
            login ? `${user.username} ${imgAlt.login}` : `${imgAlt.logout}`
          }`}
        />
      </figure>
    </div>
  );
};

export default ProfileImage;
