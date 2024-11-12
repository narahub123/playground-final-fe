import Constant from "@constants/index";
import styles from "./TrendModal.module.css";
import { LuFrown } from "react-icons/lu";

type TrendModalProps = {
  keyword: string;
};

const TrendModal = ({ keyword }: TrendModalProps) => {
  // 클릭한 트렌트를 차단하는 API와 연결해야 함
  const handleClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    type: number | string
  ) => {
    // 페이지 이동 방지
    e.preventDefault();
    console.log("타입과 트렌트 키워드", type, keyword);
  };
  return (
    <div className={styles.modal}>
      <ul className={styles.list}>
        {Constant.trend.reportList.map((report) => (
          <li
            className={styles.item}
            key={report.type}
            onClick={(e) => handleClick(e, report.type)}
          >
            <LuFrown /> <p className={styles.text}>{report.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendModal;
