import { LuSearch } from "react-icons/lu";
import styles from "./Search.module.css";

type SearchProps = {
  placeholder: string;
  pageName: string;
  setKeyword?: React.Dispatch<React.SetStateAction<string>>;
  setIsSearching?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Search = ({
  placeholder,
  pageName,
  setKeyword,
  setIsSearching,
}: SearchProps) => {
  // 어디에서 검색을 하냐에 따라서 연결 api가 달라짐
  // 이를 위해서 어떤 페이지를 알 수 있는 props를 전달해야하는지 생각해보기
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 검색어
    const keyword = e.target.value;
    console.log("입력한 검색어", keyword);

    setKeyword && setKeyword(keyword);

    // 현재 페이지에 따라서 다른 API를 연결함
    if (pageName === "") {
    }
  };

  return (
    <div className={styles.search}>
      <LuSearch className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        onFocus={() => {
          setIsSearching && setIsSearching(true);
        }}
      />
    </div>
  );
};

export default Search;
