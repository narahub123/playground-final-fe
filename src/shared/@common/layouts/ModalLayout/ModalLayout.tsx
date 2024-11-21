import { Icon, Overlay } from "@shared/@common/ui/components";
import styles from "./ModalLayout.module.css";

const ModalLayout = (props: any) => {
  const { children } = props;
  return (
    <div className={styles.layout}>
      <Overlay />
      <div className={styles.container}>
        <div className={styles.header}>
          <Icon iconName="close" iconTitle="닫기" handleClick={() => {}} />
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>푸터</div>
      </div>
    </div>
  );
};

export default ModalLayout;
