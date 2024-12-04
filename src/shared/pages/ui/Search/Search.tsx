import { Icon } from "@shared/@common/ui/components";
import styles from "./Search.module.css";
import { useRef, useState } from "react";
import { debounce } from "@shared/@common/utils";

interface SearchProps {
  placeholder?: string;
}

const Search = ({ placeholder }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");
  // 포커스 조건
  const focusCond = isFocused ? styles.focused : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setSearch(text);
  };

  const debouncedHandleChange = debounce<typeof handleChange>(
    handleChange,
    500
  );

  const handleDelete = () => {
    if (!inputRef.current) return;
    inputRef.current.value = "";
    setSearch("");
  };

  return (
    <div className={styles[`search-container`]}>
      <input
        type="text"
        className={`${styles.search} ${focusCond}`}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={debouncedHandleChange}
        ref={inputRef}
      />
      <Icon
        iconName="search"
        iconTitle=""
        ariaHidden
        className={styles.searchIcon}
      />
      {search.length > 0 && (
        <Icon
          iconName="wrong"
          iconTitle=""
          handleClick={() => handleDelete()}
          className={styles.deleteIcon}
        />
      )}
    </div>
  );
};

export default Search;
