import { Link } from "react-router-dom";
import styles from "./TrendCard.module.css";
import Constant from "@constants/index";
import TrendModal from "../TrendModal/TrendModal";
import { useState } from "react";
import { LuMoreHorizontal } from "react-icons/lu";
import TrendType from "@pages/Explore/types/trend";

type TrendCardProps = {
  trend: TrendType;
};

const TrendCard = ({ trend }: TrendCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    // 이동 방지
    e.preventDefault();
    console.log("더보기 클릭");
    setShowModal(!showModal);
  };

  return (
    <Link to="/search" key={trend.keyword} className={styles.card}>
      <li className={styles.item}>
        <span className={styles.left}>
          <p className={styles.type}>
            {trend.type === "current"
              ? Constant.trend.current
              : trend.type === "ko"
              ? `${Constant.trend.ko}에서 트렌드 중`
              : ""}
          </p>
          <p className={styles.keyword}>{trend.keyword}</p>
          <p className={styles.count}>{`게시물 ${trend.count}개`}</p>
        </span>
        <span className={styles.right} title="더보기">
          {showModal && <TrendModal keyword={trend.keyword} />}
          <LuMoreHorizontal
            className={styles.icon}
            onClick={(e) => handleClick(e)}
          />
        </span>
      </li>
    </Link>
  );
};

export default TrendCard;
