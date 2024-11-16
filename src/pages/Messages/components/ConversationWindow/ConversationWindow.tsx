import { userData } from "@data/example";
import Conversation from "../Conversation/Conversation";
import Mate from "../Mate/Mate";
import MessageIcon from "../MessageIcon/MessageIcon";
import styles from "./ConversationWindow.module.css";
import Header from "@pages/Bookmarks/components/Header/Header";
import Constant from "@constants/index";

const ConversationWindow = () => {
  const user = userData;
  const { iconOption, iconTitle } = Constant.components.conversationWindow;
  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <Header title={userData.name} />
        <MessageIcon
          option={iconOption}
          handleClick={() => {}}
          title={iconTitle}
        />
      </div>

      <Mate user={user} />
      <Conversation />
    </div>
  );
};

export default ConversationWindow;
