import Empty from "@pages/Bookmarks/components/Empty/Empty";
import styles from "./MessageSearchResult.module.css";
import Tabs from "@pages/Explore/components/Tabs/Tabs";
import Constant from "@constants/index";
import MessageIcon from "../MessageIcon/MessageIcon";
import MessageList from "../MessageList/MessageList";

type MessageSearchResultProps = {
  results: {
    users: any[];
    groups: any[];
    conversations: any[];
  };
  keyword: string;
};

const MessageSearchResult = ({
  results,
  keyword,
}: MessageSearchResultProps) => {
  const { resultFields, resultEmpty, tabList } = Constant.messages;

  // 검색 결과 섹션 목록
  const keys = Object.keys(resultFields);

  return (
    <div className={styles.container}>
      <Tabs tabList={tabList} />
      {/* 검색 결과가 없는 경우 */}
      {results.users.length === 0 &&
      results.groups.length === 0 &&
      results.conversations.length === 0 ? (
        <Empty
          title={`${keyword}${resultEmpty.title}`}
          description={resultEmpty.description}
        />
      ) : (
        // 검색 결과가 있는 경우
        keys.map((key) => {
          return results[key as keyof typeof results].length !== 0 ? (
            <section key={key}>
              <header className={styles.header}>
                <MessageIcon option={key} handleClick={() => {}} />
                <p>{resultFields[key as keyof typeof resultFields]}</p>
              </header>
              <MessageList items={results[key as keyof typeof results]} />
            </section>
          ) : undefined;
        })
      )}
    </div>
  );
};
export default MessageSearchResult;
