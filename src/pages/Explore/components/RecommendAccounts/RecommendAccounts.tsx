import RecommendAccount from "../RecommendAccount/RecommendAccount";
import styles from "./RecommendAccounts.module.css";

export type RecommendAccountsProps = {
  list: any[];
};

const RecommendAccounts = ({ list }: RecommendAccountsProps) => {
  return (
    <div className={styles.container}>
      {list.map((item, index) => (
        <RecommendAccount item={item} key={index} />
      ))}
    </div>
  );
};

export default RecommendAccounts;
