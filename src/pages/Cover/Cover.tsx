import { Outlet, useLocation } from "react-router-dom";
import styles from "./Cover.module.css";
import { useEffect } from "react";
import { tabTitles } from "@data/title";

const Cover = () => {
  const { pathname } = useLocation();
  console.log("현재 페이지 url", pathname);

  // 탭 타이틀 설정하기
  useEffect(() => {
    // 현재 url 가져오기
    const url = pathname.split("/")[1];

    // url과 일치하는 타이틀 가져오기
    const title = tabTitles.filter((title) => title.url === url)[0]?.name;

    // 이름을 불러올 api 생성 필요
    const name = "그냥";

    // 문서 타이틀에 타이틀 삽입하기
    document.title = title
      ? title + " | PlayGround"
      : url
      ? `${name}(@${url}) | PlayGround`
      : "PlayGrond";
  }, []);

  return (
    <div className={styles.cover}>
      <Outlet />
    </div>
  );
};

export default Cover;
