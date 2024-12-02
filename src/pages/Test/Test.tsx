import styles from "./Test.module.css";
import {
  Flag,
  Icon,
  Image,
  Input,
  ListModal,
  ProfileImage,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Textarea,
} from "@shared/@common/ui/components";

import { useRef, useState } from "react";
import { useFocusTrap, useImagePreview } from "@shared/@common/model/hooks";
import { languageList, listModalExample } from "@shared/@common/data";
import ModalLayout from "@shared/@common/layouts/ModalLayout/ModalLayout";
import Select from "@shared/@common/ui/components/Select/Select";
import { useSelector } from "react-redux";
import { getBgTheme, getLanguage } from "@shared/@common/model/selectors";
import BGToggleButton from "@shared/@common/ui/components/BGToggleButton/BGToggleButton";
import { setLanguage } from "@shared/@common/model/slices/settingsSlice";
import { profile } from "console";
import { profile1, profile2 } from "@shared/@common/assets/images";

const Test = () => {
  const bgTheme = useSelector(getBgTheme);
  const language = useSelector(getLanguage);
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  const { setLastClick } = useFocusTrap({
    ref: pageRef,
    location: "test page",
    showModal:
      showModal || isOpen || isOpenDropdown || isLangOpen || bgTheme === "dark"
        ? true
        : false, // 여러 모달 창에 적용하기 위해서 유니언으로 전달해야 함
  });

  // 각 모달에 따라 다른 값이 들어가게 됨
  // 매개변수의 타입을 string | number | undefined로 한정함
  const handleClick = (value: string | number | undefined) => {
    console.log(value);
  };

  // 컴포넌트 생성해서 사용할 때 아래의 사용법을 사용해야 함
  const Content = (props: any) => {
    const { hideModal, setLastClick } = props;
    return (
      // 클래스 이름 추가하기
      <>
        <div className={styles.mid}>
          <button
            className={styles.modal}
            onClick={(e) => {
              e.stopPropagation();
              setShowSecondModal(!showSecondModal);
              setLastClick(e.target as HTMLElement);
            }}
          >
            모달창 열기
          </button>
        </div>
        <div>제목</div>
        <div>
          {/* 클릭이벤트에 hideModal 추가하기 */}
          <button className={styles.button} onClick={() => hideModal()}>
            zdhifasfasf adfasfasfasfasfasfasf
          </button>
        </div>
        <div>푸터</div>
      </>
    );
  };

  const Content2 = (props: any) => {
    const { hideModal } = props;

    return (
      <>
        <button
          onClick={(e) => {
            e.stopPropagation();
            hideModal();
          }}
        >
          adfasf
        </button>
      </>
    );
  };

  const { images, setImages, handleImagePreview } = useImagePreview(true);

  console.log(language);

  return (
    <div className="test" ref={pageRef}>
      {showModal && (
        <ModalLayout setToggle={setShowModal} showModal={showSecondModal}>
          <Content />
        </ModalLayout>
      )}
      {showSecondModal && (
        <ModalLayout setToggle={setShowSecondModal}>
          <Content2 />
        </ModalLayout>
      )}
      <div className={styles[`modal-container`]}>
        <div className={styles.right}>
          <Icon
            iconName="wrong"
            iconTitle="뒤로 가기"
            handleClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
              setLastClick(e.target as HTMLElement);
            }}
          />
          {isOpen && (
            <ListModal
              list={listModalExample}
              handleClick={handleClick}
              showModal={isOpen}
              setShowModal={setIsOpen}
            />
          )}
        </div>

        <div className={styles.left}>
          <button
            className={styles.button}
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(!showModal);
              setLastClick(e.target as HTMLElement);
            }}
            aria-haspopup="true" // 해당 요소가 하위 팝업이나 메뉴를 가지고 있음
            aria-expanded="false" // 해당 요소가 접혀 있음
          >
            모달창 열기
          </button>
        </div>
      </div>
      <div className={styles[`select-contaienr`]}>
        <Select
          pageRef={pageRef}
          isOpen={isOpenDropdown}
          setIsOpen={setIsOpenDropdown}
          setLastClick={setLastClick}
          list={listModalExample}
        />
      </div>
      <div className={styles[`toggle-container`]}>
        <BGToggleButton setLastClick={setLastClick} />
      </div>
      <div className={styles[`input-container`]}>
        <Input field="username" fieldTitle="이름" valueMaxLength={20} />
        <Input field="password" fieldTitle="비밀번호" />
      </div>
      <div className={styles[`input-container`]}>
        <Input
          field="username"
          fieldTitle="이름"
          valueMaxLength={20}
          iconName="valid"
        />
        <Input field="userId" fieldTitle="사용자 아이디" />
      </div>
      <div className={styles[`textarea-container`]}>
        <Textarea
          field={"userIntro"}
          fieldTitle="자기 소개글"
          valueMaxLength={120}
        />
      </div>
      <div className={styles[`language-container`]}>
        <Select
          pageRef={pageRef}
          isOpen={isLangOpen}
          setIsOpen={setIsLangOpen}
          setLastClick={setLastClick}
          list={languageList(language)}
          initialValue={language}
          reducer={setLanguage}
        />
      </div>

      {/* <div className={styles.skeleton}>
        <SkeletonCircle
          size={100}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <SkeletonText
          noOfLines={3}
          gap={1.5}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <Skeleton asChild>
          <Select
            pageRef={pageRef}
            isOpen={isLangOpen}
            setIsOpen={setIsLangOpen}
            setLastClick={setLastClick}
            list={listLanguageList}
          />
        </Skeleton>
        <Skeleton asChild>
          <Input field="userId" fieldTitle="사용자 아이디" />
        </Skeleton>
        <Skeleton asChild>
          <Input field="username" fieldTitle="이름" valueMaxLength={20} />
        </Skeleton>
        <Skeleton asChild>
          <Flag countryCode="kr" />
        </Skeleton>
        <Skeleton asChild>
          <Flag countryCode="kr" />
        </Skeleton>
      </div> */}
      <div className={styles[`profile-image-container`]}>
        <ProfileImage size={150} disabled={false} />
      </div>
      <div className={styles[`image-container`]}>
        <ul className={styles[`image-list`]}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Image src={profile2} key={index} role="link" to="/login" />
          ))}
        </ul>
      </div>
      <div>
        <input type="file" multiple onChange={handleImagePreview} />
        <ul>
          {images.map((image, index) => (
            <Image src={image} key={index} role="link" to="/login" />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Test;
