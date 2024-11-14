import MessageDetailView from "./components/MessageDetailView/MessageDetailView";
import MessageNavigation from "./components/MessageNavigation/MessageNavigation";
import styles from "./Messages.module.css";

const Messages = () => {
  return (
    <div className={styles.messages}>
      {/* <MessageNavigation /> */}
      <MessageDetailView />
    </div>
  );
};

export default Messages;
