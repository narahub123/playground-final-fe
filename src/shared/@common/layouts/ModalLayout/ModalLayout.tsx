    import { Icon, Overlay } from "@shared/@common/ui/components";
    import styles from "./ModalLayout.module.css";
    import {
    useClickOutside,
    useFocusTrap,
    useShowAndHideEffect,
    } from "@shared/@common/model/hooks";
    import React, { useRef } from "react";

    const ModalLayout = (props: any) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { children, setToggle } = props;

    // 창 여닫기 효과
    const { showCond, hideModal, handleTransitionEnd } =
        useShowAndHideEffect(setToggle);

    // 포커스 트랩
    useFocusTrap({
        ref: containerRef,
        location: "ModalLayout",
        setShowModal: setToggle,
        hideModal,
    });

    // 외부 클릭시 창 닫기
    useClickOutside(containerRef, setToggle, hideModal);

    // content 생성하기
    const Content = React.cloneElement(children, {
        hideModal,
        className: styles.content,
    });

    return (
        <div
        className={`${styles.layout} ${showCond}`}
        onTransitionEnd={handleTransitionEnd}
        >
        <Overlay />
        <div className={styles.container} ref={containerRef}>
            <div className={styles.header}>
            <Icon
                iconName="close"
                iconTitle="닫기"
                handleClick={() => hideModal()}
            />
            </div>
            <>{Content}</>
            <div className={styles.footer}>푸터</div>
        </div>
        </div>
    );
    };

    export default ModalLayout;
