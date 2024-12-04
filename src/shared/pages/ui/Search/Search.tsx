import { Icon } from "@shared/@common/ui/components";
import styles from "./Search.module.css";

interface SearchProps {
  placeholder?: string;
}

const Search = ({ placeholder }: SearchProps) => {
  return (
    <div className={styles[`search-container`]}>
      <input type="text" className={styles.search} placeholder={placeholder} />
      <Icon iconName="search" iconTitle="" ariaHidden className={styles.icon} />
    </div>
  );
};

export default Search;
