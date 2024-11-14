import Tabs from "@pages/Explore/components/Tabs/Tabs";
import styles from "./ProfilePage.module.css";
import Constant from "@constants/index";
import { Outlet } from "react-router-dom";
import Image from "@pages/Explore/components/Image/Image";
import { currentUserData, userData } from "@data/example";
import { LuCalendar } from "react-icons/lu";
import { useState } from "react";
import ProfileModal from "./components/ProfileModal/ProfileModal";
import { UserType } from "@/types";

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState<UserType>(userData);

  const showBtnCond = user.id === currentUserData.userId;

  const {
    headerImageAlt,
    profileImageWidth,
    editProfileButtonTitle,
    regDate,
    following,
    follower,
  } = Constant.profilePage;

  // Date를 특정 형식으로 바꾸는 메서드
  const convertDateToString = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return `${year}${Constant.dateUtil.unitOfYear} ${month + 1}${
      Constant.dateUtil.unitOfMonth
    }`;
  };

  return (
    <div className={styles.profilePage}>
      {showModal && <ProfileModal user={user} setUser={setUser} />}
      <section className={styles.profileContainer}>
        <div className={styles.imageArea}>
          <figure className={styles.headerImageContainer}>
            {/* 커버 사진 */}
            <img
              src={user.headerImage}
              alt={headerImageAlt}
              className={styles.headerImage}
            />
          </figure>
          {/* 프로필 사진  */}
          <div className={styles.buttonContainer}>
            <figure className={styles.imageContainer}>
              <Image url={user.image} width={profileImageWidth} />
            </figure>
            {/* 프로필 수정 버튼  */}
            {showBtnCond && (
              <button
                className={styles.button}
                onClick={() => setShowModal(!showModal)}
              >
                {editProfileButtonTitle}
              </button>
            )}
          </div>
        </div>
        <div className={styles.textArea}>
          <p className={styles.name}>{user.name}</p>
          <p className={styles.id}>@{user.id}</p>
          <div className={styles.dateContainer}>
            <LuCalendar />
            <p className={styles.regDate}>{`${regDate}: ${convertDateToString(
              user.regDate
            )}`}</p>
          </div>

          <div className={styles.followInfo}>
            <span className={styles.info}>
              <p className={styles.highlight}>{user.followings.length}</p>
              <p>{following}</p>
            </span>
            <span className={styles.info}>
              <p className={styles.highlight}>{user.followers.length}</p>
              <p>{follower}</p>
            </span>
          </div>
        </div>
      </section>
      <Tabs tabList={Constant.profilePage.tabList} />
      <Outlet />
    </div>
  );
};

export default ProfilePage;
