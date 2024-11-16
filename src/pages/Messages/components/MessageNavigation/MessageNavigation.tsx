import Header from "@pages/Bookmarks/components/Header/Header";
import styles from "./MessageNavigation.module.css";
import Search from "@pages/Bookmarks/components/Search/Search";
import MessageList from "../MessageList/MessageList";
import MessageIcon from "../MessageIcon/MessageIcon";
import { useState } from "react";
import { profile1, profile2 } from "@asset/index";
import Empty from "@pages/Bookmarks/components/Empty/Empty";
import MessageSearchResult from "../MessageSearchResult/MessageSearchResult";
import Constant from "@constants/index";

const MessageNavigation = () => {
  const [conversations, setConversations] = useState([
    {
      image: profile1,
      name: "몰러",
      id: "abcd1234",
      lastDate: new Date(),
      lastMsg: "그냥",
      conversationId: "abcd1245",
    },
    {
      image: profile2,
      name: "거래계",
      id: "afasdfsdfefd",
      lastDate: new Date(),
      lastMsg: "거래 완료요",
      conversationId: "aacccd12",
    },
  ]);

  // 검색창을 클릭한 경우
  const [isSearching, setIsSearching] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState({
    users: [
      // {
      //   image: profile1,
      //   name: "몰러",
      //   id: "abcd1234",
      //   lastDate: new Date(),
      //   lastMsg: "그냥",
      //   conversationId: "abcd1245",
      // },
      // {
      //   image: profile2,
      //   name: "거래계",
      //   id: "afasdfsdfefd",
      //   lastDate: new Date(),
      //   lastMsg: "거래 완료요",
      //   conversationId: "aacccd12",
      // },
    ],
    groups: [],
    conversations: [],
  });

  // 검색창의 왼쪽 화살표를 누른 경우
  const handleBackward = () => {
    // 페이지 이동은 안함
    // 검색중 해제만
    setIsSearching(false);
  };

  const {
    pageName,
    title,
    settingIconOption,
    settingIconTitle,
    addMessageIconOption,
    addMessageIconTitle,
    searchBackwordButtonOption,
    searchPlaceholder,
    empty,
  } = Constant.messages;

  return (
    <div className={styles.navigation}>
      <div className={styles.header}>
        <div className="left">
          <Header title={title} />
        </div>
        <div className="right">
          <MessageIcon
            option={settingIconOption}
            handleClick={() => {}}
            title={settingIconTitle}
          />
          <MessageIcon
            option={addMessageIconOption}
            handleClick={() => {}}
            title={addMessageIconTitle}
          />
        </div>
      </div>
      <section className={styles.search}>
        {/* 이전 페이지 버튼이 생김: 이전 페이지 이동 및 isSearching이 false로 바뀜 */}
        {isSearching && (
          <MessageIcon
            option={searchBackwordButtonOption}
            handleClick={handleBackward}
          />
        )}
        <span className={styles.input}>
          <Search
            pageName={pageName}
            placeholder={searchPlaceholder}
            setKeyword={setKeyword}
            setIsSearching={setIsSearching}
          />
        </span>
      </section>

      {!isSearching ? (
        <MessageList items={conversations} />
      ) : results.users.length === 0 &&
        results.groups.length === 0 &&
        results.conversations.length === 0 &&
        !keyword ? (
        <Empty title={empty.title} description={empty.description} />
      ) : (
        <MessageSearchResult results={results} keyword={keyword} />
      )}
    </div>
  );
};

export default MessageNavigation;
