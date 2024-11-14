import Image from "@pages/Explore/components/Image/Image";
import styles from "./Mate.module.css";
import Dot from "../Dot/Dot";

type MateProps = {
  user: any;
};

const Mate = ({ user }: MateProps) => {
  const convertDateToString = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return `${year}년 ${month + 1}월`;
  };
  return (
    <div className={styles.mate}>
      <Image url={user.image} width="70px" />
      <p className={styles.name}>{user.name}</p>
      <p className={styles.id}>@{user.id}</p>
      <p className={styles.intro}>{user.intro}</p>
      <div className={styles.info}>
        <p className={styles.regDate}>{convertDateToString(user.regDate)}</p>
        <Dot />
        <p className={styles.followers}>{`${user.followers.length} 팔로워`}</p>
      </div>

      <p className={styles.matchedFollowings}>
        내가 팔로우하는 사용자 중에는 팔로워가 없습니다.
      </p>
      {/* 같은 팔로잉이 있는 경우 표시하기  */}
    </div>
  );
};

export default Mate;
