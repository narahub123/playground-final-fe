import { Outlet, useLocation } from "react-router-dom";
import styles from "./Cover.module.css";
import { useEffect } from "react";
import { tabTitles } from "@data/title";
import { useSelector } from "react-redux";
import { getSettings } from "@shared/@common/model/selectors/settingsSelectors";

const Cover = () => {
  const { pathname } = useLocation();

  const settings = useSelector(getSettings);
  console.log(settings);

  useEffect(() => {
    const { bgTheme, colorTheme, fontSize } = settings;

    const dataset = document.documentElement.dataset;

    dataset.bgTheme = bgTheme;
    dataset.colorTheme = colorTheme;
    dataset.fontSize = fontSize;
  }, [settings]);

  // 탭 타이틀 설정하기
  useEffect(() => {
    // 현재 url 가져오기
    const url = pathname.split("/")[1];

    // url과 일치하는 타이틀 가져오기
    const title = tabTitles.filter((title) => title.url === url)[0]?.name;

    // 이름을 불러올 api 생성 필요
    const name = "그냥";

    // 문서 타이틀에 타이틀 삽입하기
    // 매체되는 타이틀이 있는 경우
    document.title = title
      ? `${title} | PlayGround`
      : url && name // 매치되는 타이틀은 없지만 유저 이름을 찾을 수 있는 경우(프로필 페이지)
      ? `${name}(@${url}) | PlayGround`
      : "페이지를 찾을 수 없습니다 | PlayGrond"; // 유저 이름을 찾을 수 없는 경우
  }, []);

  return (
    <div className={styles.cover}>
      <Outlet />
    </div>
  );
};

export default Cover;
