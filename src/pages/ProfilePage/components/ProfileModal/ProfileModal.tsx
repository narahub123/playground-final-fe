import styles from "./ProfileModal.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";
import Image from "@pages/Explore/components/Image/Image";
import NormalInput from "../NormalInput/NormalInput";
import NormalTextarea from "../NormalTextarea/NormalTextarea";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Icon from "../Icon/Icon";
import { UserType } from "@/types";
import { dateArr, monthsArr, yearsArr } from "@data/date";
import { getLastDateOfMonth } from "@pages/ProfilePage/util";
import Constant from "@constants/index";

type ProfileModalProps = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<UserType>>;
};

const ProfileModal = ({ user, setUser }: ProfileModalProps) => {
  // 모달 내에서만 변경되고 실제로는 변경되어서는 안됨
  const [editableUser, setEditableUser] = useState<UserType>(user);
  const [editBirth, setEditBirth] = useState(false);
  const selections = {
    month: "private",
    year: "private",
  };

  const {
    birthPrivacyLevels,
    profileModalTitle,
    saveUpdatedProfileButton,
    addImageButton,
    deleteImageButton,
    headerImageAlt,
    profileImageWidth,
    nameInputTitle,
    introTextareaTitle,
    locationInputTitle,
    websiteInputTitle,
    birthContainerTitle,
    bithEditButton,
    privacy,
    deleteBirth,
    nameMaxLength,
    introMaxLength,
    editBirthWarning1,
    editBirthWarning2,
  } = Constant.profilePage;

  const { unitOfYear, unitOfMonth, unitOfDate } = Constant.dateUtil;

  // 저장 버튼을 누르면 실제 변경이 일어남

  const handleDeleteImage = () => {
    const updatedUser = { ...editableUser };

    updatedUser.headerImage = "";

    setEditableUser(updatedUser);
  };
  getLastDateOfMonth(editableUser.birth.year, editableUser.birth.month);
  return (
    <div className={styles.modal}>
      <div className={styles.headerContainer}>
        <Header title={profileModalTitle} />
        <button className={styles.button}>{saveUpdatedProfileButton}</button>
      </div>
      <main className={styles.main}>
        <div className={styles.imageArea}>
          <figure className={styles.headerImageContainer}>
            <div className={styles.iconsContainer}>
              <div className={styles.iconContainer}>
                <Icon
                  option={addImageButton.option}
                  color={addImageButton.color}
                  fontSize={addImageButton.fontSize}
                />
              </div>
              <div className={styles.iconContainer}>
                <Icon
                  option={deleteImageButton.option}
                  handleClick={handleDeleteImage}
                  color={deleteImageButton.color}
                  fontSize={deleteImageButton.fontSize}
                />
              </div>
            </div>
            <img
              src={editableUser.headerImage}
              alt={headerImageAlt}
              className={styles.headerImage}
            />
          </figure>
          <div className={styles.buttonContainer}>
            <figure className={styles.imageContainer}>
              <div className={styles.iconsContainer}>
                <div className={styles.iconContainer}>
                  <Icon
                    option={addImageButton.option}
                    color={addImageButton.color}
                    fontSize={addImageButton.fontSize}
                  />
                </div>
              </div>
              <Image url={editableUser.image} width={profileImageWidth} />
            </figure>
          </div>
        </div>
        <div className={styles.TextArea}>
          {/* 이름 변경  */}
          <NormalInput
            title={nameInputTitle}
            value={editableUser.name}
            maxLength={nameMaxLength}
          />
          {/* 자기 소개  */}
          <NormalTextarea
            title={introTextareaTitle}
            value={editableUser.intro}
            maxLength={introMaxLength}
          />
          {/* 위치  */}
          <NormalInput
            title={locationInputTitle}
            value={editableUser.location}
          />
          {/* 웹 사이트  */}
          <NormalInput title={websiteInputTitle} value={editableUser.website} />
          {/* 생일  */}
          <div className={styles.birthContainer}>
            <div className={styles.titleContainer}>
              <p className={styles.title}>{birthContainerTitle}</p>
              <button
                className={styles.edit}
                onClick={() => setEditBirth(!editBirth)}
              >
                {editBirth ? bithEditButton.cancel : bithEditButton.update}
              </button>
            </div>
            {editBirth ? (
              <>
                <div>
                  <p>{editBirthWarning1}</p>
                  <p>{editBirthWarning2}</p>
                </div>
                <div className={styles.editContainer}>
                  <Dropdown
                    title={unitOfYear}
                    selection={editableUser.birth.year}
                    list={yearsArr}
                    unit={unitOfYear}
                  />
                  <Dropdown
                    title={unitOfMonth}
                    selection={editableUser.birth.month}
                    list={monthsArr}
                    unit={unitOfMonth}
                  />
                  <Dropdown
                    title={unitOfDate}
                    selection={editableUser.birth.date}
                    list={dateArr(
                      editableUser.birth.year,
                      editableUser.birth.month
                    )}
                    unit={unitOfDate}
                  />
                </div>
                <div className={styles.privacy}>
                  <p>{privacy.title}</p>
                  <p>{privacy.detail}</p>
                  <Dropdown
                    title={privacy.monthDropdownTitle}
                    selection={selections.month}
                    list={birthPrivacyLevels}
                  />
                  <Dropdown
                    title={privacy.yearDropdownTitle}
                    selection={selections.year}
                    list={birthPrivacyLevels}
                  />
                </div>
                <div className={styles.deleteContainer}>
                  <button
                    className={styles.delete}
                    onClick={() => {
                      // 삭제 api와 연결할 것
                    }}
                  >
                    {deleteBirth}
                  </button>
                </div>
              </>
            ) : (
              <div className={styles.content}>
                <p
                  className={styles.birth}
                >{`${editableUser.birth.year}${unitOfYear} ${editableUser.birth.month}${unitOfMonth} ${editableUser.birth.date}${unitOfDate}`}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileModal;
