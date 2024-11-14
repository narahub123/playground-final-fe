import { userData } from "@data/example";
import Conversation from "../Conversation/Conversation";
import Mate from "../Mate/Mate";
import MessageIcon from "../MessageIcon/MessageIcon";
import styles from "./ConversationWindow.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";

const ConversationWindow = () => {
  const user = userData;
  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <Header title={userData.name} />
        <MessageIcon option={"info"} handleClick={() => {}} title="자세히" />
      </div>

      <Mate user={user} />
      <Conversation />
    </div>
  );
};

export default ConversationWindow;
