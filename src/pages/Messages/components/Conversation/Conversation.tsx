import { useState } from "react";
import styles from "./Conversation.module.css";
import TalkContainer from "../TalkContainer/TalkContainer";
import { conversationData } from "@data/example";
import { TalkType } from "@/types";

type ConversationProps = {};

const Conversation = ({}: ConversationProps) => {
  const [conversation, setConversation] =
    useState<TalkType[]>(conversationData);
  return (
    <div className={styles.conversation}>
      {conversation.map((talk, index) => (
        <TalkContainer key={index} talk={talk} />
      ))}
    </div>
  );
};

export default Conversation;
