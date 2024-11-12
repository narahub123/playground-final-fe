import styles from "./Trend.module.css";
import TrendCard from "../TrendCard/TrendCard";
import TrendType from "@pages/Explore/types/trend";
import { useEffect, useState } from "react";
import { trendExample } from "@data/example";

type TrendProp = {
  user?: any;
};

const Trend = ({ user }: TrendProp) => {
  const [trends, setTrends] = useState<TrendType[]>(trendExample);
  // 트렌드 정보를 가져오는 API
  useEffect(() => {
    // 유저 정보가 없으면 실시간 트렌트를 보여주고
    // 유저 정보가 있다면 유저 관련 트렌트를 보여줌
  }, []);

  return (
    <section className={styles.trend}>
      <ul className={styles.container}>
        {trends.map((trend) => (
          <TrendCard trend={trend} key={trend.keyword} />
        ))}
      </ul>
    </section>
  );
};

export default Trend;
